import {useEffect, useState} from 'react'


function Randomise() {
      const [count, SetCount] = useState(0)
      const [data, SetData] = useState(null)
      const [random, setRandom] = useState(Math.floor(Math.random() * 277))


      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://www.moogleapi.com/api/v1/characters") 
          const data = await response.json()
          console.log(data)
          SetData(data)  
                
      }

      fetchData()  
      
  
      }, [count])
  
  return (
    <div className="App">
      
      <div class = "container">
      <div id="button"><button id="clicker" onClick = {() => setRandom(Math.floor(Math.random() * data.length))}>Random Character</button></div>
      <div id = "table">
      {data && 
      <div id = "results">
        <h1 id="name1">{data[random].name}</h1>
        <h1 id="name">{data[random].job}</h1>
        <img alt = {data[random].name} id="image" src = {data[random].pictures[0].url} />
        <h1>Game: {data[random].origin}</h1>
        <h1 id="description">{data[random].description}</h1>
        
        
         </div>} 
         </div></div>

    </div>
    
  );
}

export default Randomise;