import {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";

const BASE_URL = "https://jadr-worldwide.netlify.app/.netlify/functions";
const DEV_BASE_URL = "http://localhost:8888/.netlify/functions";
// 1) Create context
const CityContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
  isError: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
        isError: false,
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
    case "city/created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
        isLoading: false,
      };
    case "city/deleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
        currentCity: {},
      };
    case "error":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isError: true,
      };
    case "clearError":
      return {
        ...state,
        error: "",
        isLoading: false,
        isError: false,
      };
    case "notLoading":
      return {
        ...state,
        isLoading: false,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function CityProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { cities, isLoading, currentCity, error, isError } = state;
  useEffect(() => {
    async function listCities() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/listCities`);
        if (!res.ok) throw new Error("Error fetching data.");
        const citiesData = await res.json();
        dispatch({ type: "cities/loaded", payload: citiesData });
      } catch (err) {
        console.error(err);
        dispatch({ type: "error", payload: err.message });
      }
    }
    listCities();
  }, []);

  async function searchCity(query) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${DEV_BASE_URL}/searchCity?name=${query}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      return data;
    } catch (err) {
      console.error(err);
      dispatch({ type: "error", payload: err.message });
    } finally {
      dispatch({ type: "notLoading" });
    }
  }

  const getCity = useCallback(
    async function getCity(id) {
      if (+id === currentCity.id) return;

      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/getCity?id=${id}`);
        if (!res.ok) throw new Error("Error fetching city.");
        const city = await res.json();
        dispatch({ type: "currentCity/changed", payload: city });
      } catch (err) {
        console.error(err);
        dispatch({ type: "error", payload: err.message });
      }
    },
    [currentCity.id]
  );

  async function saveCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/addCity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      if (!res.ok) throw new Error("Error saving city.");
      const city = await res.json();
      dispatch({ type: "city/created", payload: city });
    } catch (err) {
      console.error(err);
      dispatch({ type: "error", payload: err.message });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/deleteCity?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Error deleting city.");
      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      console.error(err);
      dispatch({ type: "error", payload: err.message });
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
        searchCity,
        error,
        isError,
        dispatch,
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
