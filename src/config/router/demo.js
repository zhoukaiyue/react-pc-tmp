/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2023-12-19 14:12:04
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-12-20 14:16:53
 */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { HighlightOutlined } from '@ant-design/icons';
import Layout from '@/layout'; // 布局组件
import BasePageTitle from '@/resources/components/base-page-title'; // 页面标题组件
// 懒加载路由组件
const Error404 = lazy(() => import('@/views/err404'));
const routes = [
    {
        path: '/demo',
        meta: {
            title: '示例页面',
            icon: HighlightOutlined
        },
        element: <Layout />,
        order: 3, // 菜单项的排序，数字越小越靠前
        children: [
            {
                path: '/demo/404',
                meta: {
                    title: '404 Page'
                },
                element: <BasePageTitle element={Error404} meta={{ title: '404 Page' }} />
            },
            {
                path: '/demo',
                isHidden: true,
                element: <Navigate to='/demo/404' replace />
            }
        ]
    }
];
export default routes;
