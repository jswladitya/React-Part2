
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch]= useState('')

  //1.  useEffect ek hook he islie direct usme async await use nahi karsakte islie use call back me IIFE ()()
  useEffect(() => {
    //2. since har ek letter query karne pe har baar bar api req ho raha he , though page rerender ho raha he multiple times causing race condition, so we will use axios feature AbortController (it cancels the old request) ,jise ham get me bhejte he, NOTE : yaha unnecessary req cancel nahi ho rhi he wo karte through debouncing

    const controller = new AbortController() //step1

    //iffe ke pehle semicolon is must
    ;(async()=>{
      try {
        setLoading(true)
        setError(false)
        // const response = await axios.get('/api/products')
        // const response = await axios.get('/api/products?search='+ search)
        //step2 : get se sath me signal ko send karo
        const response = await axios.get('/api/products?search='+ search , { signal:controller.signal })

        // console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {

        if(axios.isCancel(error)){
          //step3 : wo saare unnecesaary req waha pe ruk gaye par wo sab yaha be bhej die jate he , toh yaha se bhi cancel karna padta he
          console.log("request cancelled", error.message);
          return
        }
        setError(true)
        setLoading(false)
      }
      
    })()


    //har ek useEffect ke sath cleanup method bhi return sakte he
    //like jab compenent mount hota he to wo unmount bhi hota he ,like ager mene waha kahi eventListener ya kuch bhi laga rakha he tab use clean bhi toh karna he memory se
    return () => {
        controller.abort()
    }
  }, [search])

    // if(error){
    //   return <h1>Something went wrong</h1>
    // }

    // if(loading){
    //   return <h1>Loading...</h1>
    // }


  return (
   <>
   <h1>API Handling</h1>
   {/* Conditional rendering */}
   {loading && <h1>Loading...</h1>}
   {error && <h1>Something went wrong</h1>}

   <input type="text" placeholder='Search' 
   value={search}
   onChange={(e)=> setSearch(e.target.value)}
   
   />
   <h2>Number of Products : {products.length}</h2>
   </>
  )
}

export default App




