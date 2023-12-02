import headshot from "./headshot.jpg"


export function HomePage() {
    return(
        <main>
            <div class="container">
                <div class="hexagon">
                    <div class="shape">
                        <img src={headshot} alt="headshot" /> 
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="homepageText">
                    <h1>Devin Wolf Rogers</h1>
                    <p style={{ fontSize: '5vh' }}>Hello there! Welcome to my website.</p>
                    <p>I'm currently a senior Computer Science student at Carthage College and will be
                        graduating in May of 2024. I am looking forward to you browsing my website!
                    </p>
                </div>
            </div>
        </main>
    );
}

