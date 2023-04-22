import React from 'react'
import { useRouter } from 'next/router'
import data from "../../data/Blog.json"

const slug = ({myBlog}) => {
    const router = useRouter(); 
    const {slug} = router.query
  return (
    <div className='container'>
      <h1>{myBlog.title}</h1>
      <h1>Author : {myBlog.author}</h1>
     <p>{slug}</p>
     <p>{myBlog.Content}</p>
    </div>
  )
}


export async function getServerSideProps(context) {
  let myBlog = data.Blogs.filter((blog) => {
    return blog.slug === context.query.slug
  })
  return {
    props: { myBlog : myBlog[0]},
  }
}

export default slug
