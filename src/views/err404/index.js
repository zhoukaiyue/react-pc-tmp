import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Err404 = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Result
                status='404'
                title='404'
                subTitle='抱歉，您访问的页面不存在。'
                extra={<Button onClick={() => navigate('/')}>返回首页</Button>}
            />
        </div>
    );
};

export default Err404;
