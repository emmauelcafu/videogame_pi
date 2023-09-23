import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideoname } from "../../redux/actions";

import "./search.style.css";

function Search() {
  const dispatch = useDispatch();

  const [videoGameName, setVideoGameName] = useState("");

  const handlerSearch = (e) => {
    const inputText = e.target.value
    setVideoGameName(inputText);
     setTimeout(() => {
      dispatch(getVideoname(inputText));
    }, 500);
    
  };
  
  

  return (
    <div className="div">
      <input
        className="input"
        type="text"
        placeholder="buscar"
        value={videoGameName}
        onChange={handlerSearch}
      />
    </div>
  );
}

export default Search;
