import hexaheadshot from "./hexa-headshot.png"

export function AboutMe() {
    return(
        <body id="aboutMe">
            <p id="aboutText"> I'm currently a senior Computer Science student at Carthage College and will be
            graduating in May of 2024. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Architecto maxime culpa quas debitis et ullam quis in tenetur, id provident excepturi
            dolorem minima vitae beatae nihil numquam sunt laborum necessitatibus! </p>
            <img src={hexaheadshot} class="hexhs" alt="headshot" /> 
        </body>
    );
}