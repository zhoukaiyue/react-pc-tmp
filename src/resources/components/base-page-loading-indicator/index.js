/**
 * 页面加载指示器
 */
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles

const BasePageLoadingIndicator = () => {
    useEffect(() => {
        NProgress.start();

        return () => {
            NProgress.done();
        };
    }, []);

    return null;
};

export default BasePageLoadingIndicator;
