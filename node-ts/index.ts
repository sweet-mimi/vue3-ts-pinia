/*
    使用ts写 node后台
    npm i ts-node -g
    npm i @types/node -D      ts声明文件
    npm install express -S
    npm i @types/express -D   express的声明文件
    npm i axios -S            axios包里已经有ts声明文件了
*/
// const express = require('express')       // 以前
import express, {Express, Router, Request, Response } from 'express'

import axios from 'axios'
// axios在node端封装了 http 网络模块

const app:Express = express()

const router:Router = express.Router()     // 路由区分模块的 /api 、   /base   ...

app.use('*', (req, res, next) => {                 // 后台开启允许跨域
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.use('/api', router)             //这是添加统一的路径模块

/*
// 可以这样
app.get('/list', (req, res) => {
    res.send()
})
*/

router.get('/list', async (req: Request,res: Response) => {
    const result = await axios.get('http://rap2api.taobao.org/app/mock/304897/api/v1/full')
    
    res.json({                // 发送给前端
        data: result.data
    })
})

app.listen(3333, () => {
    console.log('success server --- http://localhost:3333');
})

// 执行ts-node index.ts 来启动这个后台 
// 访问是 http://localhost:3333/api/list