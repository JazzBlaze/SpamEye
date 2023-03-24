import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Spam_true from '../components/Spam_true'
import Spam_false from '../components/Spam_false'
import supabase from "./Supabaseclient"
function Search(){
    const [selects, setSelects] = useState('');
    const [value, setvalue] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [spam,setSpam]=useState(null);
    const [count,setcount]=useState(0)
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
                </div>
            </div>
        </div>

    );
}

export default Search;