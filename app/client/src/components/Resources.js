import React from 'react'
// import { Accordion } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

export default function Resources() {
  return (
    <>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Javascript</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li><a href=" https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">Free Code Camp</a></li> 
                        <li><a href="https://javascript.info/">Javascript Info</a></li> 
                        <li><a href="https://www.reddit.com/r/learnjavascript/">r/learnjavascript on Reddit</a></li> 
                        <li><a href="https://zerotocode.today/">Zero To Code: How To Launch a Career in Software</a></li> 
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
        </Accordion>
    </>
  )
}

// export default Resources

