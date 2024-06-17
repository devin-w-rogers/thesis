import hexaheadshot from "./hexa-headshot.png"

export function AboutMe() {
    return(
        <body id="aboutMe">
            <p id="aboutText"> Having just recently graduated from Carthage College, I am really looking forward to applying
                my skills in a real work setting. I have experience with traditional software development and web development, 
                primarily on the front-end. I have worked in an agile environment during my internship 
                at General Dynamics Mission Systems with the DevSecOps team, utilizing user stories (Jira) and version control (Git). 
                I am a quick learner because I genuinely enjoy improving myself in every way possible.</p>
            <div style={{paddingTop: '40px'}}>
                <img src={hexaheadshot} class="hexhs" id="aboutHexHS" alt="headshot" /> 
            </div>
        </body>
    );
}