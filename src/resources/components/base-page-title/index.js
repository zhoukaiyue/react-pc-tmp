/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2023-12-20 14:15:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-12-20 14:15:32
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// 默认元素组件，用于设置页面标题
const BasePageTitle = ({ element: Component, meta }) => {
    // 使用 useEffect 处理副作用，监听 meta 对象的变化
    useEffect(() => {
        // 如果存在自定义标题，则设置页面标题为自定义标题，否则显示 'react-pc-tmp'
        if (meta.title) {
            document.title = `${meta.title}`;
        } else {
            document.title = 'react-pc-tmp';
        }
    }, [meta]); // 仅在 meta 对象发生变化时执行 useEffect

    // 渲染传入的组件
    return <Component />;
};

// 定义 BasePageTitle 的 PropTypes
BasePageTitle.propTypes = {
    // element 属性为必须的 React 元素
    element: PropTypes.element.isRequired,
    // meta 属性为包含 title 字符串的对象
    meta: PropTypes.shape({
        title: PropTypes.string
    }).isRequired
};

// 导出 BasePageTitle 组件
export default BasePageTitle;
