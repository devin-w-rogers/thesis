import headshot from "./headshot.jpg"
import hexaheadshot from "./hexa-headshot.png"


export function HomePage() {
    return(
        <main>
            <div class="container">
                <img src={hexaheadshot} class="hexhs" alt="headshot" /> 
            </div>
            <div class="container">
                <div class="homepageText">
                    <h1>Devin Wolf Rogers</h1>
                    <p style={{ fontSize: '5vh' }}>Hello there!</p>
                    <p>I'm currently a senior Computer Science student at Carthage College and will be
                        graduating in May of 2024. I am looking forward to you browsing my website!
                    </p>
                </div>
            </div>
        </main>
    );
}

