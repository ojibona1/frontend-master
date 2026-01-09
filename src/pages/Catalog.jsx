import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsFilterLeft } from 'react-icons/bs'
import { reset, getProducts } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Loader from '../components/Loader'

function Catalog() {
    const [sortBy, setSortBy] = React.useState('best-selling')

    const dispatch = useDispatch();

    const { products, isError, message, isLoading } = useSelector((state) => {
        return state.products
    })


    useEffect(() => {
        dispatch(getProducts());
        return () => {
            dispatch(reset());
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto w-full">
                <div className="product-header text-3xl font-bold text-gray-900 mb-8">Products</div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 w-full">
                    <div className="hidden md:flex items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                            <BsFilterLeft className="text-xl text-purple-700" />
                            <span className="font-medium text-gray-700">Filter and Sort</span>
                        </button>
                    </div>
                    <div className="flex md:hidden items-center gap-2">
                        <span className="text-gray-700">Sort by</span>
                        <select name="sort_by" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select-modal px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-describedby="a11y-refresh-page-message">
                            <option value="manual">Featured</option>
                            <option value="best-selling">Best selling</option>
                            <option value="title-ascending">Alphabetically, A-Z</option>
                            <option value="title-descending">Alphabetically, Z-A</option>
                            <option value="price-ascending">Price, low to high</option>
                            <option value="price-descending">Price, high to low</option>
                            <option value="created-ascending">Date, old to new</option>
                            <option value="created-descending">Date, new to old</option>
                        </select>
                    </div>
                    <p className="text-gray-500">{products?.data?.length} product{products?.data?.length > 1 ? 's' : ''}</p>
                </div>
                <div className="w-full flex flex-col justify-center items-center py-8">
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                        {isLoading && <span><Loader /></span>}
                        {isError && <span className="text-red-500">{message}</span>}
                        {!isLoading && !isError && products.data && products.data.length > 0 ? (
                            products.data.map((product) => (
                                <Product key={product._id || product.id} product={product} />
                            ))
                        ) : (!isLoading && !isError && (
                            <span className="text-lg text-gray-700 text-center col-span-full">No products found <br /> Use fewer filters or <Link to='/catalog' className="text-purple-600 hover:underline">remove all</Link></span>
                        ))}
                    </div>
                </div>
            </div>
            {/* filter-modal placeholder */}
        </div>
    )
}

export default Catalog