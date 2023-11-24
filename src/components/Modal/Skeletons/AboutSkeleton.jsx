import React from "react"
import ContentLoader from "react-content-loader"
import { backgroundColor, foregroundColor } from "./options"
import css from './AboutSkeleton.module.css'

const AboutSkeleton = (props) => (

<ContentLoader 
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 558 150"
    className={css.about}
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
   
    {...props}
  >
    <rect x="0" y="0" rx="6" ry="6" width="195" height="24" /> 
    <rect x="350" y="0" rx="6" ry="6" width="200" height="24" /> 

     <rect x="0" y="60" rx="3" ry="3" width="550" height="10" /> 
     <rect x="0" y="76" rx="3" ry="3" width="550" height="10" /> 
     <rect x="0" y="92" rx="3" ry="3" width="550" height="10" /> 
     <rect x="0" y="108" rx="3" ry="3" width="550" height="10" /> 
     <rect x="0" y="124" rx="3" ry="3" width="550" height="10" /> 
  </ContentLoader>



)

export default AboutSkeleton