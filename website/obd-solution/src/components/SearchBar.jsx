import React from "react";
import "../../src/asset/styles/searchbar.css";

const SearchComponent = ({searchQuery,setSearchQuery})=>{
    return (
        <div>
            <h2>
                Tìm kiếm thành viên
            </h2>
                    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search members</span>
        </label>
        <input
            value={searchQuery}
            onInput={e=>setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Tìm theo tên thành viên"
            name="s" 
        />
        <button type="submit" className="submit">Search</button>
    </form>
        </div>

    )

}


export default SearchComponent;
