const btnMenu = document.querySelector('#hamburger');
const menuPanel = document.querySelector('#menu-list');
/***************************************************************************************** */

btnMenu.addEventListener('click', function menu() {
    if (menuPanel.classList.contains('hide')) {
        menuPanel.classList.add('show');
        menuPanel.classList.remove('hide');
    } else {
        menuPanel.classList.remove('show');
        menuPanel.classList.add('hide');
    }
});
