import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [loader, setLoader] = useState(true);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users"); 
        setDatas(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  if (loader) return <p>Loading...</p>;

  return (
    <div>
      <h1>People List</h1>
      {datas.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <ul>
          {datas.map((person, index) => (
            <li key={index}>{person.username}</li> // replace 'name' with actual field from your backend
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
