import React from 'react'
import {Link} from 'react-router-dom'
import {BsFilterLeft} from 'react-icons/bs'

function Catalog() {
    return (
        <>
            <div className="catalog">
                <div className="product-header">
                    <p>Products</p>
                </div>
                <div className="filter-tab">
                    <div className="filter-desktop">
                        <button>
                        <BsFilterLeft/> <span>Filter and Sort</span>
                        </button>
                    </div>
                    <div className="filters-device">
                    <span>Sort by</span>
                    <select name="sort_by" className='select-modal' id="SortBy" aria-describedby="a11y-refresh-page-message">
                        <option value="manual">Featured</option>
                        <option value="best-selling">Best selling</option>
                        <option value="title-ascending" selected="selected">Alphabetically, A-Z</option>
                        <option value="title-descending">Alphabetically, Z-A</option>
                        <option value="price-ascending">Price, low to high</option>
                        <option value="price-descending">Price, high to low</option>
                        <option value="created-ascending">Date, old to new</option>
                        <option value="created-descending">Date, new to old</option>
                    </select>
                    </div>
                    <p>0 products</p>
                </div>
                <div className="products-found">
                    <span>No products found <br /> Use fewer filters or <Link to='/catalog'>remove all</Link></span>
                </div>
            </div>
            <div className="filter-modal">
                
            </div>
        </>
    )
}

export default Catalog