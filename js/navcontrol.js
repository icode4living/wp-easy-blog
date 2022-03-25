/**Toggle between light and darkmode*/
//Dark mode button
let themeModeBtn = document.querySelector('[theme-mode]');
//Listen for a click on the theme mode toggle button
themeModeBtn.addEventListener('click',()=>{
    if(prefersDarkScheme.matches){
        document.body.classList.toggle('light-theme');
    }
    else{
        document.body.classList.toggle('dark-theme')
    }
})