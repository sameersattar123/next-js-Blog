import Link from "next/link"
import blogs from "../data/Blog.json"

export default function Home({blogs}) {
  console.log(blogs)
  return (
    <>
      <div className="container">
        <h1 className="my-4 text-center">Welcome to My Blog App</h1>
        <div className="cards row justify-content-center"> 
        {
          blogs.Blogs.map((blog) => {
            return (
        <div class="card my-4 mx-4" style={{ width: "20rem" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5RGgM4DgpwvNAIUzJ2lHHDvdmN-NZEzLjg&usqp=CAU" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{blog.title}</h5>
            <p class="card-text">{blog.Content.substr(0,122)}...</p>
            <Link href={"/blogpost/" + blog.slug} class="btn btn-primary">Read More</Link>
          </div>
        </div>
            )
          })
        }
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(context) {
  return {
    props: {blogs},
  }
}
