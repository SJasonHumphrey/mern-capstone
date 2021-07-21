import React from "react";
import Editor from "./pages/codepen/Editor";
import TopNavigation from './pages/codepen/TopNavigation'
import Footer from "./pages/codepen/Footer";
import uselocalStorage from './pages/codepen/hooks/useLocalStorage'



function CodePen() {
    const [html, setHtml] = uselocalStorage('html','');
    const [css, setcss] = uselocalStorage('css','');
    const [js, setjs] = uselocalStorage('js','');


    const srcDoc = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
        `;

    return (
        <div className="row">
        <div className="container-fluid">
            <TopNavigation />
            <div className="main">
                <div className="pane top-pane">
                    <Editor
                        language="xml"
                        displayName="HTML"
                        value={html}
                        className="html"
                        onChange={setHtml}
                    />
                    <Editor
                        language="css"
                        displayName="CSS"
                        value={css}
                        onChange={setcss}
                    />

                    <Editor
                        language="javascript"
                        displayName="JavaScript"
                        value={js}
                        onChange={setjs}
                    />
                </div>

                <div className="output">
                    <iframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            <Footer />
        </div>
    </div>

    );
}

export default CodePen;