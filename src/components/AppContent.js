import React from "react";
import CodeBoard from "./CodeBoard";
import Grid from '@mui/material/Grid'
import axios from "axios";
import { useState } from "react";
export default function AppContent() {
    let [token_res, updateToken] = useState("")
    let [author,updateAuthor] =useState("");
    let [code,updateCode]=useState("");
    let [language, updateLanguage]=useState("");
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    axios.get('/api/paste/' + token)
        .then(function (response) {
            // handle success
            updateToken(response.data.token);
            updateAuthor(response.data.poster);
            updateCode(response.data.content);
            updateLanguage(response.data.language)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    return (
        <Grid container spacing={2} marginTop="20px" marginLeft="10px">
            <Grid xs={10}>
                <CodeBoard token={token_res} author={author} code={code} language={language} />
            </Grid>
            <Grid xs={2}>
                <div>on work</div>
            </Grid>
        </Grid>
    )
}