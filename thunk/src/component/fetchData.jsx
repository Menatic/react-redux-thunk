import React, { useEffect, useState } from "react";
import "../App.css";

function FetchData() {
  const [records, setRecords] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setRecords(data);
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchData} >Fetch Data</button>
      {dataFetched && (
        <div className="vertical-list">
          {records.map((list, index) => (
            <div key={index} className="list">
              <p id="list-name"> {list.name}</p>
              <p id="list-email"> {list.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchData;