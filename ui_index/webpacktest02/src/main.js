/**
 * Created by Administrator on 2018/6/9.
 */
//导入model01.js
var {add} = require("./model01")
var Vue = require("./vue.min")
var VM = new Vue({
    el:'#app',//vm接管了app区域的管理
    data:{//model数据
        num1:0,
        num2:0,
        result:0
    },
    methods:{
        change:function () {
            //必须要有this（会修改data中的result数据）
            this.result = add(Number.parseInt(this.num1),Number.parseInt(this.num2))
        }
    }
});