import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import supabase from "./Supabaseclient"
function Search(){
    const [selects, setSelects] = useState();
    const [value, setvalue] = useState();
    const [fetchError, setFetchError] = useState(null);


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
               let count;
                console.log(data)
               for(let i=0;i<data.length;i++){
                if (data[i].value==value){
                    count++;
                }
               }
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
            let count;
            for(let i=0;i<data.length;i++){
                if (data[i].value==value){
                    count++;
                }
               }
            setFetchError(null)

        }}
    }



    return (

        <div class="container slider-one-active">


            <div class="slider-ctr">
                <div class="slider">
                    <form class="slider-form slider-one">
                        <h2>Verify if its a spam or not</h2>
                        <label class="input">
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
                    
                </div>
            </div>
        </div>

    );
}

export default Search;