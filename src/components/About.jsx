import './About.css'
import aboutimg from '../images/about.png'

export default function About(){
    return(
        <>
            
            <div className='about block'>
            <h2 className='about-header'>What is SPAMEYE?</h2>
                <div className='container about-grid'>
                    
                    <div className='about-desc'>
                        <p>Lorem ipsum dolor sit amet. Ex odit sunt et architecto magni 33 explicabo cumque. </p>
                        <p>Id voluptas culpa est autem dolor qui dolore laudantium et dolorem odit id exercitationem perspiciatis qui eaque totam.</p>
                    </div>
                    <div className='about-img'>
                        <img  src={aboutimg} alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
}