import React, { useState, useEffect } from "react";
import Axios from "axios";
import Displaymain from "../Display/Displaymain";
import Displayother from "../Display/Displayother";

const Search = function () {
  const [type, setType] = useState(undefined);
  const [startNum, setStartNum] = useState(1);
  const [name, setName] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  const searchType = (type) => {
    if (type < 1 || type > 4) {
      return alert(
        "Type selection out of range please select the number from the list"
      );
    } else if (type === 4) {
      Axios.get(`/api/typeO/${type}`, { startNum }).then((res) => {
        setSearchRes(res);
      });
    } else {
      Axios.get(`/api/typeM/${type}`, { startNum }).then((res) => {
        setSearchRes(res);
      });
    }
  };

  const searchName = (name) => {
    Axios.get(`/api/username/${name}`, { startNum }).then((res) =>
      setSearchRes(res)
    );
  };

  const setDisplay = () => {
    if (type === 4) {
      searchRes.map((workout) => {
        return (
          <Displayother key="workout.other_workout_id" workout={workout} />
        );
      });
    } else {
      searchRes.map((workout) => {
        return <Displaymain key="workout.main_workout_id" workout={workout} />;
      });
    }
  };

  useEffect(() => {
    searchType(1);
  }, []);
  return (
    <div className="search">
      <h1>Search</h1>
      <label> 1: Run, 2: Walk, 3: Bike ride, 4: Other</label>
      <input
        type="Int"
        onChange={(e) => {
          setType(e.target.value);
        }}
        value={type}
        placeholder="Enter workout type number"
      />
      <button
        onClick={(e) => {
          setStartNum(1);
          searchType();
        }}
      >
        Search
      </button>
      <button
        onClick={(e) => {
          setType("");
        }}
      >
        Clear
      </button>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        placeholder="Search by username"
      ></input>
      <button
        onClick={(e) => {
          setStartNum(1);
          searchName();
        }}
      >
        Search
      </button>
      <button
        onClick={(e) => {
          setName("");
        }}
      >
        Clear
      </button>
      {setDisplay()}
    </div>
  );
};

export default Search;
