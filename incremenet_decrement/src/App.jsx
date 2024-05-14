import React,{useState,useEffect} from 'react'

const App = () => {
 
  const [count,setcount] = useState(0);
  useEffect(()=>{
    alert("count is changed");
  },[count])
  return (
    <div  >
      <h1 className=' text-3xl font-extrabold text-center text-white'>increment decrement project</h1>
     <div className="button flex justify-center align-middle">
     <button  className='text-white px-4 py-2 m-3 bg-gray-700 rounded w-36 ' onClick={()=>{
      setcount(count+1)
     }}>increase value</button>
      <button className='text-white px-4 py-2 m-3 bg-gray-700 rounded w-36 ' onClick={()=>{
        if(count===0){
          alert("value is already at zero")
        }
        else{
          setcount(count-1)
        }
      }}>decrease value</button>
     </div>
  <div className="box flex align-middle justify-center  ">
  <div className="numbox  rounded  m-5 py-3 bg-gray-800 text-white w-20 h-20 flex  justify-center  align-middle text-4xl ">{count}</div>
  </div>
    </div>
  )
}

export default App
