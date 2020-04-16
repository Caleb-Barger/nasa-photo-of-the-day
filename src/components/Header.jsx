import React from 'react'
import { CardHeader } from '@material-ui/core' 


export default function Header(props){
    const {title} = props.data
    console.log(props.data)
    return (
        // <div>
        //     <h1>Nasa's Photo of the Day</h1>
        //     <h1>"{title}"</h1>
        // </div>
        <CardHeader title="Nasa's Photo of the Day" subheader={title}/>
    )
}