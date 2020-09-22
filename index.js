var menu = new Vue({
    el:"#menu",
    data:{
        isShow:true
    },
    methods:{
        changeIsShow:function(){
            this.isShow = !this.isShow
        }
    }
})

var resume = new Vue({
    el:"#resume",
    data:{
        show:0,
        key_value:['姓名：','贺昆','年龄：','22','城市：','广东','电话：','15625719510','博客：','https://hekvn.top','邮箱：','377014982@qq.com'],
        post_award:['数据库系统工程师','14届学生网管负责人','16届网络协会技术部部长','17级信资12班班长','华南医院信息网络大会参会代表','第五届软件设计大赛第二名','第九届网站设计大赛三等奖'],
        imgShow:0
    },
    methods:{
        changeSub:function(){
            const that = this
            if(that.show != 0){
                that.show -= 1
                that.imgShow = 0
            }
        },
        changeAdd:function(){
            const that = this
            if(that.show != 3){
                that.show += 1
                that.imgShow = 0
            }
        },
        showImage:function(e){
            const that = this
            that.imgShow = e
        }
    }
})