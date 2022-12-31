import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        allProducts()
    }, [])

    const allProducts = ()=> {
        fetch('http://localhost:9000/products')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    }


    const deleteProduct = (product)=> {

        Swal.fire({
            reverseButtons: 'true',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
          })
          
          .then((result) => {
            // If delete confirmed
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

              fetch(`http://localhost:9000/products/${product.id}`,
              {method: "DELETE"})
                  .then((res)=> res.json())
                  // After Delete call "allProducts" function again
                  .then((dataAfterDelete)=> allProducts())
            }
          })
    }


  return (
    <div className='col-10 products'>
        <h1>Products Page</h1>

        <Link to='/products/add' className='btn btn-success mt-3'>Add new product</Link>

        <table className="table table-striped mt-5">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price$</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>

                {
                    products.map((product) => {
                        return (
                            <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                {/* View Button */}
                                <Link to={`/products/${product.id}`} className='btn btn-info btn-sm me-1'>View</Link>
                                {/* Edit Button */}
                                <Link to={`/products/edit/${product.id}`} className='btn btn-primary btn-sm  me-1'>Edit</Link>
                                {/* Delete Button */}
                                <button onClick={() => deleteProduct(product)} className='btn btn-danger btn-sm'>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                }

            </tbody>

        </table>
    </div>
  )
}

export default Products