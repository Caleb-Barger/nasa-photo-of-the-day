import React from 'react'
import styled from 'styled-components'

const HeaderCard = styled.div`
    border: 1px solid black;
    box-shadow: 3px 3px 5px gainsboro; 
    background-color: cornsilk;
    width: 30%;
    margin: 20px 0;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`


export default function Header(props){
    const {title} = props.data
    console.log(props.data)
    return (
        <HeaderCard>
            <h1>Nasa's Photo of the Day</h1>
            <h1>"{title}"</h1>
        </HeaderCard>
    )
}