

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


