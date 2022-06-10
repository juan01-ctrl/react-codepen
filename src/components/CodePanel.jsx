import React from 'react'
import { useState,useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import CodeEditor from './CodeEditor'
import CodeResult from './CodeResult';

const CodePanel = () => {
const [html, setHtml] = useLocalStorage("html",'');
const [css, setCss] = useLocalStorage("css",'');
const [js, setJs] = useLocalStorage("js",'');
const [srcDoc, setSrcDoc] = useState("");


useEffect(() => {
  const timeout = setTimeout(() => {
    setSrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
  `)
  }, 250);

  return (()=> clearTimeout(timeout))
}, [html,css,js]);



  return (<div className='container-all'>
    <div className='code-panel'>
        <CodeEditor
         language="xml"
          displayName="HTML"
        value={html} onChange={setHtml}
        />
        <CodeEditor
              language="css"
              displayName="CSS"
            value={css} onChange={setCss}/>
        <CodeEditor
              language="javascript"
              displayName="JS"
            value={js} onChange={setJs}/>
    </div>
    <CodeResult srcDoc={srcDoc}/>
    </div>
  )
}

export default CodePanel