import React from 'react'

function FeaturedProducts() {
  return (
    <div className="bg-white w-full py-12 px-4 shadow-lg rounded-2xl mt-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Talk about your brand</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          Share information about your brand with your customers. Describe a product, make announcements, or <br />
          welcome customers to your store.
        </p>
      </div>
      <p className="text-xl font-semibold text-purple-700 text-center">Featured Products</p>
    </div>
  )
}

export default FeaturedProducts