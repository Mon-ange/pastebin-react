import React, { useState } from "react";
import axios from "axios";
import PasteListItem from "./PasteListItem";
import { Box } from "@mui/system";
export default function PasteList(){

    const [pasteList, setList] = useState([]);
    axios.get('/api/page/1')
    .then((response) => {
        setList(response.data.items);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
    return (
        <Box sx={{ width: "80%", ml: "10vw", mt: "20px" }}>
           {pasteList.map((item) => 
                <PasteListItem token ={item.token} poster={item.poster} language={item.language} expire_time={item.expire_time} paste_time={item.paste_time}></PasteListItem>
            )}
        </Box>
    )
}