import React from 'react'
import Helmet from '../Components/Helmet';
import BlogList from '../Components/Blogs/BlogList.jsx'

const Blogs = () => {
  return (
    <>
    <Helmet title={"Blogs"}/>
    <BlogList/>
  </>
  )
}

export default Blogs
