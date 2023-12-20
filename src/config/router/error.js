import { lazy } from 'react';
import BasePageTitle from '@/resources/components/base-page-title'; // 页面标题组件
// 懒加载路由组件
const Error404 = lazy(() => import('@/views/err404'));
const routes = [
    {
        path: '/err404',
        meta: {
            title: 'Error404'
        },
        exact: true,
        isHidden: true, // 不在侧边栏展示
        element: <BasePageTitle element={Error404} meta={{ title: '抱歉，您访问的页面不存在。' }} />
    }
];
export default routes;
