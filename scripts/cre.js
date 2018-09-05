const imgStyle = {
    height: '100%',
    width: '100%',
    display: 'block',
    margin: '0 auto'
}

const abt = (
    <div className="card card-main border-primary text-black mb-3" id="about">
        <img style={imgStyle} src="src/profilePhoto.jpg" alt="Profile image" />
        <div className="card-body">
            <p className="card-text">
            Hi! I'm Amey, and I am a Computer Science student at the College of Engineering and the Honors College at The University of Texas at Arlington. 
            Somewhere down the future, I'm hoping to work on <span className="bg-info">Artificial Intelligence</span> or/and <span className="bg-info">Quantum Computing</span>.
            </p>
        </div>
    </div>
)

const edu = (
    <div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-7"><img style={imgStyle} src="src/uta.jpg" alt="UTA photo" /></div>
                    <div className="col-lg-5">
                        <h4>Education</h4><br /><br />
                        <p className="card-text">
                        I did my high school at Loknete Vyankatrao Hiray College, Nashik, MH, India and currently study at <span className="bg-success">UTA</span>, TX under the Honors College and the College of Engineering. 
                        My Major is <span className="bg-success">Computer Science</span>, and I'm considering doing a minor in Physics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const styleWhite = {
    color: 'white'
}
const styleMat = {
    color: 'white',
    background: '#ff3300'
}

