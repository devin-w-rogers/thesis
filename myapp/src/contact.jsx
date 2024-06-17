

export function Contact() {
    return(
        <section class="contact" id="contact">
            <h2 class="heading">Contact Me!</h2>

            <form action="#">
                <div class="inputBox">
                    <input type="text" placeholder="Full Name"></input>
                    <input type="email" placeholder="Email Address"></input>
                </div>
                <div class="inputBox">
                    <input type="phone-number" placeholder="Mobile Number"></input>
                    <input type="email" placeholder="Email Subject"></input>
                </div>
                <textarea name="" id="" cols="30" rows="8" placeholder=" Your Message"></textarea>
                <div class="upBtn">
                    <input type="submit" value="Send Message" class="submitBtn"></input>
                    <a href="#home" class="upBtn"><i class='bx bx-upvote'></i></a>
                </div>
            </form> 
        </section>  
    );
}

