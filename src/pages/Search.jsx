import {useState} from 'react'
import {FaSearch, FaArrowRight} from 'react-icons/fa'

function Search() {
    const [search, setSearch] = useState('')

    const onChange = (e)=>{
        setSearch(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault()

    }
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 py-12 px-4 gap-8">
      <p className="text-2xl font-bold text-gray-800 mb-2">Search</p>
      <form onSubmit={onSubmit} className="w-full max-w-md flex flex-col gap-4">
        <div className="relative flex items-center w-full">
          <input
            className="search-control p-3 pl-4 pr-12 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-base shadow-sm"
            type="text"
            value={search}
            onChange={onChange}
            placeholder="Type to search..."
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 focus:outline-none"
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
      </form>
      {search && (
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow flex items-center justify-between px-4 py-3 mt-2 transition-all">
          <span className="text-gray-700 text-base">{search}</span>
          <button className="text-purple-600 hover:text-purple-800 focus:outline-none" aria-label="Go">
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  )
}

export default Search