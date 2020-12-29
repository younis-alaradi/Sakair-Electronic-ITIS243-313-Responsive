function comingSoon()
{
    alert("Full development Kit coming soon , include  full package Front-End , Full package back-End server PHP , SQL ,ASP,Python for web");
}
function Abdulwahib()
{
    alert("Abdulwahib sharif , Collage of IT , IS Department , ITIS 243 - 313 web development ");
}
function MOhammedAbdulaziz()
{
    alert("Mohammed Abdulaziz , Collage of IT , IS Department , ITIS 243 - 313 web development ");
}
function AhmedKhalil()
{
    alert("Ahmed Khalil , Collage of IT , IS Department ,ITIS 243 - 313 web development ");
}
function Abduljalil()
{
    alert("Ahmed Khalil , Collage of IT , IS Departmen , ITIS 243 - 313 web development");
}
function YounisAlaradi()
{
    alert("Younis ALaradi , Collage of IT , IS Department , ITIS 243 - 313 web development")
}

/*****************Add to cart function & alert function *******************/
/*Created by Younis Alaradi*/

$('.clear-cart').click(function() {
    shoppingCart.clearCart();
    countt=0;
    let index = document.getElementById('Shopping_Items_count').innerHTML =0;


});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



