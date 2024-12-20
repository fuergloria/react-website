import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <div className="d-flex" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link "to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/cv">CV</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cv" state={{scrollTo: 'contact'}}>Kontakt</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      
      <Outlet />
    </>
  )
};

export default Layout;
