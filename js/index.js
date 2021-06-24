console.log("Your index.js file is loaded correctly!");

$(".button").on('mouseover',function(){
    this.style.backgroundColor ='#345C66'
}).on('mouseout', function(){
    this.style.backgroundColor ='#608790'
});

$('.lab-info').on('click', function(){
    console.log('lab clicked')
})
$(".top").on('click', function(){
    console.log('nav clicked')
});

