import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import planet1 from './images/Planet1.png';
import planet2 from './images/Planet2.png';
import planet3 from './images/Planet3.png';
import planet4 from './images/Planet4.png';


class Planets extends Component {
  render(){
    return(
  
  <>
    
      <h1>Planets</h1>
      
      <Link to='/Bio'>
      <img src={planet1} width="auto" height="100px"/>
    </Link>
    <Link to='/Skills'>
    <img src={planet2} width="auto" height="100px"/>
    </Link>
    <Link to='/Work'>
    <img src={planet3} width="auto" height="100px"/>
    </Link>
    <Link to='/Blog'>
    <img src={planet4} width="auto" height="100px"/>
    </Link>
  </>
    )
  }
    
}


export default Planets