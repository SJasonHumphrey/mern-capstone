import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

export default function Resources() {
  return (
    <>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <h4 className="d-flex justify-content-center mono-font">Useful Resources</h4>   
                    <Accordion>
                        <Accordion.Item defaultActiveKey eventKey="0">
                            <Accordion.Header>Javascript</Accordion.Header>
                            <Accordion.Body >
                                <ul>
                                    <li><a href=" https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">Free Code Camp</a></li> 
                                    <li><a href="https://javascript.info/">Javascript Info</a></li> 
                                    <li><a href="https://www.reddit.com/r/learnjavascript/">r/learnjavascript on Reddit</a></li> 
                                   
                                    <li><a href="https://zerotomastery.io/cheatsheets/javascript-cheatsheet-the-advanced-concepts/#call-stack-memory-heap">JavaScript Cheat Sheet: The Advanced Concepts</a></li> 
                                    <li><a href="https://levelup.gitconnected.com/one-reduce-to-rule-them-all-504e1b790a83">One reduce to rule them all — How to use reduce in JavaScript</a></li> 
                                    <li><a href="https://www.freecodecamp.org/news/before-you-bury-yourself-in-packages-learn-the-node-js-runtime-itself-f9031fbd8b69/">Before you bury yourself in packages, learn the Node.js runtime itself</a></li> 
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>React.js</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="https://reactjs.org/docs/getting-started.html">React.js Docs</a></li> 
                                    <li><a href="https://egghead.io/courses/the-beginner-s-guide-to-react">The Beginner's Guide to React</a></li> 
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>HTML & CSS</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li ><a href="https://sharkcoder.com/layout/flexbox">CSS Flexbox: A Complete Guide</a></li> 
                                    <li><a href="https://bootstrap-cheatsheet.themeselection.com">Bootstrap 5 Cheat Sheet</a></li> 
                                    <li><a href="https://flexboxfroggy.com/">Flexbox Froggy</a></li> 
                                    <li><a href="https://css-tricks.com/">CSS Tricks</a></li> 
                                    <li><a href="https://specifishity.com/">Specifishity</a></li> 
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Miscellaneous</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="https://zerotocode.today/">Zero To Code: How To Launch a Career in Software</a></li> 
                                    <li><a href="https://readme.so">Easiest Way to Create A README</a></li> 
                                    <li><a href="https://www.markdownguide.org/cheat-sheet/">Markdown Cheat Sheet</a></li> 
                                    <li><a href="https://code.visualstudio.com/docs/getstarted/tips-and-tricks#vscode">VS Code Tips and Tricks</a></li> 
                                    <li><a href="https://education.github.com/git-cheat-sheet-education.pdf">Git Cheat Sheet</a></li> 
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                            

                </div>
            </div>
        </div>
        
    </>
  )
}

// export default Resources

