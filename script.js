HTMLHamburgerIcon = document.querySelector('#hamburger');
HTMLNav = document.querySelector('#nav');
HTMLHamburgerIcon.addEventListener('click', toggle);

function toggle(){
    if(HTMLHamburgerIcon.innerHTML === "☰"){
        HTMLNav.style.left = '10%';
        HTMLHamburgerIcon.innerHTML = "✕";  
    }else{
        HTMLNav.style.left = "-9000px";
        HTMLHamburgerIcon.innerHTML = "☰";
    }
}