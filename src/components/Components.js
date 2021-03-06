import React, { useState } from 'react'
import './styles.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'  //html 
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
// import CodeMirror from 'react-codemirror2'
import { Controlled as ControlledMode } from 'react-codemirror2'  //for controlling editor
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
// import 



export default function Components(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }
    const [open, setOpen] = useState(true)
  

    return (




        <div className={`   editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
 
                <button className="expand-collapse-btn" type="button" onClick={() => setOpen(prevOpen => !prevOpen)}>

                    {/* <i class="bi bi-arrows-angle-expand" />  */}
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                    {/* above line is for opening if its open so that we can change icon */}
                </button>
            </div>
            <ControlledMode 

                value={value}
                onBeforeChange={handleChange}
                options={{
                    className: "code-mirror-wrapper",
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',                    
                    // caretColor: "#0e9",
                    // borderLeftColor: "#0e9",
                    // display: "inline-block",
                    lineNumbers: true,
                    smartIndent: true,
                    indentWithTabs: true,
                    styleActiveLine: true,
                    matchBrackets: true,


                }}
            />

        </div>
    )
}