import hexaheadshot from "./hexa-headshot.png"


export function HomePage() {
    return(
        <main id="home">
            <div class="hexhsContainer">
                <img src={hexaheadshot} class="hexhs animate__animated animate__fadeInLeft" alt="headshot" /> 
            </div>
            <div class="container animate__animated animate__fadeInUp">
                <p style={{ fontSize: '5vh', marginBottom: '.3rem'}}>Hello! My name is</p>
                <h1>Devin Wolf Rogers.</h1>
                <p style={{ marginLeft: '1rem', marginRight: '1rem'}}>
                    I am a recent graduate from Carthage College with a BA in Computer Science and am looking forward to joining the workforce! Thanks for looking at my website!
                </p>
                <div class="social">
                    <a href="https://www.linkedin.com/in/devinwolfrogers" target="_blank" rel="noopener"><i class='bx bxl-linkedin'></i></a>
                    <button id="openResume" class="resumeBtn">View Resume</button>
                    <a href="https://github.com/devin-w-rogers" target="_blank" rel="noopener"><i class='bx bxl-github' ></i></a>
                </div>
                <div class="resume">
                </div>
            </div>
        </main>
    );
}

