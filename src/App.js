import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BasePageLoadingIndicator from '@/resources/components/base-page-loading-indicator';
import routes from '@/packages/router';

const App = () => {
    // 从环境变量中获取路由前缀
    const ROUTER_BASE = process.env.REACT_APP_ROUTER_BASE;

    // 创建路由
    const router = createBrowserRouter(routes, { basename: ROUTER_BASE });

    return (
        <Suspense fallback={<BasePageLoadingIndicator />}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default App;
