import myLogo from "./myLogo.png"
import './Script.jsx';
import { useEffect } from 'react';

export function NavBar() {

    useEffect(() => {                                           // Code to open mobile navbar
        const menuIcon = document.querySelector('#menuIcon');
        const nav = document.querySelector('.navbar');

        if (menuIcon) {
            menuIcon.onclick = () => {
                menuIcon.classList.toggle('bx-x');
                nav.classList.toggle('active');
            };
        } else {
            console.error('menuIcon element not found');
        }
    }, []); 

    return(
        <header>
            <img src={myLogo} alt="my-logo" class="logo"/>

            <i class='bx bx-menu' id="menuIcon"></i>

            <nav class="navbar">
                <a href="#home">Home</a>
                <a href="#aboutMe">About Me</a>
                <a href="#work">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

