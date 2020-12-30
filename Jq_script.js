

var $picLi = $("#box .pic li");
var $tabLi = $("#box .tab li");
var $btnLi = $("#box .btn li");
var len = $picLi.length;
var first = 0;
var timer;

//初始化
$tabLi.eq(0).addClass("on");
$picLi.eq(0).show();

//tab区域
$tabLi.click(function () {
  var x = $(this).index();
  if(x != first){
    change(x);
  }
});


//btn区域  0  1
$btnLi.click(function () {
  var x = first;
  if($(this).index()){
    x ++;
    if(x>=4)x = 0;
  }else{
    x --;
    if(x < 0)x = len-1;
  }
  change(x);
});


//自动轮播
auto();
$("#box").hover(function () {
  clearInterval(timer);
},auto);
function auto() {
  timer = setInterval(function () {
    var x = first;
    x ++;
    x %= len;
    change(x);
  },3000)
}

//变化函数
function change(i) {
  $tabLi.eq(first).removeClass("on");
  $picLi.eq(first).fadeOut(2000);
  first = i;
  $tabLi.eq(first).addClass("on");
  $picLi.eq(first).fadeIn(2000);
}