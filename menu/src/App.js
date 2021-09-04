import { useEffect, useState } from 'react';
import data from './data';
import Menu from './Menu';
function App() {
  const [isLoading,setIsloading] = useState(true);
  const [menu , setMenu ] = useState([]);
  const [filter,setFilter] = useState(["all","breakfast","lunch","shakes"]);
    const clickHandler = (index)=>{
      if(filter[index]==="all"){
        setMenu(data)
        return;
      }
      let newMenu = data.filter((item)=>item.category === filter[index]);
      setMenu(newMenu)
    };
    useEffect(()=>{
      setMenu(data);
      setIsloading(false);
    },[])
    
  return (
    <div className="App">
      <div className="titre">
        <h1 className="title" style={{marginBottom:"2px"}}>{isLoading ? "Loading ": "Our Menu"}</h1><div className="underline"></div>
        <div className="btnContainer">
            {
                filter.map((btn,index)=>{
                    return(
                        <button 
                            className="filterBtn"
                            key={index}
                            onClick={()=>clickHandler(index)}>
                            {`${btn[0].toUpperCase()}${btn.slice(1,btn.length)}`}
                        </button>
                    )
                })
            }
        </div>
        <Menu menu = {menu}/>
      </div>
    </div>
  );
}

export default App;
