const CardButton = ({changeQuote, color}) => {

    return(
        <div onClick={changeQuote} className="card-button" style={{backgroundColor: color}}>
            <i  className="fas fa-angle-right"></i>
        </div>
    )
}
export default CardButton;