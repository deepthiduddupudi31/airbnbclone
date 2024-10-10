
import star from "./star.png";
export default function Pass(props)
{
    return(
        <div className="body">
             <div className="main">
            <img src={props.img} className="girl"></img>
            <div className="star">
            <img src={star} width="25px"></img>
            <p className="rating">{props.rating}</p>
            </div>
            <h2 className="name">{props.sen}</h2>
            <p className="cost"><strong>{props.cost}K$/person</strong></p>
            </div>
        </div>
    )
}