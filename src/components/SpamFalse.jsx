import "./SpamFalse.css"

import check from "../images/green-check.png"

export default function SpamTrue({count}){
    return(
        <>
            <div className="container block">
                <p>CLASSIFICATION:</p>
                <div className="classification">
                    <img src={check} alt=""/>
                    <h1>NOT SPAM</h1>
                </div>

            </div>
        </>
    )
}