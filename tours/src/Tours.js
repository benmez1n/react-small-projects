import { useEffect, useState } from "react";
import Tour from "./Tour";
const url = "https://course-api.com/react-tours-project";
const Tours = () => {
    const [tours,setTours] = useState([]);
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    const handleClick = (id)=>{
       const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }

    useEffect(()=>{
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw new Error();
                }
                return response.json();
            })
            .then(data=>{
                setTours(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err=>{
                setError(err.message)
            })
    },[])
    return ( 
        <main>
            {isLoading ? <h1 className = "loading">Loading...</h1> : <h1>our tours</h1>}
            {error && <h1>{error}</h1>}
            {tours && (
                <section>
                    {tours.map((tour)=>{  
                        return(
                            <div key = {tour.id} >
                                <Tour {...tour}>
                                <button className="deleteBtn" onClick={()=>handleClick(tour.id)}>Not Interested</button>  
                                </Tour>
                            </div>
                        )
                    })}
                </section>
                )
            }
        </main>
     )
}
 
export default Tours;