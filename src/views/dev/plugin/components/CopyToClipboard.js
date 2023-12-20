import { message, Button } from 'antd';
import clipboardCopy from 'clipboard-copy';
const CopyToClipboard = () => {
    const handleCopyClick = async () => {
        try {
            await clipboardCopy('This is some cool text');
            message.success({
                type: 'success',
                content: 'Text copied to clipboard!'
            });
        } catch (err) {
            message.success({
                type: 'success',
                content: `Unable to copy text to clipboard，${err}`
            });
        }
    };

    return (
        <Button className='text-white' style={{ backgroundColor: '#1677ff' }} onClick={handleCopyClick}>
            Copy to Clipboard
        </Button>
    );
};

export default CopyToClipboard;
