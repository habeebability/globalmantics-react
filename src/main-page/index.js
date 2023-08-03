import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main-page.css";

import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/house-from-query";
function App() {
  const [housesData, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/houses.json");
      const houses = await response.json();

      setHouses(houses);
    };

    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (housesData.length) {
      const randomIndex = Math.floor(Math.random() * housesData.length);

      return housesData[randomIndex];
    }
  }, [housesData]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={housesData} />
        <Routes>
          <Route
            path="/"
            exact
            element={<FeaturedHouse house={featuredHouse} />}
          />
          <Route
            path="/searchresults/:country"
            element={<SearchResults allHouses={housesData} />}
          />
          <Route
            path={"/house/:id"}
            element={<HouseFromQuery allHouses={housesData} />}
          />
          {/* <Route path="*" element={<h2>Not Found</h2>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
