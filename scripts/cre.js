const musNote = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFpSURBVEhL7dRLKERRHMfxK49IlEezEQsbNrKXslTs2M7SRpGShQU7r4UsbGy8CikLU8rCwlq2spKyww7JM6/v79xz69LMmblzi9T86tM4ZzK/mXvP/XuF/FUa0Y851GsjbmrQjQns4QqfIU2IlAp0YARbOEP4Ay+hokls2r3IJYMIPvAWh5hFH3SJgpRiAbFKelCkDfvagiQWcYRnBF8m75JRTOEAN3ZP3nCCZezbvViXS86xDZV2ohJBxhGrZAB12nAkdkmbWbnzv0t06tawgV1EKqlGAq6SYeg9nbY7+3dOJbVI4QP6h2v7+rOkGPfQw1kOnbJj5FSygxfMYwaPSFfSAO2PmZWfaWhPsy1jyqCCJbPyo6markRPvebWKVrRjgu7dqYET1gxKz+aR++oMqvv6cUD9CVE96ULWbMOjQoV6Re9QqcmU5qhCT2E8MB0RqdqFboXGnoaIdme9LyjS6d7VMhvxvO+APembFj6chI5AAAAAElFTkSuQmCC"

const imgStyle = {
    height: '100%',
    width: '100%',
    display: 'block',
    margin: '0 auto'
}

const abt = (
    <div className="card card-main border-primary text-black mb-3" id="about">
        <div className="card-header">About</div>
        <img style={imgStyle} src="src/profilePhoto.jpg" alt="Profile image" />
        <div className="card-body">
            <p className="card-text">
                Hi! I'm Amey, and I am a 18 year old Computer Science student at the College of Engineering and the Honors College at The University of Texas at Arlington. Somewhere down the future, I'm hoping to work on <span className="bg-info">Artificial Intelligence</span> or/and <span className="bg-info">Quantum Computing</span>.
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
                            I did my high school at Loknete Vyankatrao Hiray College, Nashik, MH, India and currently study at <span className="bg-success">UTA</span>, TX under the Honors College and the College of Engineering. My Major is <span className="bg-success">Computer Science</span>, and I'm considering doing a minor in Physics.
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
                            <span className="bg-info">Python</span> <span className="bg-danger">Java</span> <span className="bg-danger">C</span> <span className="bg-primary" style={styleWhite}>HTML</span> <span className="bg-primary" style={styleWhite}>CSS</span> <span className="bg-primary" style={styleWhite}>BootStrap</span> <span className="bg-warning">Javascript</span> <span style={styleMat}>MATLAB</span>.
                            <br />
                            <br /> I speak Marathi, English, Hindi, and I'm learning Japanese, and Spanish. I also play
                            Tabla. I am also good at sketching.
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
                            I'm a member of <span className="bg-success">Leadership Honors Program</span> and <span style={stylePy}>Py</span><span style={styleMavs}>Mavs</span> at UTA and also a part of <span className="bg-danger">UTA ESports</span>. I participate in long distance cycling events because I love to cycle.
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
                            I like learning natural languages (and have an aim of being fluent in 7 before I'm 25). I love <span className="bg-success">cycling</span> and <span className="bg-primary" style={styleWhite}>sketching</span>(I even have a blog. Check <a href="https://ameyrk.tumblr.com/" target="_blank"><u>it</u></a> out).
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
                        <h4>Github</h4><br /><br />
                        <p className="card-text">
                            <a href="https://github.com/ameyrk99/no-mans-sky-rice-i3wm" target="_blank">
                                <u>No Man's Sky i3WM Rice</u>
                            </a> - My rice for i3wm, themed using colors of the No Man's Sky game
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

const ren = [abt, edu, skills, act, hob, git]
const targets = ["about", "edu", "skills", "act", "hob", "git"]

for (var i = 0; i < 6; i++) {
    ReactDOM.render(
        ren[i],
        document.getElementById(targets[i])
    )
}