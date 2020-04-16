import React from 'react'
import { Card, Typography, CardContent, CardMedia, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root : {
        maxWidth: 600,
    },
})

export default function ImgMediaCard(props){
    const classes = useStyles()

    const {url, title, explanation, copyright, date} = props.data

    return (
        <Card className={classes.root}>
            <CardMedia 
                image={url}
                alt={title}
                component='img'
                height="500"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography gutterBottom varient="body1" color="textPrimary" component="p">
                    {explanation}
                </Typography>
                <Typography varient="body2" color="textSecondary" component="p">
                    {`Copyright: ${copyright} ${date}`}
                </Typography>

            </CardContent>

        </Card>

    )
}