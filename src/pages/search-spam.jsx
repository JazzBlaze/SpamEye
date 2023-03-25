import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import SpamTrue from '../components/SpamTrue'
import SpamFalse from '../components/SpamFalse'
import supabase from "./Supabaseclient"
import Fetch from './Fetch';
import { useQuery } from 'react-query'


function Search(){

    const [selects, setSelects] = useState('Phone Number');
    const [value, setvalue] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [spam,setSpam]=useState(null);
    const [count,setcount]=useState(0);
    const [test,setTest]=useState('hidden');



    const [fetchPosts, setFetchPosts] = useState(true);
    const[urldata,setUrldata]=useState(null);
    var myUrl = 
       "https://ipqualityscore.com/IPQS-KEY:bhlUVtosttEbq0wzuvFQ3Ew32gyvf9zH/" + encodeURIComponent(value);
    console.log(myUrl)
    const { data,status } = useQuery(
        value,
        () =>
            fetch(myUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUrldata(data);
            })
            .catch((err) => {
                console.log(err.message);
            }),
        {
        enabled: fetchPosts
        }
    );


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
                if(count_test==0){
                    setTest('visible')
                }
               }
               setcount(count_test);
               var count1=count_test;
               
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
        if (selects == "URL"){
            setFetchPosts(true)
            console.log(fetchPosts)
            

        }
    }
    



    return (
        <>

            <div className="search-spam">
                <div className="container slider-one-active">
                    <div className="slider-ctr">
                        <div className="slider">
                            <form class="slider-form slider-one">
                                <h2>Verify if its a spam or not</h2>
                                <label className="input">
                                    <p>{selects}</p>
                
                                    <select value={selects} className="dropd" onChange={e => setSelects(e.target.value)}>
                                        <option >Phone Number</option>
                                        <option value="URL">URL</option>
                                        <option value="SMS">SMS</option>
                                        <option value="UPI ID">UPI ID</option>
                                    </select>
                                    <input value={value} onChange={(e) => setvalue(e.target.value)} className="inputarea" type="text"></input>
                                </label>
                                <button class="first next" type="button" onClick={handleSubmit}>Submit</button>
                            </form>
                
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
            {urldata.map((user) => (
                <p>{user.unsafe}</p>
            ))}
            </div> */}
            {spam && <SpamTrue count={count}/>}
                        <div className={test}>{!spam && <SpamFalse/>}</div>


            

        </>


    );
}

export default Search;