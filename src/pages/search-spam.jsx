import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Spam_true from '../components/Spam_true'
import Spam_false from '../components/Spam_false'
import supabase from "./Supabaseclient"
import Fetch from './Fetch';
function Search(){
    const [selects, setSelects] = useState('');
    const [value, setvalue] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [spam,setSpam]=useState(null);
    const [count,setcount]=useState(0)
    const[notsms,setnotSms]=useState(null)
    const[sms,setSms]=useState(null)
    var count_test=0
    const handleSubmit = async () => {
        if (selects == "Phone Number") {
            const { data, error } = await supabase
                .from('phoneno')
                .select()

            if (error) {
                setFetchError('hey')
                setvalue(null)
                console.log(error)
            }
            if (data) {
           
                console.log(data)
               for(let i=0;i<data.length;i++){
                if (data[i].value==value){
                    console.log(value)
                    console.log("found")
                    setSpam(true)
                    count_test+=1
                    console.log(count_test)
                }
               }
               setcount(count_test);
                setFetchError(null)

            }
        }
        if (selects == "UPI ID") { 
        const { data, error } = await supabase
            .from('upiid')
            .select()

        if (error) {
            setFetchError('hey')
            setvalue(null)
            console.log(error)
        }
        if (data) {
          
            for(let i=0;i<data.length;i++){
                if (data[i].value==value){
                  console.log("found");
                     setSpam(true)
                    count_test+=1
                    console.log(count_test)
                }
               }
               setcount(count_test);
                setFetchError(null)
                
               
            setFetchError(null)

        }}
        if (selects == "SMS") {
            async function query(data) {
                const response = await fetch(
                    "https://api-inference.huggingface.co/models/mrm8488/bert-tiny-finetuned-sms-spam-detection",
                    {
                        headers: { Authorization: "Bearer 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" },
                        method: "POST",
                        body: JSON.stringify(data),
                    }
                );
                const result = await response.json();
                return result;
            }

            query({ "inputs": value }).then((response) => {
                response.map((data)=>{
                   setnotSms(data[0].score*100)
                   setSms(data[1].score*100)
                })
            });
        }
    }



    return (

        <div className="container slider-one-active">


            <div className="slider-ctr">
                <div className="slider">
                    <form class="slider-form slider-one">
                        <h2>Verify if its a spam or not</h2>
                        <label className="input">
                            <p>{selects}</p>
                            
                            <select value={selects} className="dropd" onChange={e => setSelects(e.target.value)}>
                                <option >Phone Number</option>
                                <option value="Email">Email</option>
                                <option value="SMS">SMS</option>
                                <option value="UPI ID">UPI ID</option>
                            </select>
                            <input value={value} onChange={(e) => setvalue(e.target.value)} className="inputarea" type="text"></input>
                        </label>

                        <button class="first next" type="button" onClick={handleSubmit}>Submit</button>
                    </form>
                    {/* {spam && <Spam_true count={count}/>|| !spam && <Spam_false/>} */}
                    <p>{count}</p>
                    {/* {sms.map((user)=>(
                        <p>{user[0].label}</p>
                    ))} */}
                    <p className="notsms">{notsms}</p>
                    <p className="sms">{sms}</p>
                </div>
            </div>
        </div>

    );
}

export default Search;