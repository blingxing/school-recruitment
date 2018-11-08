
// 微信小程序页面10层限制的一种解决方案
// 当页面路径大于10层时，使用wx.navigateTo跳转到下一页不会有任何效果



//  1、小程序页面导航API一般用到3个：wx.navigateTo、wx.redirectTo、wx.navigateBack
//    区别在于：
//    wx.navigateTo     不会将旧页面出栈
//    wx.redirectTo     将旧页面出栈，要跳转的页面入栈
//    wx.navigateBack   将页面栈最后一个页面出栈，倒数第二个页面是当前页面
// 2、解决方案
//  （1）页面栈中可能有相同的页面，但没必要保留
//  （2）wx.navigateBack参数可以返回栈里的指定页面，页面栈信息可以从getCurrentPages()接口得到
// 那么
//  （1）封装一个页面跳转方法
//  （2）判断页面栈中是否有要跳转页面A，若有，wx.navigateBack（delta：xx）返回到此页面，xx=getCurrentPages().length-A在页面栈中index-1
//  （3）若页面栈中没有目标页面
//     a.若页面层级>=10，wx.redirectTo跳转
//     b.否则，wx.navigateTo跳转


goPage:function(target){
    var pages=getCurrentPages(), //页面栈
        len=pages.length,
        dlt='';
    for(var i=0;i<len;i++){
        if(pages[i].route==target){
            dlt=i+1;//目标页在栈中的位置
            break;
        }
    }
    if(!dlt){
        if(len<10){
            wx.navigateTo({
                url:target
            })
        }
        else{
            wx.redirectTo({
                url:target
            })
        }
    }else{
        wx.navigateBack({
            delta:len-dlt
        })
    }
}

