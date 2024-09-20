
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch]= useState('')

  // useEffect ek hook he islie direct usme async await use nahi karsakte islie use call back me IIFE ()()
  useEffect(() => {
    (async()=>{
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products')
        // console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
      
    })()

  }, [])

    if(error){
      return <h1>Something went wrong</h1>
    }

    if(loading){
      return <h1>Loading...</h1>
    }


  return (
   <>
   <h1>API Handling</h1>
   {/* Conditional rendering */}
   {/* {loading && <h1>Loading...</h1>}
   {error && <h1>Something went wrong</h1>} */}

   <input type="text" placeholder='Search' 
   value={search}
   onChange={(e)=> setSearch(e.target.value)}
   
   />
   <h2>Number of Products : {products.length}</h2>
   </>
  )
}

export default App




