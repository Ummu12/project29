import React, {useState, useEffect} from "react";
import axios from "axios";

export const Depts=()=>{
    const [data, setData]=useState([]);
    const getData= async()=>{
        const result =await axios.get("http://localhost:3030/dept")
        setData(result.data)
    }
    useEffect(()=>{
        getData();
    }, [])
    return(
        <ol>
            {
                data.map((item)=>
                    <li>{item}</li>
                )
            }
        </ol>
    )
}