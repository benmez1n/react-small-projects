import { useState } from "react";

const Tour = ({name,info,image,price,children}) => {
    const [readMore,setReadMore] = useState(true);
    return ( 
        <div className="singleTour">
            <img src={image} alt={name}/>
            <footer>
                <div className="tourInfo">
                    <h3 style={{marginBottom:0}}>{name}</h3>
                    <h4 className="tourPrice">{price}</h4>
                </div>
                {readMore ? <p>{info.substring(0,200)}</p>:<p>{info}</p> }
                <button onClick={()=>setReadMore(!readMore)}>{readMore ?"read more" :"show less"}</button>
                {children}
            </footer>
        </div>
     );
}
 
export default Tour;