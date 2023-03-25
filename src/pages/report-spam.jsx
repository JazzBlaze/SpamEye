import React, { useEffect, useState } from "react";
import { useRef } from "react";
import supabase from "./Supabaseclient"
// import MindsDB from 'mindsdb-js-sdk';

function Report() {
    const [selects, setSelects] = useState("Phone Number");
    const [value, setvalue] = useState();
    const [formError, setFormError] = useState(null);
  
    // const connectionParams = {
    //     'user': 'postgres',
    //     'password': 'mDrVffEb1njFXgQl',
    //     'host': 'db.fqtymbggaarbqhrrxdvh.supabase.co',
    //     'port': 5432,
    //     'database': 'postgres'           
    //   }
    
    const handleSubmit = async (e) => {

    
        e.preventDefault()

        // const dbToDelete = await MindsDB.Databases.getDatabase('sms',connectionParams);
        if (selects == "Phone Number") {
            const { data, error } = await supabase
                .from('phoneno')
                .insert([{ value }])

            if (error) {
                console.log(error)
                setFormError('Please fill in all the fields correctly.')
            }
            if (data) {
                console.log(data)
                setFormError(null)

            }
        }
        if (selects == "UPI ID") {
            const { data, error } = await supabase
                .from('upiid')
                .insert([{ value }])

            if (error) {
                console.log(error)
                setFormError('Please fill in all the fields correctly.')
            }
            if (data) {
                console.log(data)
                setFormError(null)

            }
        }
    }



    return (

        <div class="report-container slider-one-active">


            <div class="slider-ctr">
                <div class="slider">
                    <form class="slider-form slider-one">
                        <h2>Report a spam</h2>
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

                        <button class="first next" onClick={handleSubmit}>Submit</button>
                    </form>
                   
                    {value &&<div class="slider-form slider-three">
                        
                        <h3>Thank you for your input!</h3>

                    </div>}
                </div>
            </div>
        </div>

    );
}

export default Report;