import React from "react";

const SearchBox = (props) => {
    return(
        <div>
            <input value={props.value}
            onChange={(event)=> props.SetSearchBar(event.target.value)}
            placeholder="Type to Search..."></input>
        </div>

    );

};

export default SearchBox;