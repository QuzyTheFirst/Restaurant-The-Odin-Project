import './style.css';
import { createHomePage } from './home';
import { createMenuPage } from './menu';
import { createAboutPage } from './about';

(function(){
    const content = document.querySelector("#content");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");

    homeButton.addEventListener('click', ()=>{
        clearPage();
        createHomePage(content);
    })

    menuButton.addEventListener('click', ()=>{
        clearPage();
        createMenuPage(content);
    })

    aboutButton.addEventListener('click', () => {
        clearPage();
        createAboutPage(content);
    })

    function clearPage(){
        content.innerHTML = "";
    }

    clearPage();
    createHomePage(content);
})();