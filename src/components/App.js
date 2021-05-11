import './../App.css';
import './styles.css'
import React, { useState } from 'react'
// import Iframe from 'react-iframe'
import Components from './Components'
import { useEffect } from 'react';
import History from './History'

function App() {

  const [displayContent, setDisplayContent] = useState('')
  const [htmlContent, setHtmlContent] = History('html', '')
  const [cssContent, setCssContent] = History('css', '')
  const [jsContent, setJsContent] = History('js', '')


  useEffect(() => {
    setDisplayContent(
      `
      <html>
        <body>
          ${htmlContent}
        </body>
        <style>
          ${cssContent}
        </style>
        <script>
          ${jsContent}
        </script>
      </html>
    `
    )

  }, [htmlContent, cssContent, jsContent])

  return (
    <>
      <div className="pane top-pane">
        {/* <div className="first-class"> */}
          <Components displayName="HTML" language="xml" value={htmlContent} onChange={setHtmlContent} />
          <Components displayName="CSS" language="css" value={cssContent} onChange={setCssContent} />
          <Components displayName="Javascript" language="javascript" value={jsContent} onChange={setJsContent} />
        {/* </div> */}
      </div>
      <div className="pane bottom-pane">
        <iframe srcDoc={displayContent} title="output" sandbox="allow-scripts" height="100%" width="100%" frameBorder="0">
        </iframe>
      </div>
    </>
  )
}


export default App;


//sandbox - 
//add optional sandbox values ("allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation")