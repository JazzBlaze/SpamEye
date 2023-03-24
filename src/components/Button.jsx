
import './Button.css'

export default function Button({text,link}){
	return (
        <>
            <a className="button btn--swiggle" href={link} target="_blank">{text}</a>
        </>
    )
}