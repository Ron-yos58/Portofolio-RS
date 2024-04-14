// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// navbar-fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// sendEmail

const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail(){
    const bodymessage = `Full Name: ${name.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken : "f86c56ba-c94c-4d7f-8706-7b663fec7553",
        To : 'ronaldsebastian58@gmail.com',
        From : 'ronaldsebastian58@gmail.com',
        Subject : "E-mail from Website 'CV Ronald Sebastian'",
        Body : bodymessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit",(e) => {
 e.preventDefault();
 
 sendEmail();
});
