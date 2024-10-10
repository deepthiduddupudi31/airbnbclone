import girl1  from "./kubernets.jpeg";
import girl2  from "./wedding-photography.png";
import girl3  from "./mountain-bike.png";
import girl4  from "./beach.jpeg";


import Pass from  "./Pass.jsx";

export default function Actual()
{
     return(
        <div className="body">
        <Pass 
          img={girl1}
          rating="5.0-(USA)"
          sen="Life with Kalisa mountains"
          cost={126}/>
         <Pass 
         img={girl2}
         rating="2.5-(London)"
         sen="wedding life photography"
         cost={152}/>
        <Pass 
        img={girl3}
        rating="2.7-(UK)"
        sen="group mountain photoraphy"
        cost={123}/>
       <Pass 
        img={girl4}
        rating="3.7-(Europe)"
        sen="beach life photography"
        cost={675}/>
       </div>

     )
}