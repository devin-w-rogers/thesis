import myLogo from "./myLogo.png"
import './Script.jsx';
import { useEffect } from 'react';

export function NavBar() {

    useEffect(() => {                                           
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

        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    menuIcon.classList.remove('bx-x');
                    nav.classList.remove('active');
                }
            });
        });

        // Close mobile menu when clicking outside
        const handleOutsideClick = (e) => {
            if (!nav.contains(e.target) && !menuIcon.contains(e.target) && nav.classList.contains('active')) {
                menuIcon.classList.remove('bx-x');
                nav.classList.remove('active');
            }
        };

        document.addEventListener('click', handleOutsideClick);

        // Cleanup event listeners
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', () => {});
            });
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []); 

    return(
        <header>
            <img src={myLogo} alt="my-logo" className="logo"/>

            <i className='bx bx-menu' id="menuIcon"></i>

            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#aboutMe">About Me</a>
                <a href="#work">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}