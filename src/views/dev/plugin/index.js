// 复制到剪切板的插件
import CopyToClipboard from './components/CopyToClipboard';
import { Divider } from 'antd';
const DevPlugin = () => {
    return (
        <div className='w-full h-full'>
            <p className='text-[30px]'>全局插件总览</p>
            <Divider plain></Divider>
            <div>
                <div className='text-[24px]'>复制到剪切板</div>
                <div className='mt-[24px]'>
                    <CopyToClipboard />
                </div>
            </div>
        </div>
    );
};

export default DevPlugin;
