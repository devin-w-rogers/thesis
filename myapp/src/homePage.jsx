import hexaheadshot from "./hexa-headshot.png"
import {openResume} from './Script.jsx'; 


export function HomePage() {
    return(
        <main id="home">
            <img src={hexaheadshot} class="hexhs animate__animated animate__fadeInLeft" alt="headshot" /> 
            <div class="container animate__animated animate__fadeInUp">
                <h2>Hello! My name is</h2>
                <h1>Devin Wolf Rogers.</h1>
                <p style={{ marginLeft: '1vw', marginRight: '1vw', lineHeight: '1.5'}}>
                    I am a recent graduate from Carthage College with a BA in Computer Science and am looking forward to joining the workforce! Thanks for looking at my website!
                </p>
                <div class="social">
                    <a href="https://www.linkedin.com/in/devinwolfrogers" target="_blank" rel="noopener"><i class='bx bxl-linkedin'></i></a>
                    <button id="openResume" class="resumeBtn" onClick={openResume}>View Resume</button>
                    <a href="https://github.com/devin-w-rogers" target="_blank" rel="noopener"><i class='bx bxl-github' ></i></a>
                </div>
            </div>
        </main>
    );
}

