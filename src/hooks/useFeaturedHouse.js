import { useMemo } from "react";

const useFeaturedHouse = (housesData) => {
  const featuredHouse = useMemo(() => {
    if (housesData.length) {
      const randomIndex = Math.floor(Math.random() * housesData.length);

      return housesData[randomIndex];
    }
  }, [housesData]);

  return featuredHouse;
};

export default useFeaturedHouse;
