// import useCallback if we use ---> another way to fetch data

import useFeaturedHouse from "../hooks/useFeaturedHouse";
import useHouses from "../hooks/useHouses";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./main-page.css";

import HouseFromQuery from "../house/house-from-query";
import SearchResults from "../search-results";
import FeaturedHouse from "./featured-house";
import Header from "./header";
import HouseFilter from "./house-filter";

import HousesContext from "../context/housesContext";
function App() {
  const housesData = useHouses();
  const featuredHouse = useFeaturedHouse(housesData);
  //#region
  // this code will be moved to custom hook

  // const [housesData, setHouses] = useState([]);

  // one way to fetch data
  // useEffect(() => {
  //   const fetchHouses = async () => {
  //     const response = await fetch("/houses.json");
  //     const houses = await response.json();

  //     setHouses(houses);
  //   };

  //   fetchHouses();
  // }, []);

  //#endregion

  // another way to fetch data
  // const fetchHouses = useCallback(async () => {
  //   const response = await fetch("/houses.json");
  //   const houses = await response.json();

  //   setHouses(houses);
  // }, []);
  // useEffect(() => {
  //   fetchHouses();

  //   // we must include fetchHouses in the dependency array
  // }, [fetchHouses]);

  // create a custom hook for featured house
  // const featuredHouse = useMemo(() => {
  //   if (housesData.length) {
  //     const randomIndex = Math.floor(Math.random() * housesData.length);

  //     return housesData[randomIndex];
  //   }
  // }, [housesData]);

  const header = <Header subtitle="Providing houses all over the world" />;

  return (
    <Router>
      <HousesContext.Provider value={housesData}>
        <div className="container">
          {header}
          {/* <Header subtitle="Providing houses all over the world" /> */}
          <HouseFilter />
          <Routes>
            <Route
              path="/"
              exact
              element={<FeaturedHouse house={featuredHouse} />}
            />
            <Route path="/searchresults/:country" element={<SearchResults />} />
            <Route path={"/house/:id"} element={<HouseFromQuery />} />
            {/* <Route path="*" element={<h2>Not Found</h2>} /> */}
          </Routes>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
