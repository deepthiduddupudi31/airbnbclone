import hero  from "./hero.jpg"

export default function Hero()
{
     return(
        <div className="hero">
            <img src={hero} className="heropic"></img>
            <h1 className="hero-heading">Online Experiences</h1>
            <h3 className="hero-para">To create and maintain an Airbnb clone for online experiences, 
            it’s essential to focus on delivering a seamless
            enabling users to easily browse, book.</h3>
        </div>
     )
}