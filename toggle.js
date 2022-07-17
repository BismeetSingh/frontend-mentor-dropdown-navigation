const toggleMenuVisibility = (index) => {
    let menu = document.getElementsByClassName("dropdown_menu")[index];
    let icon = document.getElementsByClassName("dropdown_icon")[index];
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    icon.style.transform = icon.style.transform === 'none'? 'rotate(180deg)' : 'none';
   
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