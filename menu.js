function menuShow() {
    let mobileiconmenu = document.querySelector('.mobilemenu');
    if (mobileiconmenu.classList.contains('open')){
        mobileiconmenu.classList.remove('open');
        document.querySelector('.icon').src="cores/menu_white_36dp.svg";
    }else{
        mobileiconmenu.classList.add('open')
        document.querySelector('.icon').src="cores/close_white_36dp.svg";
    }
}