const drop1 = document.querySelector('.dropdown1');
const drop2 = document.querySelector('.dropdown2');
const features = document.getElementById('features');
const company = document.getElementById('company');
const arrow = features.querySelector('.arrow-down');
const arrow2 = company.querySelector('.arrow-down2');
const arrow3 = document.querySelector('.arrow-down3');
const arrow4 = document.querySelector('.arrow-down4');
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.navmenu');
const closeMenu = document.querySelector('.close');
const featuresMenu = document.querySelector('.features2');
const companyMenu = document.querySelector('.company2');
const dropMenu1 = document.querySelector('.drop-menu'); 
const dropMenu2 = document.querySelector('.drop-menu2');
const overlay = document.querySelector('.overlay'); 

features.addEventListener('click', () => {
    drop1.classList.toggle('active');
    arrow.classList.toggle('rotate');
    });

company.addEventListener('click', () => {
    drop2.classList.toggle('active');
    arrow2.classList.toggle('rotate');
    });

menu.addEventListener('click', () => {
    if(navMenu.style.right ==='-100%') {
        navMenu.style.right = '0%';
        overlay.style.display = 'block';
        } else {
            navMenu.style.right = '-100%';      
    }
});

closeMenu.addEventListener('click', () => {
    navMenu.style.right = '-100%';
    overlay.style.display = 'none';
});

featuresMenu.addEventListener('click', () => {
    dropMenu1.classList.toggle('active');
    arrow3.classList.toggle('rotate');
});

companyMenu.addEventListener('click', () => {
    dropMenu2.classList.toggle('active');
    arrow4.classList.toggle('rotate');
});


