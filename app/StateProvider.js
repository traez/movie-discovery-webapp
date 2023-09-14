/*
The essence of this code is to centralize and manage the application's state and provide a mechanism for sharing that state across different components. It helps keep your codebase organized, maintainable, and efficient by avoiding prop drilling and ensuring that state updates are consistent throughout the application. Components that need access to this state can consume it by using the useContext hook and the StateContext object.
*/
"use client";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export const StateContext = createContext();

export default function StateProvider({ children }) {
  const router = useRouter();
  const [componentDisplay, setComponentDisplay] = useState("Home");
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailsData, setDetailsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey2 = process.env.API_KEY;

  function toggleDisplay(parameter) {
    setComponentDisplay(parameter);

    if (router.pathname !== "/") {
      router.push("/");
    }
  }

  async function fetchSearchData(event) {
    if (event.key !== "Enter") {
      return;
    }
    try {
      const searchTerm = event.target.value;
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey2}&language=en-US&page=1&include_adult=false&query=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovieData(data);
      setSearchTerm("");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <StateContext.Provider
      value={{
        componentDisplay,
        toggleDisplay,
        movieData,
        setMovieData,
        isLoading,
        setIsLoading,
        error,
        setError,
        detailsData,
        setDetailsData,
        searchTerm,
        setSearchTerm,
        fetchSearchData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
