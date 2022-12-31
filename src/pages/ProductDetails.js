import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const ProductDetails = () => {

  const [product, setProduct] = useState([])
  const {productID} = useParams()
  const navigate = useNavigate();

  const api = "http://localhost:9000/products"

  useEffect(() => {
    fetch(`${api}/${productID}`)
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
  }, [])
  

  return (
    <>
        {
            // If Data exist in "product" state
            product &&

                <div className="col-10">
                    <div className="d-flex m-3">
                    <button onClick={() => navigate(-1)} className='btn btn-primary me-3 fit-content'>Back</button> 
                    <h1>Product: {product.title}</h1>
                    </div>
                    <hr />
                    <h4 className="price">Price: {product.price}$</h4>
                </div>
        }
    </>
  )
}

export default ProductDetails