<template>
  <div>
    修改用户信息{{id}}
  </div>
</template>
<script>
  export default {
    layout: 'test',
    async asyncData() {
      console.log("服务器打印数据")
      //定义a方法,直接会调用
      var a = await new Promise(function (resolve, reject) {
        setTimeout(function () {
          //返回a
          console.log("a")
          //必须有返回值,否在会堵塞在这
          resolve("a")
        },2000)
      });
      //定义b方法
      var b = await new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log("b")
          resolve("b")
        }, 1000)
      });
      return {
        name: '小明同学'
      }
    },
    data() {
      return {
        id: ''
      }
    },
    mounted() {
      this.id = this.$route.params.id;
    }
  }

  // export default{
  //   layout:'test',
  //   async asyncData(){
  //     console.log("请求服务端接口...")
  //     //alert(0)无法在服务端运行的
  //     //请求服务端接口..
  //
  //     //先调用a方法
  //     var a= await new Promise(function (resolve, reject) {
  //       setTimeout(function () {
  //         //alert(1)
  //         console.log(1)
  //         resolve(1)
  //       },2000)
  //     })
  //     //再调用b方法
  //     var b = await new Promise(function (resolve, reject) {
  //       setTimeout(function () {
  //         //alert(2)
  //         console.log(2)
  //         resolve(2)
  //       },1000)
  //     })
  //     return {
  //       name:'黑马程序员'
  //     }
  //   },
  //     data(){
  //     return {
  //       id:'',
  //       name:''
  //     }
  //   },
  //   methods:{
  //     getUser:function () {
  //       alert(0)
  //       //ajax请求服务的接口
  //       this.name = "传智播客"
  //     },
  //     // a(){
  //     //   return new Promise(function (resolve, reject) {
  //     //     setTimeout(function () {
  //     //         //alert(1)
  //     //       resolve(1)
  //     //     },2000)
  //     //   })
  //     // },
  //     // b(){
  //     //   return new Promise(function (resolve, reject) {
  //     //     setTimeout(function () {
  //     //       //alert(2)
  //     //       resolve(2)
  //     //     },1000)
  //     //   })
  //     // }
  //
  //   },
  //   mounted(){
  //     this.id = this.$route.params.id;
  //     this.getUser()
  //     // this.a().then(res=>{
  //     //     alert(res)
  //     // })
  //     // this.b().then(res=>{
  //     //   alert(res)
  //     // })
  //   }
  //
  // }
</script>
<style>

</style>
