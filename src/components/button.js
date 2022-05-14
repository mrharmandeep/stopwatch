import React from 'react'

function Button({ start, status,stop,reset, resume}) {
  return (
    <div className='btn'>
      {status === 0? 
        <button onClick={start}>Start</button> : ""
      }

      {status === 1? 
        <div>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div> : ""
      }

     {status === 2? 
        <div>
          <button onClick={resume}>Resume</button>
          <button onClick={reset}>Reset</button>
        </div> : ""
      }
     

    </div>
  )
}

export default Button