import React from 'react';
import Blog from './Blog';
// import axios from 'axios';


const BlogList = ({blogs}) => (
<>
{blogs.map( p =>

  <Blog key={p.id} {...p}
  />
) }
</>
)
  



export default BlogList;






