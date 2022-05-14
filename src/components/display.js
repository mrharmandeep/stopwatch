import React from 'react'

function Display({ time }) {
    const { ms, s, m, h } = time;
    return (
        <div className='circle'>
            <span>{(h >= 10) ? h : "0" + h}</span>:
            <span>{(m >= 10) ? m : "0" + m}</span>:
            <span>{(s >= 10) ? s : "0" + s}</span>:
            <span>{(ms >= 10) ? ms : "0" + ms}</span>
        </div>
    )
}

export default Display