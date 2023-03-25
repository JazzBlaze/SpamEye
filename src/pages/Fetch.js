import React, { useState, useEffect } from 'react';
const url = 'https://cloud.mindsdb.com/api/sql/query';
const cookies = '{session=eJw9yksKwyAURuG9_GMHvUm8opsRHzcgJDYYUyile690kOH5OB_4Q9oeqtQO19slCiH18hK4NWznyPTcj1DfvmQ4OxtSKLVLG-yvU9rfwQtljhNlSSbahUk_NFMUKNyTndl8f5rtJJQ.ZB5nrg.uFTsjwD2d5EOeWEpXiyLxlD6UTU}';
function Fetch(){
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
    
    query({"inputs": "I like you. I love you"}).then((response) => {
        console.log(JSON.stringify(response));
    });

return(
    <div>asd</div>
)
}

export default Fetch;
