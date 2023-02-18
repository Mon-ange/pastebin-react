import React from 'react'
import { Card, Button, CardActions, CardContent, Typography } from '@mui/material'
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco ,vs2015,github, ocean} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark ,vs} from 'react-syntax-highlighter/dist/esm/styles/prism';


export default class CodeBoard extends React.Component{

    state = {}

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        axios.get('/api/paste/' + this.props.token)
        .then((response) => {
            this.setState(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }

    render(){
        return (
            <Card sx={{ width: "80%"}}>
                <CardContent >
                    <Typography variant="h4" component="div">{this.state.token}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{this.state.poster} / {this.state.language}/ {this.state.paste_time}</Typography>
                    <SyntaxHighlighter style={docco} language="python" showLineNumbers lineNumberStyle={{color: '#ddd', fontSize: 20}}>{this.state.content}</SyntaxHighlighter>
                </CardContent>
                <CardActions>
                    <Button size="small"  variant="contained" color='inherit'>copy</Button>
                </CardActions>
            </Card>
        )
    }
}