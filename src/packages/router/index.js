import { Navigate } from 'react-router-dom';
const modulesFiles = require.context('@/config/router', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});

const routers = [];

for (const key in modules) {
    // if (key === 'dev' && ['development'].includes(process.env.NODE_ENV)) {
    //     routers.push(...modules[key]);
    // }
    // if (key !== 'dev') {
    //     routers.push(...modules[key]);
    // }

    routers.push(...modules[key]);
}

routers.push({
    path: '*',
    isHidden: true, // 不在侧边栏展示
    element: <Navigate to='/err404' replace />
});

export default routers;
