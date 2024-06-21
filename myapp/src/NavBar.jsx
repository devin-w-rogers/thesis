import myLogo from "./myLogo.png"
import './Script.jsx';

export function NavBar() {
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

