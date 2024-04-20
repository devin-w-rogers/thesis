import work1 from "./work1.jpg"
import work2 from "./work2.jpg"
import work3 from "./work3.jpg"


export function Work() {
    return(
        <section class="work">
            <h2 class="heading">Some <span>Projects</span> </h2>

            <div class="work-container">
                <div class="work-box">
                    <img src={work1}></img>
                    <div class="work-layer">
                        <h4>Poker Evaluator</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi, et incidunt hic animi!</p>
                        <a href="#"><i class="bx bx-link-external"></i></a>
                    </div>
                </div>
                <div class="work-box">
                    <img src={work2}></img>
                    <div class="work-layer">
                        <h4>String Finder</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolore doloribus ratione quis.
                        </p>
                        <a href="#"><i class="bx bx-link-external"></i></a>
                    </div>
                </div>
                <div class="work-box">
                    <img src={work1}></img>
                    <div class="work-layer">
                        <h4>Scheduling App</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem soluta aliquam perspiciatis vitae fugiat.</p>
                        <a href="#"><i class="bx bx-link-external"></i></a>
                    </div>
                </div>
            </div>

        </section>
    );
}