import myLogo from "./myLogo.png"

export function NavBar() {
    return(
        <nav>
            <img src={myLogo} alt="my-logo" />
            <i class='bx bx-menu' id="menuIcon"></i>
            <a href="#contact">Contact</a>
            <a href="#work">Projects</a>
            <a href="#aboutMe">About Me</a>
            <a href="#home">Home</a>
        </nav>
    );
}

