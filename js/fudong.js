// JavaScript Document
$(function(){	
	 
	//判断滚动条是否置顶
	$(window).scroll(function(){
		if($(document).scrollTop() <= 100){
			$('.fanhui').hide();
		}else{
			$('.fanhui').show();
		};
	}); 
	//电话
	var tel="4008-123-510";
	//通用
	var yjfk="意见反馈";
	var lxfs="联系方式";
	var tjfk="提交反馈";
	//提示文本
	var tishi_txt="您对我们的网站有任何意见和建议，或使用中遇到的问题，请在本页面反馈。我们会每天关注并不断优化产品，为您提供更好的服务！";
	//input提示文本1
	var input_txt1="我们非常乐意收到您使用网站过程中的感受和意见";
	//input提示文本2
	var input_txt2="请输入您的手机号";
	//提示文本
	var tishi="请输入有效的联系方式";

	var fudong_html='<div class="topcontrol"><div class="phone"><div class="phone_txt"><span>'+tel+'</span><div class="sanjiao"></div></div></div><div class="fankui"><div class="fankui_txt"><span>'+yjfk+'</span><div class="sanjiao"></div></div></div><div class="fanhui"></div></div>';
	
	var yijianfankui_html='<div class="black"></div><div class="feedback"><div class="guanbi"></div><div class="feed_con"><p>'+tishi_txt+'</p><h3>'+yjfk+'</h3><textarea id="bk_content" placeholder="'+input_txt1+'" value="" type="text"></textarea><h3>'+lxfs+'</h3><input type="text" id="shouji"  placeholder="'+input_txt2+'" /><div class="feedback_tishi">'+tishi+'</div><div class="but"><button>'+tjfk+'</button></div></div></div>';
	
	
	//添加元素
	$('body').append(fudong_html);
	
	//右下角
	$('.phone').hover(function(){//电话
		if($('.phone_txt').is(":hidden")){
			$('.phone_txt').show();
		}else{
			$('.phone_txt').hide();
		};
	});
	$('.fankui').hover(function(){//意见反馈
		if($('.fankui_txt').is(":hidden")){
			$('.fankui_txt').show();
		}else{
			$('.fankui_txt').hide();
		};
	});
	//回到顶部
	$('body').on("click",".fanhui",function(){
		$("body,html").animate({scrollTop:0},300);		
	});
	//意见反馈
	$('body').on("click",".fankui",function(){
		$('body').append(yijianfankui_html);
		
		
		$('.but').on('click',function(){ //提交反馈
			   
			   var tel,content,fy_id ;
			   fy_id=0;
			   tel= $('#shouji').val();
			   xmmc= '侨福芳草地' ;
			   content = "意见反馈:"+"|"+xmmc+"|"+$('#bk_content').val();
			
			if(v_content($('#bk_content').val())){ 
			 
			 if(v_tel(tel)){
			         $(this).attr("disabled", "true");
					 $.getJSON("http://www.guangxinhongye.com/save_xx.asp?jsoncallback=?"
				　　　　,{
				　　　　　　"fy_id":fy_id,"tel":tel,"content":content
				　　　　},function(Back){
						  if (Back.jieguo =="yes"){
							$('#shouji').val("");
							$('#content').val("");
							alert("信息提交成功，我们会尽快和您联系，谢谢！");
							$('.guanbi').click();
						  }
				　　});
			     
			   }
			 }
		  });
		
		
		
	});
	//关闭反馈页
	$('body').on("click",".guanbi",function(){
		$('.black').remove();
		$('.feedback').remove();
	});
    
	
	function v_tel(mobile) //验证手机号
    {
        
		if(mobile.length==0)
        {
           $('.feedback_tishi').html("请输入手机号");
		   $('.feedback_tishi').show();   
	          return false;
        }    
        if(mobile.length!=11)
        {
            $('.feedback_tishi').html("请输入有效的手机号");
			$('.feedback_tishi').show();   
            return false;
        }
        
        var myreg = /^(((1[0-9][0-9]{1})|159|153)+\d{8})$/;
        if(!myreg.test(mobile))
        {
            $('.feedback_tishi').html("请输入有效的手机号");
			$('.feedback_tishi').show();   
			return false;
        }
		$('.feedback_tishi').hide();
		return true; 
    }
	
	function v_content(content){
	
	   if(content.length==0){
		   $('.feedback_tishi').html("反馈信息不能为空！");
		   $('.feedback_tishi').show();   
			return false;
		 }
		 else{
			  $('.feedback_tishi').hide();   
			   return true;  
			 }
	
	}
})