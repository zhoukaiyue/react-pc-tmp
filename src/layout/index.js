/*
 * @Descripttion: 布局组件
 * @version:
 * @Author: zhoukai
 * @Date: 2023-12-19 17:47:57
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-12-20 10:12:22
 */
import React, { Suspense } from 'react';
import { Layout, Menu } from 'antd';
import routerData from '@/packages/router';
import { convertToAntDesignMenu } from './utils/convertToAntDesignMenu';
import { setSelectKeys } from './utils/setSelectKeys';
import { useNavigate, Outlet } from 'react-router-dom';
import BasePageLoadingIndicator from '@/resources/components/base-page-loading-indicator';
const { Header, Content, Sider } = Layout;
// eslint-disable-next-line react/prop-types
const AppLayout = () => {
    const navigate = useNavigate();
    /**
     * 将路由数据转换为 Ant Design 菜单数据。
     */
    const antDesignMenuData = convertToAntDesignMenu(routerData);

    /**
     * 当前选中的菜单项 key 数组
     */
    const selectedKeys = setSelectKeys(routerData);

    // 初始展开的 SubMenu 菜单项 key 数组
    const defaultOpenKeys = selectedKeys.map((item) => {
        const arr = item.split('/');
        arr.pop();
        return arr.join('/');
    });

    return (
        <Layout style={{ height: '100%' }}>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 24px'
                }}
            >
                <div style={{ fontSize: '27px', color: '#ffffff' }}> react-pc-tmp </div>
            </Header>
            <Layout className='overflow-hidden'>
                <Sider breakpoint='lg' collapsedWidth='0' className='overflow-auto'>
                    <Menu
                        theme='dark'
                        mode='inline'
                        selectedKeys={selectedKeys}
                        items={antDesignMenuData}
                        defaultOpenKeys={defaultOpenKeys}
                        onClick={(e) => {
                            e.key && navigate(e.key);
                        }}
                    />
                </Sider>

                <Content
                    className='site-layout overflow-auto'
                    style={{
                        padding: '20px'
                    }}
                >
                    <Suspense fallback={<BasePageLoadingIndicator />}>
                        <Outlet></Outlet>
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
