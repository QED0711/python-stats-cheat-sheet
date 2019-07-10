import React from 'react';

const SearchForm = ({ setUserSearch, searchParams }) => {

    const handleChange = (e) => {
        e.preventDefault()

        const type = document.getElementById('search-type').value
        const match = document.getElementById('search-text').value

        let matchRule = document.getElementById('text-match-1').checked ? "anywhere" : "beginning"
        setUserSearch({type, match, matchRule})
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
                
                <br/>
                <input type="radio" name="text-match" id="text-match-1" value="anywhere" checked={searchParams.matchRule === "anywhere"} />
                <label for="text-match-1">Match anywhere in word(s)</label>
                <br/>
                <input type="radio" name="text-match" id="text-match-2" value="beginning" checked={searchParams.matchRule === "beginning"}/>
                <label for="text-match-2">Match beginnings of words</label>

            </form>
        </div>
    )

}

export default SearchForm;