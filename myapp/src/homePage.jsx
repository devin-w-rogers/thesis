import hexaheadshot from "./hexa-headshot.png"


export function HomePage() {
    return(
        <main>
            <div class="container">
                <img src={hexaheadshot} class="hexhs" alt="headshot" /> 
            </div>
            <div class="container">
                <div class="homepageText">
                    <p style={{ fontSize: '5vh', marginBottom: '.3rem'}}>Hi! I'm</p>
                    <h1>Devin Wolf Rogers.</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia,
                    vitae aliquam nihil saepe quibusdam ex velit, quaerat doloribus laboriosam 
                    fugiat id deserunt ratione perferendis possimus excepturi sit explicabo voluptatum!
                    </p>
                </div>
            </div>
        </main>
    );
}

