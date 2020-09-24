var menu = new Vue({
    el:"#menu",
    data:{
        isShow:true
    },
    methods:{
        changeIsShow:function(){
            const that = this
            that.isShow = !that.isShow
        }
    }
})

var resume = new Vue({
    el:"#resume",
    data:{
        show:0,
        key_value:['姓名：','贺昆','年龄：','22','城市：','广东','电话：','15625719510','博客：','https://hekvn.top','邮箱：','377014982@qq.com'],
        post_award:['数据库系统工程师','14届学生网管负责人','16届网络协会技术部部长','17级信资12班班长','华南医院信息网络大会参会代表','第五届软件设计大赛第二名','第九届网站设计大赛三等奖','学术科研奖学金'],
        imgShow:0,
        project_item:0
    },
    methods:{
        changeShow:function(e){
            const that = this
            if(e === -1 && that.show === 0){
                console.log('已是起始页')
            }else if(e === 1 && that.show === 4){
                console.log('已是最后一页')
            }else{
                that.show += e
                that.imgShow = 0
                that.project_item = 0
            }
        },
        showImage:function(e){
            const that = this
            that.imgShow = e
        },
        itemChange:function(e){
            const that = this
            if(e === -1 && that.project_item === 0){
                console.log('没有上一项')
            }else if(e === 1 && that.project_item === 6){
                console.log('没有下一张图')
            }else{
                that.project_item += e
            }
        }
    }
})