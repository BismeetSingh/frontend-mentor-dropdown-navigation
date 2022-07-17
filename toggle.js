const toggleMenuVisibility = (index) => {
    document.getElementsByClassName("dropdown")[index].classList.toggle("show");
    let img = document.getElementsByClassName('toggle-menu')[index].src;
    if (img.indexOf('images/icon-arrow-down.svg') != -1) {
        document.getElementsByClassName('toggle-menu')[index].src = 'images/icon-arrow-up.svg';
    }
    else {
        document.getElementsByClassName('toggle-menu')[index].src = 'images/icon-arrow-down.svg';
    }

}


const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    const navMenu = document.getElementById(navId);
    console.log(toggle);
    console.log(navMenu);
    if (toggle && navMenu){
        toggle.addEventListener('click',()=>{
            navMenu.classList.toggle('show');
            if (toggle.src.indexOf('images/icon-menu.svg') != -1) {
                        toggle.src = 'images/icon-close-menu.svg';
                    }
                    else {
                        toggle.src = 'images/icon-menu.svg';
                    }
        })
    }

}

showMenu ('header_toggle','navbar')