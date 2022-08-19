import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';

function Page404() {
  return (
    <div className='page404'>
      <h3>Page Not Found</h3>
      <Link to='/'>Go to Home Page.</Link>
      </div>
  )
}

export default Page404