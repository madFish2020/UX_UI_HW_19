console.log("Your index.js file is loaded correctly!");

$(".button").on('mouseover',function(){
    this.style.backgroundColor ='#345C66'
}).on('mouseout', function(){
    this.style.backgroundColor ='#608790'
});

$('figure').on('mouseover', function(){
    $(this).addClass('lab-info')
}).on('mouseout', function(){
    $(this).removeClass('lab-info')
});

$('.top').on('mouseover', function(){
    $(this).addClass('Topnav')
}).on('mouseout', function(){
    $(this).removeClass('Topnav')
});
