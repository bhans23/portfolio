import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import planet1 from './images/Planet1.gif';
import planet2 from './images/Planet2.gif';
import planet3 from './images/Planet3.gif';
import planet4 from './images/Planet4.gif';
import sun from './images/Sun.png';



class Planets extends Component {
  render(){
    return(
  
  <div className="planets">
    
      
      
      <Link id="planet1" className="planetLink" to='/Bio'>
        
      <img  src={planet1}  width="auto" height="70px"/>
      <figcaption>Bio</figcaption>
    </Link>
    <Link id= "planet2" className="planetLink" to='/Skills'>
    <img src={planet2} width="auto" height="70px"/>
    <figcaption>Skills</figcaption>
    </Link>
    
    <img id="sun" src={sun} width="auto" height="200px"/>
   
    <Link id="planet3" className="planetLink" to='/Work'>
    <img  src={planet3} width="auto" height="70px"/>
    <figcaption>Contact</figcaption>
    </Link>
    <Link id="planet4" className="planetLink" to='/Blogs'>
    <img  src={planet4} width="auto" height="70px"/>
    <figcaption>Blog</figcaption>
    </Link>
  </div>
    )
  }
    
}


export default Planets