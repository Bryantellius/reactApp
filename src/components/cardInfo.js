import React from 'react';
import {useSpring, animated } from 'react-spring';

function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity: 0}});
    return(
   <animated.div className="b-card-info" style={style}>
       <p className="b-card-title">{props.title}</p>
       <p className="b-card-subTitle">{props.subTitle}</p>
       <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
   </animated.div>
    )
}
export default CardInfo;