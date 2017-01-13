/**
 * Created by Administrator on 2016/8/22.
 */
window.onload = function () {
    //鼠标划入更多产品出现
    var more = document.getElementsByClassName("more")[0];
    more.onmouseover = showMore;
    more.onmouseout = downMore;

    playImg();
}
//奥运里面的轮播
var timer;
var play = document.getElementsByClassName("content-inner-2")[0];
var play_img = play.getElementsByTagName("img");
var play_cricle = document.getElementsByClassName("olympic_cricle")[0];
var cricle = play_cricle.getElementsByTagName("li");
function playImg() {
    clearInterval(timer);
    var j = 0;
    timer = setInterval(function () {
        for (var i = 0; i < play_img.length; i++) {
            play_img[i].style.opacity = 0;
            //play_img[i].style.zIndex = -1;
            cricle[i].style.backgroundColor = "#CCC";
        }
        play_img[j].style.opacity = 1;
        //play_img[j].style.zIndex = 0;
        cricle[j].style.backgroundColor = "#FFF";
        j++;
        if (j == 4) {
            j = 0;
        }
    }, 2000)
}
var more_prudct = document.getElementsByClassName("more_prudct")[0];
function showMore() {
    more_prudct.style.display = "block";
}
function downMore() {
    more_prudct.style.display = "";
}
//导航点击样式切换
var oNav = document.getElementById("nav");
var oNavLi = oNav.getElementsByTagName("li");
var oContent = document.getElementsByClassName("inner");
for (var k = 0; k < oNavLi.length; k++) {
    oNavLi[k].index = k;
    oNavLi[k].onclick = function () {
        //tab切换
        for (var h = 0; h < oNavLi.length; h++) {
            if (h == this.index) {
                if (this.index == 0) {
                    oNavLi[h].className = "nav-change li-frist";
                } else {
                    oNavLi[h].className = "nav-change";
                }
            }
            else {
                if (h == 0) {
                    oNavLi[h].className = "li-frist";
                } else {
                    oNavLi[h].className = "";
                }
            }
        }
        //内容切换
        for (var g = 0; g < oContent.length; g++) {
            oContent[g].style.display = "none";
        }
        oContent[this.index].style.display = "block";
    }
}
//设置的icon切换
var takeFa = document.getElementById("take-icon");
var takeIcon = takeFa.getElementsByTagName("dd");
var nottakeFa = document.getElementById("nottake-icon");

function move(){
    for (var t = 0; t < takeIcon.length; t++) {
        takeIcon[t].onclick = function () {
            nottakeFa.appendChild(this);
        }
    }
}
move();
//事件委托；
//function move(){
//    for (var n = 0; n < takeIcon.length; n++) {
//        notTakeIcon[n].onclick = function () {
//            nottakeFa.appendChild(this);
//        }
//    }
//}

//点击set出现，再次点击消失
var oSet = document.getElementsByClassName("nav-set")[0];
var oSetContent = document.getElementsByClassName("set-content")[0];
oSet.onclick = function (e){
    oSetContent.style.display = "block";
    //阻止向上冒泡
    e=e||window.e;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble=true;
    }
}
document.onclick=function(){
    oSetContent.style.display="none";
}
//换肤；
var flag = 0;
function changeColor(){
    var btn = document.getElementsByClassName("baidu-button")[0];
    var more = document.getElementsByClassName("puduct")[0];
    if(flag == 0){
        btn.style.backgroundColor = "#4caf50";
        more.style.backgroundColor = "#4caf50";
        flag = 1;
    }
    else{
        btn.style.backgroundColor = "#38f";
        more.style.backgroundColor = "#38f";
        flag = 0;
    }
}
//设置下拉出现
var  oSet = document.getElementById("set");
var  oSetWindow = document.getElementsByClassName("set-window")[0];
var delay_timer;
oSet.onmouseover = function(){
    clearTimeout(delay_timer);
    oSetWindow.style.display = "block";
}
oSet.onmouseout = function (){
    delay_timer = setTimeout(function(){
        oSetWindow.style.display = "none";
    },500)
}