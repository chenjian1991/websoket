$("input[data-attr='tradePwd1']").bind("input propertychange",function(t){var a=$(".fakebox input");if(/^[0-9]*$/g.test($(this).val())){for(var e=$(this).val().trim(),i=e.length,l=0;l<i;l++)a.eq(l).val(e[l]),console.log(a.eq(l).next()),a.eq(l).next().length&&$(".active").css("left",a.eq(l+1).offset().left-parseInt($(".fake").parent().css("padding-left"))+"px");a.each(function(){var t=$(this).index();i<=t&&$(this).val("")})}else if(/^[0-9]*$/g.test($("input[data-attr='tradePwd1']").val().slice(0,1))){var n=$(this).val().match(/\d/g);$(this).val($(this).val().slice(0,$(this).val().lastIndexOf(n[n.length-1])+1))}else $("input[data-attr='tradePwd1']").val("")});