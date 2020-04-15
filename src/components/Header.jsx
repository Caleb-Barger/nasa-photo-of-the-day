import React from 'react'

export default function Header(props){
    const {title} = props.data
    console.log(props.data)
    return (
        <div className="header">
            <h1>Nasa's Photo of the Day</h1>
            <h1>"{title}"</h1>
        </div>
    )
}