import "./SpamTrue.css"
import warn from "../images/red-warn.png"
import { useEffect, useState } from "react"
export default function SpamTrue({count}){
    const [print,setPrint]=useState("")
    useEffect(()=>{
        if(count>0 && count<5){
            
            console.log('hi')
            setPrint("Low Risk")
        }
        else if(count>5 && count<10){
            setPrint("Medium Risk")
        }
        else{
            setPrint("High Risk")
        }
    },[])
        
    return(
        <>
            <div className="container block">
                <p>CLASSIFICATION:</p>
                <div className="classification">
                    <img src={warn} alt=""/>
                    <h1>SPAM</h1>
                </div>
                <p>RISK SCORE:</p>
                <div className="score">
                    <h1>{print}</h1>
                    <h4>Risk score is a predicted by our ML model based on the number of hits</h4>
                </div>
            </div>
        </>
    )
}