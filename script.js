

//  LOADER


function onReady(callback){
    var intervalId=window.setInterval(function(){
        if(document.getElementsByTagName('body')[0]!==undefined){
            window.clearInterval(intervalId);
            callback.call(this);
        }
    },1000)
}
function setVisible(selector,visible){
    document.querySelector(selector).style.display =visible ? 'block' :'none';
    
        
    
}
onReady(function(){
    setVisible('.page',true);

    setVisible('#loading',false);
    $('#loading').remove();
})





function loading(){
    $(document).ready(function(){
        return false;
    })
}

function setVisible(selector,visible){
    document.querySelector(selector).style.display =visible ? 'block' :'none';
    
        
    
}
if(loading){
    setVisible('.navbar',true);
}else{
    setVisible('.navbar',false)
    
}



// NAVBAR



$(window).scroll(function(){
    var height = $(window).scrollTop();
    if(height>50){
        $('.fix').addClass('navscroll')
        $('.fix').addClass('navbar-light')
        $('.fix').removeClass('navbar-dark')
    }else{
        $('.fix').removeClass('navscroll')
        $('.fix').removeClass('navbar-light')
        $('.fix').addClass('navbar-dark')
}})

// $(window).scroll(function() {
//     var hT = $('#main').offset().top,
//         hH = $('#main').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     if (wS > (hT+hH-wH)){
//         $('.fix').addClass('navscroll')
//          $('.fix').addClass('navbar-light')
//          $('.fix').removeClass('navbar-dark')
//     }else{
//         $('.fix').removeClass('navscroll')
//         $('.fix').removeClass('navbar-light')
//         $('.fix').addClass('navbar-dark')
//     }
//  });


 $(window).scroll(function() {
    var hT = $('#portfolio').offset().top,
        hH = $('#portfolio').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        $('.fix').addClass('navscrollII')
        $('.fix').removeClass('navscroll')
        $('.fix').removeClass('navbar-light')
        $('.fix').addClass('navbar-dark')

    }else{
        $('.fix').removeClass('navscrollII')
        $('.fix').addClass('navbar-light')
    }
 });



 $(window).scroll(function() {
    var hT = $('#middle').offset().top,
        hH = $('#middle').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        $('.fix').addClass('navscrollIII')
        $('.fix').removeClass('navscrollII')
    }else{
        $('.fix').removeClass('navscrollIII')
    }
 });


 $(window).scroll(function() {
    var hT = $('#prefooter').offset().top,
        hH = $('#prefooter').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        $('.fix').addClass('navscrollIV')
        $('.fix').removeClass('navscrollII')
    }else{
        $('.fix').removeClass('navscrollIV')
    }
 });

//  $(window).scroll(function(){
//      var width = $(window).width();
//      if(width <600 ){
//          $('.fix').addClass('pt-5')
//      }else{
//          $('.fix').removeClass('pt-5')
//      }
//  })


 var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        console.log("down")
        $(window).scroll(function(){
            var width = $(window).width();
            if(width <600  ){
                $('.fix .container').addClass('pdd')
            }else{
                $('.fix .container').removeClass('pdd')
            }
        })
       
    } else {
        
        $(window).scroll(function(){
            $('.fix .container').removeClass('pdd')
        })
        // $('.fix').css("margin-top","-30px")
        
        console.log("up")

         
    } 
    position = scroll;
});




// $(window).scroll(function(){
//     if($(this).scrollTop()>40){
//          $('.fix').addClass('navscroll')
//          $('.fix').addClass('navbar-light')
//          $('.fix').removeClass('navbar-dark')

//     }else{
//         $('.fix').removeClass('navscroll')
//         $('.fix').removeClass('navbar-light')
//         $('.fix').addClass('navbar-dark')
//     }
// })




// $(window).scroll(function(){
//     if($(this).scrollTop()>2400){
//         $('.fix').addClass('navscrollII')
//         $('.fix').removeClass('navscroll')
         
//     }else{
//         $('.fix').removeClass('navscrollII')

//     }
// })



// $(window).scroll(function(){
//     if($(this).scrollTop()>4820){
//         $('.fix').addClass('navscrollIII')
//         $('.fix').removeClass('navscrollII')
         
//     }else{
//         $('.fix').removeClass('navscrollIII')

//     }
// })



// $(window).scroll(function(){
//     if($(this).scrollTop()>7070){
//         $('.fix').addClass('navscrollIV')
//         $('.fix').removeClass('navscrollII')
         
//     }else{
//         $('.fix').removeClass('navscrollIV')

//     }
// })




$(window).scroll(function(){
    if($(this).scrollTop()>=50){
        $('#return-to-top').fadeIn(200);
    }else{
        $('#return-to-top').fadeOut(200);
    }
})
$('#return-to-top').click(function(){
    $('body,html').animate({
        scrollTop:0
    },500)
})






$('body').scrollspy({ target: '#main-nav' });

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
// Check for a hash value
if (this.hash !== '') {
  // Prevent default behavior   
  e.preventDefault();

  // Store hash
  const hash = this.hash;

  // Animate smooth scroll
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function () {
    // Add hash to URL after scroll
    window.location.hash = hash;
  });
}
});




  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });





$(document).ready(function(){
$(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
});

$(".zoom").hover(function(){
    
    $(this).addClass('transition');
}, function(){
    
    $(this).removeClass('transition');
});
});


