const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭语法检查

  //开启代理服务器
  devServer:{
    proxy:{
      '/api':{  //api请求前缀。请求地址前缀为api的走代理，将数据转发给端口5000的服务器
        target:'http://localhost:5000',
        pathRewrite:{'^/api': ''},  //重写地址，将api前缀替换为''
        ws:true,  //用于支持websocket
        changeOrigin:true  //为true时，不会如实告诉请求地址（请求来自于5000，实际来自于8080）一般设置true
      },
    }
  }
})
