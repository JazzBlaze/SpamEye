import './Hero.css'
//images
import lock from "../images/lock.png"
import hero from "../images/hero.png"

function Hero(){
    return(
        <>
            <div className='hero block'>
                <div className='container hero-grid'>
                    <div className='hero-desc'>
                        <h1>SAFE</h1>
                        <h1>INTERNET</h1>
                        <h1>BROWSING</h1>
                        <p><span><img className='hero-desc__img' src={lock} alt=''/></span>Your web safety is our concern</p>
                    </div>
                    <div className='hero-img'>
                        <img  src={hero} alt=''/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero