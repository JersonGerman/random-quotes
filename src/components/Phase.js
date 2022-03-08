import {CardIcon, CardPhase, CardAuthor, CardButton} from "../components";

const Phase = (props) =>{

    const {author, quote, changeQuote, color} = props;

    return (
        <div className="card">
            <CardIcon color={color}/>
            <CardPhase color={color} quote={quote}/>
            <CardAuthor color={color} author={author}/>
            <CardButton changeQuote={changeQuote} color={color}/>
        </div>  
    )

}


export default Phase;