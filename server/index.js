//引入express 
let express = require('express');
//引入服务器模块
let server = require('./server');
//引入中间件模块
let middleware = require('./middleware');
//引入路由配置
let router = require('./router');

//创建应用程序
let app = express();

//启动服务
server(app);
//配置中间件
middleware(app);
//启动路由
router(app);
