import React from 'react';
import { Link } from 'react-router-dom';
// import Posts from './Posts';



const Blog = ({name, id}) => (
  
   <Link 
        to={{
          pathname: `/blogs/${id}`,
          state: { name, id }
        }}>
          {name}
    </Link>      
  
  
)

export default Blog;