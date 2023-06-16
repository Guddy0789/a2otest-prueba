import { Link } from "react-router-dom"


export const Navigation = () => {
  return (
<>
<div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
    <a className="navbar-brand" href="#">A2O Test</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link className="nav-item text-decoration-none" to="/problem-1">
          <a className="nav-link "href="#">Problem 1</a>
        </Link>
        <Link className="nav-item text-decoration-none" to="/problem-2">
          <a className="nav-link " >Problem 2</a>
        </Link>
        
        
      </ul>
    </div>
  
    </nav>
</div>



    </>
  )
}
