$(function(){window.onload=function(){var a=new Swiper("#tabs-container",{initialSlide:0,speed:500,on:{slideChangeTransitionStart:function(){$(".tab-panel .active").removeClass("active"),$(".tab-panel a").eq(this.activeIndex).addClass("active")}}});$(".tab-panel a").on("click",function(e){e.preventDefault(),$(".tab-panel .active").removeClass("active"),$(this).addClass("active"),a.slideTo($(this).index())})},$("img.lazy").lazyload({placeholder:"../static/web/images_new/load.gif",effect:"fadeIn",threshold:200,event:"scroll",failurelimit:10})});