import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let heroData=[
    {text1:"Drive into",text2:"What you love"},
    {text1:"Indulge",text2:"Your passions"},
    {text1:"Give in to",text2:"Your passions"},
  ]
//using usestate to keep a track of the value and updates the display when it changes
const [herocount,setherocount]=useState(2);
const [playstatus,setplaystatus]=useState(false);
useEffect(()=>{
  setInterval(()=>{
setherocount((count)=>{return count===2?0:count+1})
  },3000);
},[])
  return (
    <div>
    {/* //here we pass two props to the background component */}
<Background playstatus={playstatus} herocount={herocount}/>
<Navbar/>
<Hero
  setplaystatus= {setplaystatus}
heroData={heroData[herocount]}
herocount={herocount}
setherocount={setherocount}
playstatus={playstatus}
/>

    </div>
  )
}

export default App