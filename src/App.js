import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Component/layout/Navbar';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';
import CartSection from './Component/CartSection/CartSection';
import FormSection from './Component/FormSection/FormSection';

// function App () {

//   const [postData, setPostData] = useState([])

//   const getApiData = () => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         console.log(res.data)
//         setPostData([...res.data])
//       })
//       .catch((err) => {
//         console.log(err, 'err')
//       })
//   }

//   const postApiData = () => {
//     axios.post('https://fakestoreapi.com/products', {
//       body: 'App',
//       title: 'SPA',
//       userId: 500
//     })
//       .then((res) => {
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err, 'err')
//       })
//   }

//   useEffect(() => {
//     getApiData();
//   }, [])

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//     <div className='text-center'>
//       <div className='justify-center'>
//         <button className='border rounded-md p-3 m-3' onClick={getApiData}>Get Data</button>
//         <button className='border rounded-md p-3 m-3' onClick={postApiData}>Post Data</button>
//       </div>
//       <h1 className='text-4xl font-semibold'>Shopping Carts</h1>
//       <div className='flex flex-wrap justify-center'>
//         {postData.map((x, i) => (
//         <div key={i} className="w-[250px] h-auto m-4 border rounded-lg shadow-md p-4">
//                      <img src={x.image} alt={x.title} className="h-[150px] w-full object-cover mb-4" />
//                      <h2 className="text-lg font-bold">{x.title}</h2>
//                      <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi animi dolore aspernatur maiores, soluta sequi debitis corporis ipsa. Unde est quidem cum quos qui, possimus laudantium id quisquam mollitia pariatur. </p>
//                      <p className="font-bold mt-2">${x.price}</p> Add to Cart <br/>
//                      <button onClick={postApiData} className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg"> Post data
//                      </button>
//                    </div>
//                 ))}
//               </div>
//       </div>
//       <div className='Footer'>
//         <Footer />
//       </div>
//       </div>
//   )
// }


// const App = () => {
//   const [postData, setPostData] = useState([])
//   const getApiData = () => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         console.log(res.data)
//         setPostData([...res.data])
//       })
//       .catch((err) => {
//         console.log(err, 'err')
//       })
//   }

//   const postApiData = () => {
//     axios.post('https://fakestoreapi.com/products', {
//       body: 'App',
//       title: 'SPA',
//       userId: 200
//     })
//   }
//   useEffect(() => {
//     getApiData();
//   }, [])

//   return (
//     <div>
//       <div className="text-center">
//         <button onClick={getApiData} className="p-3 border rounded-md m-3">Get Data</button>
//         <button onClick={postApiData} className="p-3 border rounded-md m-3">Post Data</button>
//       </div>
//       <div className='flex flex-wrap justify-center'>
//         {postData.map((x, i) => (
//           <div className='w-[250px] h-auto m-4 border rounded-lg shadow-md p-4' key={i}>
//             <img src={x.image} alt={x.title} className='h-[150px] w-full object-cover mb-4' />
//             <p className='p-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione alias necessitatibus delectus ipsam, qui id sit, vero quo odit atque cupiditate rem mollitia? Recusandae illum iusto saepe inventore totam?</p>
//             <h3 className='font-bold'>Title {x.title}</h3>
//             <button className='p-3 border rounded-md m-3'>Buy Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )

// }\

const App = () => {

  return (
    <div className='App'>
      <div className='nav'>
        <Navbar />
      </div>
      <div className='Content'>
        <Content />
      </div>
      <div>
        <CartSection />
      </div>
      <div>
        <FormSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
