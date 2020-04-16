import React from 'react'
import styled from 'styled-components'

const PhotoContainer = styled.div`
    width: 60%;
    height: auto;
    img {
        border: 1px solid red;
        align-self: center;
        width: 50%;
        height: auto;
    }

`

export default function Photo(props){
    const {url, title} = props.data
    return (
        <PhotoContainer>
            <img src={url} alt={`a photo of ${title}`}/>
        </PhotoContainer>
    )
}