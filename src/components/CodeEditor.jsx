import React from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import {Controlled as ControlledEditor} from "react-codemirror2-react-17"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CodeEditor = ({language,displayName,value,onChange}) => {
  
  const [open, setOpen] = useState(true);
  
  const handleChange = (editor,data,value) =>{
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <button className='buttonCollapsed'
           onClick={()=>setOpen(prev=>!prev)}><FontAwesomeIcon icon="fa-regular fa-square-caret-up" /></button>
        </div>
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapper:true,
          lint:true,
          mode:language,
          theme:"material",
          lineNumbers:true
        }}
        />
    </div>
  )
}

export default CodeEditor