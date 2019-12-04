import React from 'react';
// import './App.css';

function MainPage() {
    return (
        <div className="MainPage">
            <header id="header" class="alt">
                <a href="index.html" class="logo"><strong>Beginnings...</strong> <span>by Omid Ashtari</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>

            {/* NAVIGATION */}
            <nav id="menu">
                <ul class="links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="landing.html">Landing</a></li>
                    <li><a href="generic.html">Generic</a></li>
                    <li><a href="elements.html">Elements</a></li>
                </ul>
                <ul class="actions stacked">
                    <li><a href="#" class="button primary fit">Get Started</a></li>
                    <li><a href="#" class="button fit">Log In</a></li>
                </ul>
            </nav>

            {/* WELCOME  */}
            <section id="banner" class="major">
                <div class="inner">
                    <header class="major">
                        <h1>Hi, my name is Omid</h1>
                    </header>
                    <div class="content">
                        <p>Welcome to my portfolio page, I'm borrowing the design from <a href="https://html5up.net/">HTML5
                            UP</a>.</p>
                        <ul class="actions">
                            <li><a href="#one" class="button next scrolly">Get Started</a></li>
                        </ul> -->
                </div>
                </div>
            </section>

            {/* PRIMARY SECTOIN  */}

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
            </section>

            {/* DEFAULT REACT CODE  */}
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
            </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
            </a>
            </header> */}

            {/* UNDER CONSTRUCTION SECTION  */}
            <section id="two">
                <div class="inner">
                    <header class="major">
                        <h2>Future work...under construction</h2>
                    </header>
                    <p>Who knows what goes here, I'm not even sure why the template has this section.</p>
                    <ul class="actions">
                        <li><a href="generic.html" class="button next">Get Started</a></li>
                    </ul>
                </div>
            </section>

            {/* CONTACT  */}

            <section id="contact">
                <div class="inner">
                    <section>
                        <form method="post" action="#">
                            <div class="fields">
                                <div class="field half">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div class="field half">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" id="email" />
                                </div>
                                <div class="field">
                                    <label for="message">Message</label>
                                    <textarea name="message" id="message" rows="6"></textarea>
                                </div>
                            </div>
                            <ul class="actions">
                                <li><input type="submit" value="Send Message" class="primary" /></li>
                                <li><input type="reset" value="Clear" /></li>
                            </ul>
                        </form>
                    </section>
                    <section class="split">
                        <section>
                            <div class="contact-method">
                                <span class="icon solid alt fa-envelope"></span>
                                <h3>Email</h3>
                                <a href="#">omid.ashtari.1976@gmail.com</a>
                            </div>
                        </section>
                        <section>
                            <div class="contact-method">
                                <span class="icon solid alt fa-phone"></span>
                                <h3>Phone</h3>
                                <span>‪(503) 468-7789</span>
                            </div>
                        </section>
                        <section>
                            <div class="contact-method">
                                <span class="icon solid alt fa-home"></span>
                                <h3>Address</h3>
                                <span>You'll have to figure this<br />
                                    Portland, OR 97214<br />
                                    United States of America</span>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
            {/* FOOTER  */}
            <footer id="footer">
                <div class="inner">
                    <ul class="icons">
                        <li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
                        <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                        <li><a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                    </ul>
                    <ul class="copyright">
                        <li>&copy; Untitled</li>
                        <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default MainPage;