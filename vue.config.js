// 配置less
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 配置别名
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    },
    //解决跨域
    devServer: {
        // 设置代理
        proxy: {
            '/api': {
                target: 'http://localhost:3000', //要跨域的url
                ws: true,
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }

    },
    // 配置rem
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 50
            })
    },
    // 配置less
    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/css/base.less')] // less所在文件路径
        }
    }
}