import { Tag } from 'antd';
function DevInfo() {
    return (
        <div className='w-[80%] text-[18px]'>
            <Tag color='#0000000a'>
                <span className='text-black'>react-PC-TMP</span>
            </Tag>
            是基于 Create React App（v5）的模板脚手架，集成了 Ant Design 5、JavaScript、carco、Redux、Sass、Tailwind
            CSS、Axios（封装）、ESLint、Prettier、lodashjs 等流行技术栈构建 PC 端模板脚手架，开箱即用。
        </div>
    );
}

export default DevInfo;
