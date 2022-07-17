const toggleMenuVisibility = (index) => {
    let allMenus = document.getElementsByClassName("dropdown_menu");
    let allDropDownIcons = document.getElementsByClassName("dropdown_icon");
    let menu = allMenus[index];
    let icon = allDropDownIcons[index];
    // Keep only 1 menu open at a time.
    // debugger;
    for (let menu of allMenus){
        menu.style.display = 'none';
    }

    for (let icon of allDropDownIcons){
        icon.style.transform = 'none';
    }

    menu.style.display = 'block' ;
    icon.style.transform =  'rotate(180deg)' ;
   
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