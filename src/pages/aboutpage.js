import React from 'react';
import Hero from '../components/hero';
import Content from '../components/content'

function AboutPage(props){

    return(
        <div>
            <Hero title={props.title}/>
            <Content style={{  
  backgroundImage: "url(" + "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?cs=srgb&dl=pexels-thisisengineering-3913025.jpg&fm=jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
            <div >
            <h3> Allow me to introduce myself!</h3>
         
            
            
         <p>Hello World! I'm Matthew! I am a full stack developer with a lot of focus and energy! I have lived in Cincinnati Ohio for my entire life. I have always enjoyed taking an artistic approach to working, and as such found myself with a career in printing. However, as I've grown more as an adult I've discovered a strong passion for creativity through web development. As a former career printer you can expect these qualities while working with me:</p>
           
        
           
           <ul>
             <li>Strong attention to detail.</li>
             <li>A desire to meet or exceed expectations.</li>
             <li>An objective-based work of art.</li>
             <li>A willingness to learn and accomplish any task</li>
           </ul>
         
        
    
    
    
    
 
    
     
     <h3>About Me</h3>
     
         <p>  I enjoy playing my guitar, and sports, and let's not forget building fast functioning code that ensures a smooth and user-driven experience.  I have discovered coding to be a huge passion of mine, I enjoy coding alone or pair coding and even working in teams! I absolutely relish the experience of working with other inspired driven web developers!</p>
       
          
     <h4>Languages and skills:</h4>
           
            <ol>
               <li>JavaScript</li>
               <li>HTML5</li>
               <li>CSS</li>
               <li>C#</li>
               <li>Python</li>
               <li>C++</li>
               <li>MySQL</li>
               <li>ASP.Net</li>
               <li>React/Redux</li>
               <li>Node.JS</li>
               <li>JQuery</li>
               <li>Web API's</li>
            </ol>
       
     
            </div>
            </Content>
        </div>
    );
}


export default AboutPage;
