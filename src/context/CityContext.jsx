import { useEffect, useState, createContext, useContext } from "react";

const BASE_URL = "http://localhost:8000";

// 1) Create context
const CityContext = createContext();
function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        if (!res.ok) throw new Error("Error fetching data.");
        const citiesData = await res.json();
        setCities(citiesData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    // 2) Provide value to children
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        setIsLoading,
        BASE_URL,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCities() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("CityContext was used outside of the CityProvider");
  return context;
}

export { CityProvider, useCities };