const skills = (
    <div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-7"><img style={imgStyle} src="src/sketch.jpg" alt="sketch" /></div>
                    <div className="col-lg-5">
                        <h4>Skills</h4><br /><br />
                        <p className="card-text">
                        <span className="bg-info">Python</span> <span className="bg-danger">Java</span> <span className="bg-danger">C</span> <span className="bg-primary" style={styleWhite}>CSS</span> <span className="bg-primary" style={styleWhite}>BootStrap</span> <span className="bg-warning">Javascript</span> <span style={styleMat}>MATLAB</span>.
                        <br />
                        <br /> I speak Marathi, English, Hindi, and I'm learning Japanese, and Spanish. I also play
                        Tabla. I also enjoy sketching.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const stylePy = {
    background: '#4584b6',
    color: '#ffde57'
}
const styleMavs = {
    background: '#ffde57',
    color: '#4584b6'
}

const act = (
    <div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-7"><img style={imgStyle} src="src/esports.jpg" alt="LAN party photo" /></div>
                    <div className="col-lg-5">
                        <h4>Activites</h4><br /><br />
                        <p className="card-text">
                        I'm a Computer Science Peer Academic Leader at UTA.
                        I'm a member of <span className="bg-success">Leadership Honors Program</span> and <span style={stylePy}>Py</span><span style={styleMavs}>Mavs</span> at UTA and also a part of <span className="bg-danger">UTA ESports</span>. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const hob = (
    <div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-7"><img style={imgStyle} src="src/cycling.jpg" alt="cycling photo" /></div>
                    <div className="col-lg-5">
                        <h4>Hobbies</h4><br /><br />
                        <p className="card-text">
                            I like learning natural languages (and have an aim of being fluent in 7 languages before I'm 25 years old). I love <span className="bg-success">cycling</span> and <span className="bg-primary" style={styleWhite}>sketching</span> (I even have a blog. Check <a href="https://ameyrk.tumblr.com/" target="_blank"><u>it</u></a> out).
                            <br /> I also love reading books, especially science-fiction and mystery.
                            <br /> ... ¯\_(ツ)_/¯
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const git = (
    <div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-7"><img style={imgStyle} src="src/nmsi3wm.png" alt="nms i3wm rice" /></div>
                    <div className="col-lg-5">
                        <h4>Projects</h4><br /><br />
                        <p className="card-text">
                            <a href="https://github.com/ameyrk99/whatsapp-parser" target="_blank">
                                <u>whatsapp-parser</u>
                            </a> - Analyze whatsapp messages and graph the statistics.
                                    <br />
                            <br />
                            <a href="https://github.com/ameyrk99/minipage" target="_blank">
                                <u>Minipage</u>
                            </a> - Minimalistic Homepage for browsers
                                    <br />
                            <br />
                            <a href="https://github.com/ameyrk99/ameyrk99.github.io" target="_blank">
                                <u>ameyrk99.github.io</u>
                            </a> - This website
                                </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const styleGitImg = {
    height: '25px',
    width: '25px'
}
const con = (
    <div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-8"><img style={imgStyle} src="src/connect.jpg" alt="LAN party photo" /></div>
                    <div className="col-lg-4">
                        <h4>Connect with me:</h4><br/><br/>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://github.com/ameyrk99/" target="_blank">
                                    <i className="fab fa-github fa-lg"></i>    
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/Ameyrkhairnar" target="_blank">
                                    <i className="fab fa-facebook fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://ameyrk.tumblr.com/" target="_blank">
                                    <i className="fab fa-tumblr fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/ameykhairnar99/" target="_blank">
                                    <i className="fab fa-instagram fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/amey-khairnar-726453158/" target="_blank">
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ameykhairnar99@gmail.com" target="_blank">
                                    <i className="far fa-envelope fa-lg"></i>
                                </a>
                            </li>
                            <li>and, check out my
                                <a href="src/resume.pdf" target="_blank">
                                    <img id="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADuSURBVEhL5dW9DsFQGMbxrhhMJrtNIiImV8BktbsEwWI1uQC3YLaKwWohRrPBIJhM+D91TtJJe3w0Pp7kl5425+1b7al6P50iRk9QfWhquOCInQPNV53qQ2ObVPy96NH8P2yiyXMU/L3o0XzVuV7c+9PCEG2kkDD70jXHyoFjUodTZjhD93mKtBmfzFYnbZjxAVrGPThFTZYYQCfKmW0fEyxgmzRRgnPUZIs19sjANhlDF2CbiOY7R0Uq3qAKe7te/ktWt6Gfe88kj4ei1RV8kMHV1UESdnVl8XmJ5Y3/nT/IWJu89csYyzf+G+N5V/p4fhM87ob7AAAAAElFTkSuQmCC"/>resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const extras = (
    <div>
        <div className="root col-lg-12" id="edu">{edu}</div>
        <div className="root col-lg-12" id="skills">{skills}</div>
        <div className="root col-lg-12" id="act">{act}</div>
        <div className="root col-lg-12" id="hob">{hob}</div>
        <div className="root col-lg-12" id="git">{git}</div>
        <div className="root col-lg-12" id="con">{con}</div>
    </div>
)

const headerStyles = {
    'fontSize': '80%'
}

const headers = (
    <div className="row">
        <div className="col-sm-2 card-header heads eduh" style={headerStyles}>Edu <i className="fas fa-book-reader fa-lg"></i></div>
        <div className="col-sm-2 card-header heads skillsh" style={headerStyles}>Skills <i className="fas fa-palette fa-lg"></i></div>
        <div className="col-sm-2 card-header heads acth" style={headerStyles}>Act. <i className="fab fa-python fa-lg"></i></div>
        <div className="col-sm-2 card-header heads hobh" style={headerStyles}>Hobb. <i className="fas fa-bicycle fa-lg"></i></div>
        <div className="col-sm-2 card-header heads gith" style={headerStyles}>Proj. <i className="fas fa-code-branch fa-lg"></i></div>
        <div className="col-sm-2 card-header heads conh" style={headerStyles}>Conn. <i className="fab fa-linkedin fa-lg"></i></div>
    </div>
)

const rest = (
    <div className="row">
        <div className="col-lg-4">
            <div id="about">{abt}</div>
        </div>
        <div className="col-lg-7">
            <div id="headers">{headers}</div><br/>
            <div id="extras">{extras}</div>
        </div>
    </div>
)

ReactDOM.render(
    rest,
    document.getElementById("rest")
)
