import React from 'react'
import { useNavigate } from 'react-router-dom'
function Card({products, loading,viewMode}) {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`/products/${id}`)
  }
  return (
    <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-3 gap-6' : 'grid-cols-1 gap-6'} `}>
    {loading&&<p>Loading...</p>}
    {!loading&&products.length>0&&products.map((product, index) => (
       <div key={product.id} onClick={()=>handleClick(product.id)} className={`rounded-lg px-4 overflow-hidden shadow-lg ${viewMode === 'grid' ? 'flex flex-col ' : 'flex gap-4 p-4'} cursor-pointer hover:shadow-xl`}>
         <img
           src={product.attributes.image}
           alt="Product"
           className={` rounded-xl  ${viewMode === 'grid' ? 'w-full h-50 object-cover' : 'h-40 w-50 '} `}
         />
         <div className={`p-4 text-center ${viewMode==='grid'?'':' w-full flex justify-between'}`}>
          <div>
          <h1 className='text-xl font-semibold text-gray-600'>{product.attributes.title} </h1>
           <p className={`${viewMode==='grid'?'hidden':'pt-2 text-start'} text-gray-400 font-mono`}>{product.attributes.company}</p>
          </div>
           <p className={`${viewMode==='grid'?'text-indigo-800':'text-gray-600 text-xl font-semibold'}`}>
             ${Number(product.attributes.price / 100).toFixed(2)}
           </p>
         </div>
       </div>
     ))}
   </div>
  )
}

export default Card