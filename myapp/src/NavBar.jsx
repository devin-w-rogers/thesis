import myLogo from "./myLogo.png"

export function NavBar() {
    return(
        <nav>
            <img src={myLogo} alt="my-logo" />
            <i class='bx bx-menu-alt-right' id='menu-icon'></i>
            <a href="contact">Contact</a>
            <a href="projects">Projects</a>
            <a href="#aboutMe">About Me</a>
            <a href="home">Home</a>
        </nav>
    );
}

