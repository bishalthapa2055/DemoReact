import { Link } from "react-router-dom"
import "./notFound.css"

const NotFound = () => {
  return (
    <>
    <section className="notFound">
      <div className="container notFound__container">
        <h2>Not Found</h2>
        <Link to="/" className="btn" >Go Back Home</Link>
      </div>
    </section>
    </>
  )
}

export default NotFound