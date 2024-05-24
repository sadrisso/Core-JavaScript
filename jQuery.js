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

$('.btn').click((evt) => 
{
    evt.preventDefault();
    $('body').after('Button was clicked!!')
})

$('.myBtn').on('click', () => 
{
    let value = this.innerHTML;
    $('h2').text(value + ' is clicked');
})


// user login practice


$('#loginBtn').click((e) => 
{
    e.preventDefault();
    let pass1Val = $('#pass1').val();
    let pass2Val = $('#pass2').val();

    if (pass1Val && pass2Val != '') {
        if (pass1Val === pass2Val) {
            alert('successfully login')
        } else {
            alert('password mismatch')
        }
    } else {
        alert('please enter a password!')
    }

})


// adding animations


$('.btn').click(() => 
{
    // $('.div1').hide(1000).show(1000);
    // $('.div1').toggle(1000);
    // $('.div1').fadeIn(1000).fadeOut(1000);
    // $('.div1').fadeToggle(1000);
    // $('.div1').fadeTo(1000, 0.4);
    // $('.div1').slideUp(1000).slideDown(1000);
    // $('.div1').slideToggle(1000);
    $('.div1').animate({height: '400px', width: '70%'});
})
