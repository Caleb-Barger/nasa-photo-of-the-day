import React from 'react'

export default function Photo(props){
    const {url, title} = props.data
    return (
        <div className="photo">
            <img src={url} alt={`a photo of ${title}`}/>
        </div>
    )
}