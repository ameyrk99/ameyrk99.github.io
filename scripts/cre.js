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
                Hi! I'm Amey, and I am a 18 year old Computer Science student at the College of Engineering and the Honors College at The University of Texas at Arlington. Somewhere down the future, I'm hoping to work on <span className="bg-info">Artificial Intelligence</span> or/and <span className="bg-info">Quantum Computing</span>.
            </p>
        </div>
    </div>
)

const edu = (
    <div>
        <div className="card">
            <div className="card-body">
                <div><img style={imgStyle} src="src/uta.jpg" alt="UTA photo" /></div><br/>
                <div>
                    <h4>Education</h4>
                    <p className="card-text">
                            I did my high school at Loknete Vyankatrao Hiray College, Nashik, MH, India and currently study at <span className="bg-success">UTA</span>, TX under the Honors College and the College of Engineering. My Major is <span className="bg-success">Computer Science</span>, and I'm considering doing a minor in Physics.
                    </p>
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
            <div><img style={imgStyle} src="src/sketch.jpg" alt="sketch" /></div><br/>
            <div>
                <h4>Skills</h4>
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
            <div><img style={imgStyle} src="src/esports.jpg" alt="LAN party photo" /></div><br/>
                    <div>
                        <h4>Activites</h4>
                        <p className="card-text">
                            I'm a member of <span className="bg-success">Leadership Honors Program</span> and <span style={stylePy}>Py</span><span style={styleMavs}>Mavs</span> at UTA and also a part of <span className="bg-danger">UTA ESports</span>. I participate in long distance cycling events because I love to cycle.
                        </p>
                    </div>
            </div>
        </div>
    </div>
)

const hob = (
    <div>
        <div className="card">
            <div className="card-body">
            <div><img style={imgStyle} src="src/cycling.jpg" alt="cycling photo" /></div><br/>
                    <div>
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
)

const git = (
    <div>
        <div className="card">
            <div className="card-body">
            <div><img style={imgStyle} src="src/nmsi3wm.png" alt="nms i3wm rice" /></div><br/>
                    <div>
                        <h4>Github</h4>
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
)

