
import { useEffect, useState } from 'react'
import styles from '../styles/Clusterimage.module.css'
import atolls from './atolls'





const ClusterImage = (props) => {
  const [atoll, setAtoll] = useState(null)
  
  useEffect(()=>{

    setAtoll(atolls(props.atoll) )
    console.log(atolls(props.atoll))
   
  },[props])
  

  useEffect(()=>{
    {props.data.map((cluster)=>{
      const element = document.getElementById(cluster);
      if(element){
        element.style.cursor = "pointer";
        element.addEventListener("mouseenter", (e) => {
          element.classList.add("hoverrr");
        });
        element.addEventListener("mouseleave", (e) => {
          element.classList.remove("hoverrr");
        });

        element.onclick = function () {
            const d = document.getElementById(`${cluster}CLUSTER`)
        if(d){
          //  d.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const rect = d.getBoundingClientRect();
          scroll({
            left:0, 
            top: rect.top + window.scrollY -100,
            behavior: 'smooth'
          })
          
         }
        };
      }
      }
    )} 
  },[atoll])
  


    return (
        
       
          <div className="col-lg-6 rounded-lg my-auto atolls-map">
            {atoll}
          </div>
       

       
    )
}
export default ClusterImage