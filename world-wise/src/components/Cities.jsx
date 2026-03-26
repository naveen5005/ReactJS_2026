import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/cities")
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      });
  }, []);
  return (
    <div>
      <h1>Welcome to Cities</h1>
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Image</th>
            <th>Description</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <td>
                <Link to={`${city.id}`}>{city.name}</Link>
              </td>
              <td>{city.country}</td>
              <td>
                <img src={city.image} />
              </td>
              <td>{city.description}</td>
              <td>{city.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cities;
