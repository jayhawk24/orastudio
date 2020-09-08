$(window).on('scroll',function() {
		if($(window).scrollTop()){
		   $('nav').addClass('black');
			$('nav ul li').addClass('black');
		}
		else{
			$('nav').removeClass('black');
		}
	});

/* Menu Login/ Signup */

$(document).ready(function(){
   $("nav ul li").click(function showmenu(){  
        $("#MainMenu").css("right","0px");
        function showMenu(){
            $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
            $("#LoginIcon").animate({right:'-100'},300);
        }
        setTimeout(showMenu,100);
   });
    
    $("#close").click(function(){
            $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0%,0% 100%,100% 100%)");
            function hideMenu(){
                    $("#MainMenu").css("right","-300px");
                $("#LoginIcon").animate({right:'50'},300);
            }
        setTimeout(hideMenu,300);
        
        function originalLayout(){
            $("#MainMenu").css("-webkit-clip-path:polygon(0 0,0% 100%,0% 100%,100% 100%)");
        }
        setTimeout(originalLayout,600);
    });
});
$(function(){
	$(".signup").hide();
	$("#flipToSignUp").on("click", function(evt){
		$(".login").slideUp(600);
		$(".signup").slideDown(600);
	});
	$("#flipToSignIn").on("click", function(evt){
		$(".signup").slideUp(600);
		$(".login").slideDown(600);
	});	
});
$(function(){
	$("#passtry2").on("keyup keydown focusout", function(){
		var pass1 = frmsignout.newpass.value;
		var pass2 = frmsignout.confirmpass.value;
		if(pass1 == pass2 && pass1!='')
			$(this).css('border','2px solid lime');
		else{
				$(this).css('border','2px solid red');
				$("#signUpBtn").attr('disabled','disabled');
			}
	});
});

/* Carousel */
$('.carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
	
});

/* rotaing images */
$(function(){
	$('.1').on("mouseover mouseleave", function(){
		$('.1 img').toggleClass("rotateimg");
	});
	$('.2').on("mouseover mouseleave", function(){
		$('.2 img').toggleClass("rotateimg");
	});
	$('.3').on("mouseover mouseleave", function(){
		$('.3 img').toggleClass("rotateimg");
	});
	
});
var typestyle1 = new Typed('.typestyle1',{
	strings:['Place','Spot','Destination','Site','Location'],
	typeSpeed: 40,
	loop: true,
	backDelay:1000
});