import React,{useState} from 'react'
import GetDataFirebase2 from "./GetDataFirebase2";
import subCategories from "../Data/subCategories";
const HelpingPage = (props) => {
const [item, setItem] = useState("");
console.log(item)

  return (
    <div className='Subcategory-div-main'>
      <h2>{props.pageName && props.pageName}</h2>
      <div className="sub-Category-div">
       
      
      {subCategories[props.index][props.pageName]&&subCategories[props.index][props.pageName].map(
        (item, index) => {return(
          <div className='Subcategory' onClick={()=>{setItem(item)}} key={index}>{item}</div>
        )}
        )
      } 
      
      </div>
      <GetDataFirebase2 page={props.pageName} subCategories={item}/> 
      
    </div>
  )
}

export default HelpingPage
