import { useState } from "react";

const SearchBar = () => {
    const [search, useSearch] = useState('');
    return(
        <div className="container pt-[2.5rem] pb-[0.62rem]">
            <input type="search" className="w-[49.5rem] h-[2.75rem] bg-[#F4F3F3] p-[1rem] outline-0" placeholder="Search" name="search" />
        </div>
    )
}

export default SearchBar