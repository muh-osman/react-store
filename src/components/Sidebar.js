import { Link } from "react-router-dom";

const Sidebar = () => {
  return (


    <div className="col-2 text-center sidebar">
        <ul className="list-unstyled">
            <li className="p-3">
                <Link to='products' className="btn btn-light text-decoration-none w-100">All products</Link>
            </li>
            <li className="p-3">
                <Link to='/' className="btn btn-light text-decoration-none w-100">All categories</Link>
            </li>
        </ul>
    </div>


  )
}

export default Sidebar