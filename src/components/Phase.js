const Phase = (props) =>{

    const {author, quote, changeQuote, color} = props;


    return (
        <div className="card">
            <div className="card-icon">
                <i className="fas fa-quote-left" style={{color}}></i>
            </div>
            <div className="card-phase" style={{color}}>
                {quote}
            </div>
            <div className="card-autor">
                <p style={{color}}>{author}</p>
            </div>
            <div onClick={changeQuote} className="card-button" style={{backgroundColor: color}}>
                <i  className="fas fa-angle-right"></i>
            </div>
        </div>  
    )

}


export default Phase;