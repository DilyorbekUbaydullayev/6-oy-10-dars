import React, { useEffect, useState } from 'react';
import {Grid, List } from 'lucide-react';
import { http } from '../axios';
import Card from '../components/Card';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    search: '',
    company:"all",
    category: 'all',
    price: 100000,
    sort: 'a-z',
    shipping: false
  })
  
  useEffect(() => {
    if(searchParams.get('search')||searchParams.get('sort')||searchParams.get('company')||searchParams.get('category')||searchParams.get('price')||searchParams.get('shipping')){
      setFilter((prev)=>{
        return{
          search: searchParams.get('search')?searchParams.get('search'):'',
          company: searchParams.get('company')?searchParams.get('company'):'all',
          category: searchParams.get('category')?searchParams.get('category'):'all',
          price:(searchParams.get('price'))?searchParams.get('price'):'100000',
          sort: searchParams.get('sort')?searchParams.get('sort'):'a-z',
          shipping: searchParams.get('shipping')=='on'?true:false
        }
      })}
  }, [searchParams])

  useEffect(() => {
    setLoading(true)
    
    
     let url=`/products?search=${filter.search}&company=${filter.company}&category=${filter.category}&price=${filter.price}&sort=${filter.sort}&shipping=${filter.shipping?'on':''}`
    http.get(url)
    .then(res => {
      if(res.status==200){
        setProducts(res.data?.data)
      }
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false) 
    })
  },[filter])

  const handleFilter = (e) => {
    e.preventDefault()
   let url=`/products?search=${filter.search}&company=${filter.company}&category=${filter.category}&price=${filter.price}&sort=${filter.sort}&shipping=${filter.shipping&&'on'}`
    setSearchParams({...filter, shipping:filter.shipping?'on':''})
    http.get(url)
     .then(res => {
        if(res.status==200){
          setProducts(res.data?.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false) 
      })

   
  }
  const handleReset = () => {
    setFilter({
      search: '',
      company: 'all',
      category: 'all',
      price: 100000,
      sort: 'a-z',
      shipping: false
    });
  };

  return (
    
    <div className="min-h-screen bg-white">
      <section className="container mx-auto p-4 mt-5">
        <div className="bg-gray-50 p-6 rounded-lg">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Search Product</label>
              <input
                value={filter.search}
                onChange={(e) => setFilter({...filter, search: e.target.value})}
                type="text"
                className="w-full p-1 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Select Category</label>
              <select value={filter.category} onChange={(e)=>setFilter({...filter, category:e.target.value})} className="w-full p-1 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>all</option>
                <option>Tables</option>
                <option>Chairs</option>
                <option>Kids</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Select Company</label>
              <select value={filter.company} onChange={(e)=>setFilter({...filter, company:e.target.value})}  className="w-full p-1 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>all</option>
              <option>Modenza</option>
              <option>Luxora</option>
              <option>Comfora</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Sort By</label>
              <select value={filter.sort} onChange={(e)=>setFilter({...filter, sort:e.target.value})} className="w-full p-1 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option >a-z</option>
                <option>z-a</option>
              </select>
            </div>
          </form>

          <div className='flex items-center justify-between space-x-2 mb-6 '>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-2">Select Price</label>
            <input
              type="range"
              min="0"
              max="100000"
              value={filter.price}
              onChange={(e) => setFilter({...filter, price: e.target.value})}
              className="w-[200px] rounded-lg  cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600  mt-1">
              <span>0</span>
              <span>Max: ${filter.price}.00</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <input checked={filter.shipping}  type="checkbox" className=" text-blue-500"  onChange={(e)=>setFilter({...filter, shipping:e.target.checked})}/>
            <span className="text-gray-600 text-sm">Free Shipping</span>
          </div>

          <div className="flex space-x-4 h-8 mb-2"> 
            <button onClick={(e)=>handleFilter(e)} className="bg-blue-500 text-white text-sm px-16 w-[225px]  rounded-xl hover:bg-blue-600 cursor-pointer">
              SEARCH
            </button>
            <button onClick={()=>handleReset()} className="bg-purple-500 text-white text-sm px-16 w-[225px] rounded-xl hover:bg-purple-600 cursor-pointer">
              RESET
            </button>
          </div>
          </div>
        </div>
      </section>


      <section className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">22 products</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 text-sm'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 text-sm'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      
      <section className="p-4">
        <Card products={products} loading={loading} viewMode={viewMode} />
      </section>
    </div>
  );
};

export default Products;