import {SocialMedia, Social, SocialIcon, SocialP, SocialPSpan, SocialPSapnInfo2 } from './style.js'
import React, { useState, useEffect} from 'react';
import axios from 'axios';


const SocailMedia =()=> {

  const [socials, setSocails] = useState([])
  useEffect( ()=>{
    axios.get("js/data.json").then( res => { setSocails(res.data.social)})
  }, [])

  const Smedia = socials.map( (socialItem) =>{
    return(
      
        <Social key={socialItem.id} SocialName={socialItem.id} >
            <SocialIcon className={socialItem.icon}></SocialIcon>
            <SocialP>
                <SocialPSpan>{socialItem.title}</SocialPSpan>
                <SocialPSapnInfo2>{socialItem.body}</SocialPSapnInfo2>
            </SocialP>
        </Social>
    
    )
  })
  return (
    
    <SocialMedia >
        {Smedia}

        </SocialMedia> 
    
    
  );
}

export default SocailMedia;
