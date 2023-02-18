import React from "react";
import { Card, Button, CardActions, CardContent, Typography } from '@mui/material'

export default function PasteListItem(props){

    return (
        <Card sx={{margin:"5px"}}>
            <CardContent>
                <Typography variant="h5" component="div">{props.token}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> author: {props.poster} / Language: {props.language}/ Paste Time: {props.paste_time}
                / Expired Time: {props.expire_time} </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={"/paste?token="+ props.token}  >Learn More</Button>
            </CardActions>
        </Card>
    )
}