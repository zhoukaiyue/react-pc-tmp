import React from 'react';
/**
 * 此函数将路由数据转换为 Ant Design 的菜单数据格式
 * @param {object} routerData - 路由数据
 * @returns {Array} 返回一个数组，数组中的每一项都是一个对象，对象的格式为{label: '', key: '', icon: null}
 */
export const convertToAntDesignMenu = (routerData) => {
    // 内部递归函数，用于将单个路由项转换为 Ant Design 菜单项格式
    function convertRoute(route) {
        // 如果路由项被标记为隐藏，返回 null，表示不在菜单中显示
        if (route.isHidden) {
            return null;
        }

        // 构建 Ant Design 菜单项对象
        const antMenuItem = {
            label: route.meta ? route.meta.title : '', // 菜单项的文本标签，使用路由的标题（如果存在）
            key: route.path, // 菜单项的唯一标识，使用路由的路径
            order: route.order ?? null, // 菜单项的唯一标识，使用路由的路径
            icon: route.meta && route.meta.icon ? React.createElement(route.meta.icon) : null // 菜单项的图标，使用路由的图标（如果存在），可根据需要进行修改
        };

        // 如果路由有子项且子项数量大于 0
        if (route.children && route.children.length > 0) {
            // 转换并过滤有效的子项
            const validChildren = route.children
                .map((childRoute) => convertRoute(childRoute)) // 递归调用 convertRoute 处理每个子项
                .filter((child) => child !== null); // 过滤掉为 null 的子项

            // 如果存在有效子项，则将其添加到当前菜单项的 children 属性中
            if (validChildren.length > 0) {
                antMenuItem.children = validChildren;
            }
        }

        // 返回构建的 Ant Design 菜单项对象
        return antMenuItem;
    }

    // 使用 reduce 将路由数据转换为 Ant Design 菜单数据格式，并根据 order 排序
    const sortedMenu = routerData
        .map((route) => convertRoute(route))
        .filter((route) => route !== null)
        .sort((a, b) => (a.order || 0) - (b.order || 0));

    return sortedMenu;
};
