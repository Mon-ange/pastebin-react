import React from 'react'
import { Card, Button, CardActions, CardContent, Typography } from '@mui/material'


export default class CodeBoard extends React.Component{
    render(){
        return (
            <Card sx={{width: "80%"}}>
                <CardContent>
                    <Typography variant="h4" component="div">{this.props.token}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{this.props.author} / {this.props.language}/ 2023/02/17</Typography>
                    <Typography variant="body2">{this.props.code}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">copy</Button>
                </CardActions>
            </Card>
        )
    }
}