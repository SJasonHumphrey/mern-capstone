import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
            <p>Made with <FontAwesomeIcon color="#b7bbc8" icon={faReact} /></p>
        </div>
    )
}