const styleGitImg = {
    height: '25px',
    width: '25px'
}
const con = (
    <div>
        <div className="card">
            <div className="card-body">
                <div>
                    <div><img style={imgStyle} src="src/connect.jpg" alt="LAN party photo" /></div><br/>
                    <div>
                        <h4>Connect with me:</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://github.com/ameyrk99/" target="_blank">
                                    <img style={styleGitImg} id="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAZzSURBVGhD7Zl1qG1FFIevHdiBhfVQbOz4w0RRVCxsMDGxCwNb7EJsHwYqttiKBTYG6h92YHd35/dtz8J5+8ze55x79748Hu8HH/fuvefMzJ5Zs2bN2kMTNQFrPtgJxsLD8DF8D//An/A1vAa3wcmwLkwL44VmgQPhObDDg/IzXAfrwyQw6poNzoAfIDr1BdwIe8OaMDdMDaEZYVHYFE6Ex8GZit+/AFvBqLyQjewOX4GN/w2aykYwBQwqX/YgeBvihTTLxaA1OQt3QTR4BywFTWhy2BE+Auv+BRywxrU4vA828gk4A21oOjgPnGnbugx8yUa0IoQpOe1zQttyHX0LtnknTAkjkqbzOVjh9TDiCgfQMuDs2/bNMBkMS66JMKdrIa1oemhsyhNpWmm9C0MM5FneGFR6p7vBCh6CdCZWh9/hL3gPLoEVoEq63dQNp3JD3BcegZ/A9u6FdNBWBhe/62ZjbwwiPYaVOrXlNfE8+CzFRq6GpWEf0Ls5m79ClPkGXoLzYQNwHbj7p/UEPku1J3jf2ZnVG/1odvgS/GHZO2lS3ncjWwLWAr1MujGWcaOM0c7xDDhwi8CFnXvWWVZYyMXFVR9yx/YH7hNlGU/57LPi6n/NBQ/Ap3ApbALzQLpJav9LgiGN5vojbA/pTr4zWP81xdW4GgOamIPo2qmVsZOjq6nkNrsZwIZ0jWXZ6UF292k6f1OFSbvucjoXfO7+UqsDwIK3F1d5GcVaxpduWqeDdR9SXHVrXvgDnJmZvFGlWMh1O7cmZJn1iqtmZSBp3XrGKrlBWqYyhJkfLOBCrzORW8FyRxRXzcn9w3Vj3ct5o0LbgmXuKa4y8lBkgRuKq7xWAtePL+uG2bSOAfug+66S7tc9zENbdsBdYFbieaJKV4FlDi2umpcOQHdtRxf0RoU8u9iP7Mw9Cj5co7jqlm4y9hfPEW3Jo7Jt1IXxhkyW0cy69CH4UP+fk/d9bljSpowMbOe04iqvE8AyRxdXJUWiIOfflTu5z53WNrUX2E5udw/tB5Y5s7gqyQfapoGcpuNOmuK5xDLGX23qWLCdU2FmSPuyABiERgRgSNMlNxof6gI/gLfA0X8WXu1cGx6I8Vhb8uxhP74D27TtNzr/Sxzy5ALoktGpDw0MUxlSu4s7Ik+BZfaANmTbsZcYkBrDGaOVZbxmmVOKq5J8cx8axxiimEwz7vLs4Sg4Gi+DZXQM5RduQhGwar7OgmG+M6PJG5A+DQaUT4Ll9ocu2XkfXgkeYEzJlBe+Lvg+sJzRcZNHX3Namq1nGPNfZWnOq8B2EOkjzzVdOgl86KjUyQUXZ2nD8YVgJHIwDgdfwjr1SHXS1GMZeKzokrlYH3rQSeWseNxM87QegnQIljftaXi9PAwi1517Rpi0oc/B0Eu2Y3lNPSs7aqccmXTnfgL8oaOwizc6MtbyeKv9+lzegZvgSLDsFrAOGE1rEnbcE562/hvE716HtaEfhXuuPSmaULbQUcXVf3oRokHRBFO5UXoOdzGm5Xqhu3e9bQP9ZmQmhXfB31eFUoXMilvIkY1MhuG905h2ImcCOoJlIfy8M/sKuA+JdcbvjW5zbrWXNgR/b13pEblLPozIMg3anPboRHARaDKurS1hN3gQfKZXyR2VN4dI7Thog8jZcECs3zCmp+yUhTUVz+ih8N263Uhn5tD2zRVXKTYzU0O1o1rSDuDvdDJV8eA4snJzvP4ojWW2huiAZwUX3S3gNxEJl9wrMRBnDsvWHWlTzQFRv2uqb7mANQF/6Eal9PfavPecHcMUZy+ITwIm6XrpbLBs2XHk5FqNPIHOYWDZUX9siOAiVu72b4L3c+i+03RnlcxnWd4Z7aXIrBiuODPD0hVgJaYqY/G639gR/XiYVXwAMhbrR5qU5c351uk4sJwDVOtue8nRjRjMl1kVcooMZL+HLuux/GPFVbdsNwJI3fjAyeucpgJ3ays1EnZ3LqvJFzFLEmvCdboZNCZHyGOl/t8G7oc0Qm3iRfSWnvwiQtBLrQatyHR/uE73C8/VJpRH8iIOkvXGoU38RtL6Jz6jVnNgEXYbNNqh4byIo59+mtaFu1+NqpyJyyH9mBPxldnK48FdfFfQlR8G54D2H5/TAmMnE4NVX7ZGRWY1jMv8EFP3waeMgagzqys2jhqvZDhuGtMMoHlcXaidNdthesfPFgaLfh6YqAlYQ0P/AuNlLXn0HUyUAAAAAElFTkSuQmCC"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/Ameyrkhairnar" target="_blank">
                                    <img id="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADQSURBVEhL7ZUxCsJAEEW3tFEQtLXyGJY2nkixs9MbWHgAFXs9gYVH0MoLiIJgqe+HLIIkYU0m3T54xZA/+4uQjYtY0MJ2CbUXxA7fFdxgIV1UcI/jEmpP+zonlx4qNEmm/9Ge9nVOLqElDZzjBW94RGFaskDlvFcUpiVnVO6EIxygMC25o3LTZPpiUuK/hwcqN0vnJgqTEj3L8oCi1pIlCpOSYeoTlVulcx+FSYnHv/jfXCzJpFJJ6C38wqycv4U7WMgWFSzrGoOo/c8YycG5D+TQik5uUbtdAAAAAElFTkSuQmCC"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://ameyrk.tumblr.com/" target="_blank">
                                    <img id="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEuSURBVEhL7dS/SwJhHMfxp6Ry0KLBLQwaXEIaIkIIGsSlxnBocg5HBxvdHMQpGtr8JyJcFAKDmhobhATHtqipH/b+nM+BhC3PPS7hB17cPcfx/d499zxn5plVYli3lnVhFrnByHrGIrxGb/GKNrpQozV4TQkqnEfdnnttcoR3PGABYZND7GIbzlHBFr7RxxaUsMmkEzhlAypwjVVdsMmiaJ1B9+jolDRU4B5XUHFF01S1wrdybqK9oO+gVaVCx1B+T9cXCoiUA0xrsgltzAQi568mXpfw/2mSg4qeBiNjytBYq+scd3jCCpyjJ/7ERTAa7xkVViP5sEct+Ujp4AWpYDT+A+8ggya8NNmD/l9DNFDDJR6hBgPEETn7uEU4PW/ooYIkvGYJXjbgPFNizA9DYlBD5YSwwQAAAABJRU5ErkJggg=="/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/ameykhairnar99/" target="_blank">
                                    <img id="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF5SURBVEhL7ZVJLkVBFIavZsQECzAgBmKIWApL0E9ZwRsiBpodIGaEfWii2QEbYED4vnqv4ua5PcP3J19uTlWdOnVONTfp6b81DKMF2N9I/bABz/BVgSdYBf0qaQDOQecb2IWtAuy/B8efQh+Uah102IFBGyrIcQbTb8WGMlmiWzCjbo3BdOcbtQgtMJAZPUKh3ERX46rSmoIr+AT7P+ASJmEBlkDFbAoPwzg4aDtYbTnRK7zBIXgg/L6D7fZH6ae/8+QqK8g1OOFssH40B7abUVSjIN4DS3QQrN86AkvnONUoyAxoW6IsbYL9Hgb1p0zcgyzFTEaC1TCIsubW3j1Iax5svwhWW42DxNPlhK7cEh137Beofbry7skEmJGlsd+vGdieVrwnQ8EqkI/dHWQ9Ke6RmxxPU1rxxj8Eq0RrELOp83btg37LNpTJ5/oMdHBle5D1+kbsj6/wCVR6hZWB/D9YOp3LsESOrxygW26ie5BH6Sb3VENJ8g0oIH3xxp5bVQAAAABJRU5ErkJggg=="/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/amey-khairnar-726453158/" target="_blank">
                                    <img id="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADxSURBVEhL7ZU7CsJAFEUHQfyAiFgIIi7Axg1Y6iasLARbC0Ht3IXrUStrO7G1FWsV9J4YwcKYyWTKHDjwXpg3N0MgYzJ8UJQ1BwvSipm8yaeDzDH/l7Jk4UbOHdxK5tknkrbkjRZBZ0xFNt+lFcwxzz6RfIcQcJZ3OZA2JA7hBI+wH0sbEodAXxKQD7p4nEKmkg/aka2wxoZcybUcyZwEp5CrpB/KXljj8avGpQSvIXvJiU5hf5DgNaQrYSLpL0HnOaQugef0rAOvIVUJWUiw6BOSFKuQtH/hnWS+JP+S9j7hL2EFN9yvmy9O65sxIwJjXo4UmqQkTCxXAAAAAElFTkSuQmCC"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:amey.khairnar@mavs.uta.edu" target="_blank">
                                    <img id="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADxSURBVEhL7ZQxDsIgGIWJg2dwcdPEQQcP4eQFPIau7iYO3sBVF2dv4DV0cHRzUUd9LwVDoVAwsJh+yRcIpbyftlQ0NMzgOqFcz2IP3wnlehYcfMGHdA5bMATO43x1L9dxhlxhD54gq2Hbhz54XZ/P+7mON4SYlVXtyjfnBmtDFGaValeuccUdBocQveIn3Mq+a4ckOkRRV73OBf4UQlj1RLY+BnBTdMuEhMTQlm2JVCFjuINZQxaQ7+0IraCUj2sJK4MYwgshTuHIGHN5gF9i/sL8ejrGmK4qmGeJX2NyuvAMswWQFcwaQHhQh0X3vxDiA3Ilgerg6MSEAAAAAElFTkSuQmCC"/>
                                </a>
                            </li>
                            <li>and, check out my
                                <a href="src/resume.pdf" target="_blank">
                                    <img id="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADuSURBVEhL5dW9DsFQGMbxrhhMJrtNIiImV8BktbsEwWI1uQC3YLaKwWohRrPBIJhM+D91TtJJe3w0Pp7kl5425+1b7al6P50iRk9QfWhquOCInQPNV53qQ2ObVPy96NH8P2yiyXMU/L3o0XzVuV7c+9PCEG2kkDD70jXHyoFjUodTZjhD93mKtBmfzFYnbZjxAVrGPThFTZYYQCfKmW0fEyxgmzRRgnPUZIs19sjANhlDF2CbiOY7R0Uq3qAKe7te/ktWt6Gfe88kj4ei1RV8kMHV1UESdnVl8XmJ5Y3/nT/IWJu89csYyzf+G+N5V/p4fhM87ob7AAAAAElFTkSuQmCC"/>resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const extras = (
    <div className="row">
        <div className="row col-lg-6">
            <div className="root col-lg-12" id="edu">{edu}</div>
            <div className="root col-lg-12" id="act">{act}</div>
            <div className="root col-lg-12" id="git">{git}</div>
        </div>
        <div className="row col-lg-6">
            <div className="root col-lg-12" id="skills">{skills}</div>
            <div className="root col-lg-12" id="hob">{hob}</div>
            <div className="root col-lg-12" id="con">{con}</div>
        </div>
        
        
    </div>
)

const headers = (
    <div className="row">
        <div className="col-sm-2 card-header heads eduh">Education</div>
        <div className="col-sm-2 card-header heads skillsh">Skills</div>
        <div className="col-sm-2 card-header heads acth">Activites</div>
        <div className="col-sm-2 card-header heads hobh">Hobbies</div>
        <div className="col-sm-2 card-header heads gith">Github</div>
        <div className="col-sm-2 card-header heads conh">Connect</div>
    </div>
)

const rest = (
    <div className="row">
        <div className="col-lg-4">
            <div id="about">{abt}</div>
        </div>
        <div className="col-lg-7">
            {/* <div id="headers">{headers}</div><br/> */}
            <div id="extras">{extras}</div>
        </div>
    </div>
)

ReactDOM.render(
    rest,
    document.getElementById("rest")
)

