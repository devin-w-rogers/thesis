import myLogo from "./myLogo.png"
export function NavBar() {
    return(
        <nav>
            <img src={myLogo} alt="my-logo" />
            <a href="contact">Contact</a>
            <a href="resume">Resume</a>
            <a href="work">Work</a>
            <a href="about">About Me</a>
        </nav>
    );
}

