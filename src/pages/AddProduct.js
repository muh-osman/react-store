import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)

  const navigate = useNavigate()


  const formSubmit = (e)=>{
    // Prevent submit the form (reload the page)
      e.preventDefault()


    // Send a POST request
    axios({
      method: 'post',
      url: 'http://localhost:9000/products',
      data: {
          title,
          price
      }
    })
    // Back to Products Page
    .then(()=> navigate('/products'))


    // Or

    // Add Data to "db.json" file
    // fetch('http://localhost:9000/products', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     title,
    //     price,
    //   }),
    // })
    // .then((res)=> res.json())
    // .then(()=> navigate('/products'))


  }


  return (
    <div className="col-10 ">
      <h1>Add Product</h1>

      <form onSubmit={formSubmit}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Product Title"
            required
            onChange={(e)=> setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Product Price"
            required
            onChange={(e)=> setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>

      </form>
    </div>
  );
};

export default AddProduct;
