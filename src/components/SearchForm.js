import React from 'react';

const SearchForm = ({ setUserSearch }) => {

    const handleChange = (e) => {
        e.preventDefault()

        const type = document.getElementById('search-type').value
        const match = document.getElementById('search-text').value

        setUserSearch({type, match})
    }

    return(
        <div>
            <form className="search-form" onChange={handleChange}>
                <select id="search-type">
                    <option value="title">Title</option>
                    <option value="tags">Tags</option>
                    <option value="author">Author</option>
                </select>
                <input type="text" id="search-text" placeholder="Search..."/>
            </form>
        </div>
    )

}

export default SearchForm;