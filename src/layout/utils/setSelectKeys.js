const basePath = process.env.REACT_APP_ROUTER_BASE;

/**
 * 根据路径查找匹配的项
 * @param {object} routerData - 路由数据
 * @param {string} targetPath - 目标路径
 * @returns {object} 返回找到的项或空对象（如果未找到）
 */
function findVisibleItemByPath(routerData, targetPath) {
    // 递归查找函数
    function findRecursive(currentItems, currentPath) {
        for (const item of currentItems) {
            // 如果找到匹配路径的项，直接返回
            if (item.path === currentPath) {
                return item;
            } else if (item.children && item.children.length > 0) {
                // 递归查找子项
                const childResult = findRecursive(item.children, currentPath);
                if (childResult) {
                    return childResult;
                }
            }
        }
        return null; // 如果路径未找到，返回 null
    }

    // 使用递归查找匹配路径的项
    let resultItem = findRecursive(routerData, targetPath);

    // 当匹配到的项的 isHidden 为 true 时，向上查找第一个非隐藏的父级
    while (resultItem && resultItem.isHidden) {
        // 获取当前项的父级路径
        const parentPath = resultItem.path.split('/').slice(0, -1).join('/');
        // 继续递归查找父级项
        resultItem = findRecursive(routerData, parentPath);
    }

    // 返回找到的项或空对象（如果未找到）
    return resultItem || {};
}

/**
 * 设置选中的菜单项
 * @param {object} routerData - 路由数据
 * @returns {Array} 返回一个数组
 */
const setSelectKeys = (routerData) => {
    // 获取当前路径
    const pathname = window.location.pathname;
    // 获取路由前缀
    const routerPath = pathname ? (basePath ? pathname.replace(basePath, '/') : pathname) : '';
    // 根据路径查找匹配的项
    const o = findVisibleItemByPath(routerData, routerPath);

    return [o.path ?? ''];
};

export { setSelectKeys };
