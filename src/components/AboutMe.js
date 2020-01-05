import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    return (
        <section id="one" class="tiles">
            <article>
                <span class="image">
                    <img src="images/pic01.jpg" alt="" />
                </span>
                <header class="major">
                    <h3><a href="generic.html" class="link">About me</a></h3>
                    <p>Let me tell you a little story...</p>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="images/pic02.jpg" alt="" />
                </span>
                <header class="major">
                    <h3><a href="landing.html" class="link">My furry creatures</a></h3>
                    <p>feugiat amet tempus</p>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="images/pic03.jpg" alt="" />
                </span>
                <header class="major">
                    <h3><a href="elements.html" class="link">My past work, some call it their career</a></h3>
                    <p>Let's have a look at the past.</p>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="images/pic04.jpg" alt="" />
                </span>
                <header class="major">
                    <h3><a href="interests.html" class="link">Things that make me go &#129300;</a></h3>
                    <p>Here you'll find what makes me think.</p>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="images/pic05.jpg" alt="" />
                </span>
                <header class="major">
                    <h3><a href="waste.html" class="link">Stuff to help you pass time</a></h3>
                    <p>Is this how you really want to spend your time though...?</p>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="images/pic06.jpg" alt="" />
                </span>
                <header class="major">
                    <h3><a href="other_stuff.html" class="link">Complete misc. stuff</a></h3>
                    <p>I don't even know what to put here.</p>
                </header>
            </article> -->



            <div class="inner">
                <header class="major">
                    <h3>This goes against every bit of my own being, but here it goes:</h3>
                </header>
                <p>I'm originally from Iran, lived there until the age of 7.5, when we went on 'vacation' to
                        Germany, to escape the war.</p>
                <p>We were in Germany for four years, their government was quite kind, giving a lot of support to
                        immigrant in the mid-late 1980s.</p>
                <p>Finally made it to the US in 1988, always our end destination, I spent the next 25 years of my
                        life in Los Angeles.</p>
                <p>In 2013 I moved away from LA, and for the first time lived in a different city from my mother,
                    that was quite stressful for her, but necessary for me. Alas it was a short stint in the Bay
                        Area, all of 30 months in total.</p>
                <p>Mid 2015 I moved to Portland where I have been for the past four plus years.</p>
                <p>So, yeah, don't love talking about myself, but hopefully that gives you a tiny bit of look into
                        what has shaped me.</p>
                <span class="image main"><img
                    src="/Users/omid/Documents/Lambda/Web_Fundamentals/Advanced_CSS/portfolio-website/html5up-forty/images/Omid_tech_profile_pic.jpeg"
                    alt="" /></span>

            </div>
        </section>
    )
}