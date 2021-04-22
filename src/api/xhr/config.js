let rootPath = '';
if (process.env.NODE_ENV.trim() === 'development') {
    rootPath = 'http://lk431.cn.utools.club/pointconsume'
} else if(process.env.NODE_ENV.trim() ==='testing'){
    rootPath = 'https://test-api.haobingge.cn/pointpayment'
} else {
    rootPath = 'https://api.haobingge.cn/pointpayment'
}
export { rootPath };