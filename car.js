$(function(){
	jQuery.easing['easeOutCubic'] = function (x, t, b, c, d) {
 return c*((t=t/d-1)*t*t + 1) + b;
};
function Tabs(tabs,list,block,item,$){
 var tabs  = $(tabs);
 var width = tabs.width();
 tabs.find(list+':first').addClass('active');
 tabs.find(item+':first').addClass('show');
 tabs.find(list).mouseenter(function(){
  var $this = $(this);
  var i = tabs.find(block).find('.show').index();
  var n = $this.index();
  $this.addClass('active').siblings('.active').removeClass('active');
  tabs.find(item).eq(n).addClass('show');
  if(n > i){
   tabs.find(block).stop().animate({'left':'-'+width+'px'},600,'easeOutCubic',function(){
    tabs.find(block).css('left','0px');
    tabs.find(item).eq(n).siblings('.show').removeClass('show');
   });
  }else{
   tabs.find(block).css('left','-'+width+'px').stop().animate({'left':0},600,'easeOutCubic',function(){
    tabs.find(item).eq(n).siblings('.show').removeClass('show');
   });
  }
 });
};



jQuery(document).ready(function(){
    var myTabs = new Tabs('.tabs','.list_item','.tabs_block','.list_block',jQuery);
 });
})
$(function () {
    $('#p_box .p_b button').mouseenter(function () {
      //清空
      $('#p_box .p_b button').removeClass('p_active');
      $('#p_box .p_c div').hide()
      $(this).addClass('p_active');
      $('#p_box .p_c div').eq($(this).index()).show();
    })
  })
window.onload=function(){
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
     var speed=50 
marquePic2.innerHTML=marquePic1.innerHTML 
function Marquee(){ 
if(demo.scrollLeft>=marquePic1.scrollWidth){ 
demo.scrollLeft=0 
}else{ 
demo.scrollLeft++ 
} 
} 
var MyMar=setInterval(Marquee,speed) 
demo.onmouseover=function() {clearInterval(MyMar)} 
demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)} 
}
$(function(){
    var oPPone=$('#p_one');
    var oPone=$('#p_one .p_four_one');
    var oPoneOne=$('#p_one .p_content_one');
    var oPPtwo=$('#p_two');
    var oPtwo=$('#p_two .p_four_two');
    var oPoneTwo=$('#p_two .p_content_two');
    var oPPthree=$('#p_three');
    var oPthree=$('#p_three .p_four_three');
    var oPonethree=$('#p_three .p_content_three');
    var oPPfour=$('#p_four');
    var oPfour=$('#p_four .p_four_four');
    var oPonefour=$('#p_four .p_content_four');
    oPone.mouseenter(function(){
      oPoneOne.show();  
    })
    oPoneOne.mouseenter(function(){
        oPoneOne.show();
    });
    oPPone.mouseout(function(){
      oPoneOne.hide();
    })
    oPtwo.mouseenter(function(){
      oPoneTwo.show();  
    })
    oPoneTwo.mouseenter(function(){
        oPoneTwo.show();
    });
    oPPtwo.mouseout(function(){
      oPoneTwo.hide();
    })
    oPthree.mouseenter(function(){
      oPonethree.show();  
    })
    oPonethree.mouseenter(function(){
        oPonethree.show();
    });
    oPPthree.mouseout(function(){
       oPonethree.hide();
     })
    oPfour.mouseenter(function(){
      oPonefour.show();  
    })
    oPonefour.mouseenter(function(){
        oPonefour.show();
    });
    oPPfour.mouseout(function(){
       oPonefour.hide();
     })

})
