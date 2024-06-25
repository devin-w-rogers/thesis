import work1 from "./work1.jpg"
import work2 from "./work2.jpg"
import work3 from "./work3.jpg"


export function Work() {
    return(
        <section class="work" id="work">
            <h2 class="heading">Some <span>Projects</span> </h2>

            <div class="work-container">
                <div class="card">
                    <div class="inCard">
                        <h3>Project Name</h3>
                        <p>This project does this and this and that. 
                            It used this technology and that one too.
                            I really learned how to do this and that, 
                            and this also did something for that. </p>
                        <button>Check it out!<i class='bx bx-link-external'></i></button>
                    </div>
                </div>
                <div class="card">
                    <div class="inCard">
                        <h3>Project Name</h3>
                        <p>This project does this and this and that. 
                            It used this technology and that one too.
                            I really learned how to do this and that, 
                            and this also did something for that. </p>
                        <button>Check it out!<i class='bx bx-link-external'></i></button>
                    </div>
                </div>
                <div class="card">
                    <div class="inCard">
                        <h3>Project Name</h3>
                        <p>This project does this and this and that. 
                            It used this technology and that one too.
                            I really learned how to do this and that, 
                            and this also did something for that. </p>
                        <button>Check it out!<i class='bx bx-link-external'></i></button>
                    </div>
                </div>
            </div>

        </section>
    );
}