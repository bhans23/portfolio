import React, {Component} from 'react';
import BlogList from './BlogList';
import axios from 'axios';





class Blogs extends Component {
  state = {blogs: []}

componentDidMount() {
  
  axios.get('/api/blogs')
    .then( res => {
      this.setState({ blogs: res.data })
    })
    
} 
  render (){
    return(
      <div className="side">
        <h1>Blogs</h1>
        <BlogList blogs={this.state.blogs} />
      </div>
    )

  }



}




export default Blogs;