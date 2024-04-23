import hexaheadshot from "./hexa-headshot.png"


export function HomePage() {
    return(
        <main>
            <div class="hexhsContainer">
                <img src={hexaheadshot} class="hexhs animate__animated animate__fadeInLeft" alt="headshot" /> 
            </div>
            <div class="container animate__animated animate__fadeInUp">
                <p style={{ fontSize: '5vh', marginBottom: '.3rem'}}>Hello! I'm</p>
                <h1>Devin Wolf Rogers.</h1>
                <p style={{ marginLeft: '1rem', marginRight: '1rem'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia,
                vitae aliquam nihil saepe quibusdam ex velit, quaerat doloribus laboriosam 
                fugiat id deserunt ratione perferendis possimus excepturi sit explicabo voluptatum!
                </p>
                <div class="social">
                    <a href="https://www.linkedin.com/in/devinwolfrogers" target="_blank" rel="noopener"><i class='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/devin-w-rogers" target="_blank" rel="noopener"><i class='bx bxl-github' ></i></a>
                </div>
            </div>
        </main>
    );
}

