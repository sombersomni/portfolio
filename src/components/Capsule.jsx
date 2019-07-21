import React, {useState} from 'react';

const skillStyle = {
    padding: '4px 8px',
    background: 'rgba(0,0,0,0)',
    transition: 'background 1s',
    border: 'none',
    borderRadius: '50px',
    margin: '0px 10px',
    cursor: 'pointer'
}

export default function Capsule({label}) {
    let [activeStyle, setActiveStyle] = useState(skillStyle);
    return (
        <div 
            onMouseEnter={() => { setActiveStyle({...skillStyle, background: '#AAA'})}}
            onMouseLeave={() => { setActiveStyle(skillStyle) }}
            style={activeStyle}>
            {label}
        </div>
    )
}