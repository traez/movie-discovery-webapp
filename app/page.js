/*
provide a dynamic way to switch between different components or views within your application based on the value of componentDisplay stored in the global state. This is a common pattern in single-page applications (SPAs) where different components represent different sections or pages of the application, and the user can navigate between them without a full page reload.
*/
"use client";
import HomeCom from "./components/HomeCom";
import FavouritesCom from "./components/FavouritesCom";
import { useContext } from "react";
import { StateContext } from "./StateProvider";

export default function Home() {
  const { componentDisplay } = useContext(StateContext);

  return <>{componentDisplay === "Home" ? <HomeCom /> : <FavouritesCom />}</>;
}
