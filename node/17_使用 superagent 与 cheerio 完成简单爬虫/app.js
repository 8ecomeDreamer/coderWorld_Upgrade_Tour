// superagent(http://visionmedia.github.io/superagent/ )是个 http 方面的库，可以发起 get 或 post 请求。
// cheerio(https://github.com/cheeriojs/cheerio )可以理解成一个 Node.js版的jquery,用来从网页中以 css selector取数据

// 引入爬虫需要的模块
const express = require('express')
const cheerio = require('cheerio')
const superagent = require('superagent')

const app = new express()

// 页面显示内容
app.get('/', (req, res, next) => {
    // res.send('欢迎访问coderWorld的简易express服务器')
    // 指定爬虫网站
    superagent.get('https://cnodejs.org/').end((err, sres) => {
        if (err) {
            return next(err);
        }
        const $ = cheerio.load(sres.text);
        const items = [];

        // 遍历页面对象并存储到数组中
        $('#topic_list .topic_title').each(function (idx, element) {
            var $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: `https://cnodejs.org${$element.attr('href')}`
            });
        });

        // 以对象的方式显示
        res.send(items);
    })
})

// 监听端口
app.listen(3000, () => {
    console.log('欢迎访问简易爬虫系统~')
})