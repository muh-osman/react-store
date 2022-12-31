import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


const EditProduct = () => {

    const [product, setProduct] = useState([])
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()

    useEffect(() => {
        fetch(`http://localhost:9000/products/${productID}`)
            .then((res)=>res.json())
            .then((data)=>setProduct(data))
    }, [])
    

    const navigate = useNavigate()

    const {productID} = useParams()


    const formSubmit = async (e)=> {

        // Prevent submit the form (reload the page)
        e.preventDefault()

        // Send Edited Data to the Server
        await axios({
            method: 'put',
            url: `http://localhost:9000/products/${productID}`,
            data: {
                title,
                price
            }
        })
          // Back to Products Page
        .then(()=> navigate('/products'))

    }

  return (
    <div className="col-10">
      <h1>Edit Product</h1>

      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            New Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={product.title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            New Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder={product.price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Edit
        </button>
        <button onClick={()=> navigate(-1)} type="button" className="btn btn-secondary">
          Cancel
        </button>
      </form>

    </div>
  );
};

export default EditProduct;
