import hexaheadshot from "./hexa-headshot.png"
import {openResume} from './Script.jsx'; 

export function HomePage() {
    return(
        <main id="home">
            <img src={hexaheadshot} className="hexhs animate__animated animate__fadeInLeft" alt="headshot" /> 
            <div className="container animate__animated animate__fadeInUp">
                <h2>Hello! My name is</h2>
                <h1>Devin Wolf Rogers.</h1>
                <p className="intro-text">
                    I am a recent graduate from Carthage College with a Bachelor's in Computer Science and am looking forward to joining the workforce! Thanks for looking at my website!
                </p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/devinwolfrogers" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
                    <button id="openResume" className="resumeBtn" onClick={openResume}>View Resume</button>
                    <a href="https://github.com/devin-w-rogers" target="_blank" rel="noreferrer"><i className='bx bxl-github' ></i></a>
                </div>
            </div>
        </main>
    );
}