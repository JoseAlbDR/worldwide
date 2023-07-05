import { useEffect, createContext, useContext, useReducer } from "react";

const BASE_URL = "http://localhost:8000";

// 1) Create context
const CityContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    case "currentCity/changed":
      return {
        ...state,
        currentCity: action.payload,
        isLoading: false,
      };
    case "cities/created":
      return {
        cities: [...state.cities, action.payload],
        isLoading: false,
      };
    case "cities/deleted":
      return {
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function CityProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { cities, isLoading, currentCity } = state;
  useEffect(() => {
    async function getData() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities`);
        if (!res.ok) throw new Error("Error fetching data.");
        const citiesData = await res.json();
        dispatch({ type: "cities/loaded", payload: citiesData });
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  async function getCity(id) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      if (!res.ok) throw new Error("Error fetching city.");
      const city = await res.json();
      dispatch({ type: "currentCity/changed", payload: city });
    } catch (err) {
      console.error(err);
    }
  }

  async function saveCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      if (!res.ok) throw new Error("Error saving city.");
      const city = await res.json();
      dispatch({ type: "cities/created", payload: city });
      dispatch({ type: "currentCity/changed", payload: city });
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Error deleting city.");
      dispatch({ type: "cities/deleted", payload: id });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    // 2) Provide value to children
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        saveCity,
        deleteCity,
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
