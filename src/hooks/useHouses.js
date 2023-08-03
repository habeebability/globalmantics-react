import { useState, useEffect } from "react";

const useHouses = () => {
  const [housesData, setHouses] = useState([]);

  // one way to fetch data
  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/houses.json");
      const houses = await response.json();

      setHouses(houses);
    };

    fetchHouses();
  }, []);

  return housesData;
};

export default useHouses;
