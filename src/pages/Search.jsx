import {useState} from 'react'
import {FaSearch, FaArrowRight} from 'react-icons/fa'

function Search() {
    const [search, setSearch] = useState('')

    const onChange = (e)=>{
        setSearch(e.target.value)
        document.querySelector('.search-result').style.display = 'flex'
    }

    document.addEventListener('click',()=>{
        document.querySelector('.search-result').style.display = 'none'
    })
    const onSubmit = (e)=>{
        e.preventDefault()

    }
  return (
    <>
    <div className="search-tab">
    <p>Search</p>
    <form onSubmit={onSubmit}>
        <div className="search-form-group">
        <input className='search-control' type="text" value={search} onChange={onChange} />
        <button type='submit'>
            <FaSearch/>
        </button>
        </div>
    </form>
    <div className="search-result">
        <span>{search}</span>
        <button>
            <FaArrowRight/>
        </button>
    </div>
    </div>
    </>
  )
}

export default Search