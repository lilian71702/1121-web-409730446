const navbar = document.querySelector('.nav');
console.log('navbar', navbar)

window.addEventListener('scroll', function(){
    if( this.window.pageYOffset > 50){
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed')
    }
});


function showdemo(week){
    const p =document.querySelector('.show-classdemo');
    console.log('showdemo', p);
    switch(week) {
        case 1:
            p.innerHTML = `<iframe src='./demo/w01_46_intro/index.html' width="100%" height="100%" />`;
            break;
        case 3:
            p.innerHTML = `<iframe src='./demo/w03_46_demo/index.html' width="100%" height="100%" />`;
            break;
        case 4:
            p.innerHTML = `<iframe src='./demo/w04_46_demo copy/index.html' width="100%" height="100%" />`;
            break;
        case 5:
            p.innerHTML = `<iframe src='./demo/w05_46_blog/index.html' width="100%" height="100%" />`;
            break;
        case 6:
            p.innerHTML = `<iframe src='./demo/w06_46_blog/index.html' width="100%" height="100%" />`;
            break;
        case 8:
            p.innerHTML = `<iframe src='./demo/w08_46_landing/index.html' width="100%" height="100%" />`;
            break;
        case 9:
            p.innerHTML = `<iframe src='./demo/w11_mid-2_46/p4_xx.html' width="100%" height="100%" />`;
            break;
        case 10:
            p.innerHTML = `<iframe src='./demo/w11_mid-2_46/p5_xx.html' width="100%" height="100%" />`;
            break;
        case 12:
            p.innerHTML = `<iframe src='./demo/w12_portfolio_46/index.html' width="100%" height="100%" />`;
            break;
        case 13:
            p.innerHTML = `<iframe src='./demo/w13_portfolio_46/index.html' width="100%" height="100%" />`;
            break;
        case 14:
            p.innerHTML = `<iframe src='./demo/w14_46_mega/index.html' width="100%" height="100%" />`;
            break;
        case 15:
            p.innerHTML = `<iframe src='./demo/w15_portfolio_46/index.html' width="100%" height="100%" />`;
            break;
        case 16:
            p.innerHTML = `<iframe src='./demo/w16_portfolio_46/index.html' width="100%" height="100%" />`;
            break;
        case 17:
            p.innerHTML = `<iframe src='resume.html' width="100%" height="100%" />`;
            break;
    }
}


