// 计数
let COUNT = 0;

const loading = {
    show() {
        if (COUNT === 0) {
            // 开启loading
        }
        COUNT++;
    },
    hide() {
        if (COUNT <= 0) return;
        COUNT--;
        if (COUNT === 0) {
            // 关闭loading
        }
    }
};

export default loading;
