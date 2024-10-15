import { useEffect, useState } from "react"
import axios from "axios"

//#region 
// new code

// function App ()  {
//   const [model, setModel] = useState({})
//   return (
//     <div>
//       <div className="App grid grid-cols-4 mt-5 ">
//         <div>
//           <input onChange={(e) => setModel({...model,firstName: e.target.value}) } placeholder="FirstName" />
//         </div>
//         <div>
//           <input onChange={(e) => setModel({...model,lastName: e.target.value}) } s placeholder="Last Name" />
//         </div>
//         <div>
//           <input onChange={(e) => setModel({...model,email: e.target.value}) } placeholder="Email" />
//         </div>
//         <div>
//           <input onChange={(e) => setModel({...model,contact: e.target.value}) } placeholder="Contact"/>
//         </div>
//         <div>
//           <button onClick={() => {console.log(model)}}>Submit</button>
//         </div>
//       </div>
//     </div>
//   )

// }

//#endregion


// complete code
//#region 

function CartSection() {

  const [showLoader, setShowLoader] = useState(false)
  const [postData, setPostData] = useState([])

  const getApiData = () => {
    setShowLoader(true)
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res, 'send')
        setPostData([...res.data])
        setShowLoader(false)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  const postApiData = () => {
    axios.post('https://fakestoreapi.com/products', {
      body: 'App',
      title: 'SPA',
      userId: 500
    })
  }

  const editApiData = () => {
    axios.put('https://fakestoreapi.com/products/1', {
      body: 'App',
      title: 'SPA',
      userId: 900
    })
  }

  const deleteApiData = () => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
      .then(() => {
        console.log('data deleted successfully')
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  useEffect(() => {
    getApiData();
  }, [])

  return (
    <div>
      <div className="text-start">
        <button onClick={getApiData} className="m-3 p-3 border text-black rounded-md shadow-xl hover:text-white hover:bg-black ">Get Data</button>
        <button onClick={postApiData} className="m-3 p-3 border text-black rounded-md shadow-xl hover:text-white hover:bg-black ">Post Data</button>
        <button onClick={editApiData} className="m-3 p-3 border text-black rounded-md shadow-xl hover:text-white hover:bg-black ">Edit Data</button>
        <button onClick={deleteApiData} className="m-3 p-3 border text-black rounded-md shadow-xl hover:text-white hover:bg-black ">Delete Data</button>
      </div>

      <div>
        {showLoader ? (
          <div className="h-screen flex justify-center items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" className="max-w-full max-h-full" />
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap justify-center">
        {postData.map((x, i) => (
          <div className="border rounded-md shadow-lg p-3 w-96 m-3 text-start" key={i}>
            <img src={x.image} alt={x.title} className="h-[150px]  object-cover mb-4" />
            <p><b>Title:</b> This is Dummy Carts</p>
            <p><b>Description:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <p><b>UserId:</b> {x.userId}</p>
            <button className="mt-3 p-3 border rounded-md">Buy now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

//#endregion


export default CartSection;