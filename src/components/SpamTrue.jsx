import "./SpamTrue.css"
import warn from "../images/red-warn.png"

export default function SpamTrue({count}){
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
                    <h1>00</h1>
                    <h4>Risk score is a cummulative value out of 100 given by our AI model</h4>
                </div>
            </div>
        </>
    )
}