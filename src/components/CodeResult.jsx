import React from 'react'

const CodeResult = ({srcDoc}) => {
  return (
    <div className='code-output'>
        <iframe 
        srcDoc={srcDoc}
        title='output'
        sandbox='allow-scripts'
        frameBorder="0"
        width="100%"
        height="100%"

        />
    </div>
  )
}

export default CodeResult