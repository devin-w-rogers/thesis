import hexaheadshot from "./hexa-headshot.png"

export function AboutMe() {
    return(
        <body class="aboutMe" id="aboutMe">
            <p class="aboutText" id="aboutText"> Having recently graduated from Carthage College, I am looking forward to applying
                my skills in a real work setting. I have experience with traditional software development and web development, 
                primarily on the front-end. I have worked in an agile environment during my internship 
                at General Dynamics Mission Systems with the DevSecOps team, utilizing user stories (Jira) and version control (Git). 
                I am a quick learner because I genuinely enjoy improving myself in every way possible.</p>
            <div style={{marginBottom: '10vh'}}>
                <img src={hexaheadshot} class="hexhs" id="aboutHexHS" alt="headshot" /> 
            </div>
        </body>
    );
}