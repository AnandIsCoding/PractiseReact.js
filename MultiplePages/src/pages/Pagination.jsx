import React, { useEffect, useState } from 'react'
import { FaHandPointLeft } from 'react-icons/fa'
import { FaHandPointRight } from 'react-icons/fa'

function Pagination () {
  const api = `https://dummyjson.com/products?limit=100`
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Fix: Calculating total pages based on the length of products
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const fetchData = async () => {
    try {
      const response = await fetch(api)
      const data = await response.json()
      console.log(data)
      setProducts(data.products)
    } catch (error) {
      // Fix: Add error as a parameter to the catch block
      console.log('Problem in fetching data from API')
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const handleLeftShift = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1))
  }

  const handleRightShift = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))
  }
  return (
    <div>
      <div className='w-full flex flex-col flex-wrap min-h-screen mt-5 gap-5 ml-5'>
        <div className='product__details flex flex-wrap min-h-screen ml-5 '>
          {
            // Display products for the current page
            products
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className='product__box w-[18vw] h-[18vw] bg-zinc-300 rounded-lg flex flex-col justify-center items-center ml-5'
                  >
                    <div className='product__image w-[15vw] h-[14vw] bg-red-100 rounded-lg overflow-hidden mt-1 flex justify-center items-center'>
                      <img
                        src={item.thumbnail}
                        alt='products_image'
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <h1 className='text-center text-xl font-bold mt-1'>
                      {item.title}
                    </h1>
                  </div>
                )
              })
          }
        </div>

        <div className='pagination-buttons flex justify-center mt-5'>
          <span
            className='text-blue-500 mr-2 cursor-pointer '
            onClick={() => handleLeftshift}
          >
            {' '}
            <FaHandPointLeft size={55} />{' '}
          </span>
          {
            // Render pagination buttons
            [...Array(totalPages)].map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-5 rounded-lg mx-1 text-white text-xl font-bold ${
                    currentPage === index + 1 ? 'bg-blue-600' : 'bg-gray-500'
                  }`}
                >
                  {index + 1}
                </button>
              )
            })
          }
          <div className='leftright text-blue-500 ml-2 cursor-pointer'>
            {' '}
            <FaHandPointRight size={55} onClick={handleRightShift} />{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
