/**
 * Created by Administrator on 2018/6/9.
 */
//导入model01.js
var {add} = require("./model01")
var Vue = require("./vue.min")
var VM = new Vue({
    el:'#app',//vm接管了app区域的管理
    //model数据
    data:{
        num1:0,
        num2:0
    }
});