import React from 'react'

export default function Description(props){
    const {explanation, copyright, date} = props.data
    return (
        <div className="description">
            <h3>{explanation}</h3>
            <h4>Copyright: {copyright}</h4>
            <h4>Date: {date}</h4>
        </div>
    )
}