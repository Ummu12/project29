import React,{useState,useEffect} from "react";
import {Card,Grid,Button} from "@mui/material"
import axios from "axios";
import { Depts } from "./Depts";

export const Home=()=>{
   
    const [data,setData]=useState("")
   
const getData= async()=>{
     const result=await  axios.get("http://localhost:3030/")
      setData(result.data)
    }

    useEffect(()=>{
        getData()
    })


    return(
    <Grid container spacing={2}> 
  
           <Grid item xs={12}>
               {data}
           </Grid>
           
           <Grid item xs={6}>
            <Depts />
           </Grid>

           <Grid item xs={6}> 
            Categories
           </Grid>
    </Grid>
    )
}