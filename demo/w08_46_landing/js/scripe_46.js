const navbar = document.querySelector('.nav');
console.log('navbar', navbar)

window.addEventListener('scroll', function(){
    if( this.window.pageYOffset > 50){
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed')
    }
});