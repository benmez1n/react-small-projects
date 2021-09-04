import { useEffect, useState } from "react";
import data from "./data"
function App() {
  const [reviews,setReviews] = useState(data);
  const [isLoading,setIsLoading] = useState(true);
  let [current,setCurrent]  = useState(0)
  const handlePrv = ()=>current == 0 ? setCurrent(reviews.length-1): setCurrent(current-1);
  const handleNext = ()=>current == reviews.length - 1 ?setCurrent(0) : setCurrent(current+1) ;
  const handleRandom = ()=>{
    let random = Math.floor(Math.random()*reviews.length);
    setCurrent(random);
  }
  useEffect(()=>{
    setIsLoading(false);
  },[current])
  
  return (
    <div className="App">
      <main>
        {isLoading ? <h1 className="title">Loading...</h1> : (
                      <div>
                        <h1 className="title">Reviews</h1>
                        <div className="underline"></div>
                      </div>
        )}
        <div className="container">
            <div className="review">
              <div className="imgContainer">
                <img className="personImg" src={reviews[current].image} alt={reviews[current].name}/>
              </div>
              <h4 className="author">{reviews[current].name}</h4>
              <h5 className="job">{reviews[current].job}</h5>
              <p className="info">{reviews[current].text}</p>
              <div>
                <button className="prevBtn" onClick={()=>handlePrv()}>&lt;</button>
                <button className="nextBtn" onClick={()=>handleNext()}>&gt;</button>
              </div>
              <button className="randomBtn" onClick={()=>handleRandom()}>random</button>
            </div> 
        </div>
      </main>
    </div>
  );
}
export default App;
