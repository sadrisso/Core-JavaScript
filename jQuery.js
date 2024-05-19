// using jQuery

$('h1').text('Hello');
$('h1').html('<b>Hi</b>');


// creating a peragraph and adding

let pera0 = $('<p></p>').text('This is pera 0');
$('.p1').after(pera0);


// getting attribute using jQuery

let attr = $('p').attr('class')
console.log(attr);



// set attribute using jQuery

let newAttr = $('p').attr('id', 'peraOne')
console.log(newAttr)

let pera = $('p');
console.log(pera)



// adding css style using jQuery


$('h1').css('color', 'blue');
$('h1').css('background-color', 'yellow');
$('h1').css('text-align', 'center');
$('h1').css('font-size', '5rem');
$('h1').css('padding', '20px');
$('h1').css('width', '50%');
$('h1').css('margin', '0 auto');

// multiple property

$('h1').css({'color': 'red', 'background-color': 'green', 'font-size': '5rem', 'padding': '20px',})

$('.p1').addClass('style2 style1');



// event listener

$('.btn').click((evt) => {
    evt.preventDefault();
    console.log('You have clicked the button!!')
})
