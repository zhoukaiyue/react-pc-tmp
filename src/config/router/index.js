import { lazy } from 'react';
import { BankOutlined } from '@ant-design/icons';
import Layout from '@/layout'; // 布局组件
import { Navigate } from 'react-router-dom';
import BasePageTitle from '@/resources/components/base-page-title'; // 页面标题组件
// 懒加载路由组件
const Index = lazy(() => import('@/views/index'));

const routes = [
    {
        path: '/',
        isHidden: true, // 不在侧边栏展示
        element: <Navigate to='/index' replace />
    },
    {
        path: '/index',
        element: <Layout />,
        order: 1, // 菜单项的排序，数字越小越靠前
        meta: {
            title: '首页',
            icon: BankOutlined
        },
        children: [
            {
                path: '',
                isHidden: true, // 不在侧边栏展示
                element: <BasePageTitle element={Index} meta={{ title: '首页' }} />
            }
        ]
    }
];
export default routes;
