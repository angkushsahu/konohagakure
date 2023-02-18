import { lazy } from "react";

export const Home = lazy(() => import("components/common/home"));
export const Error = lazy(() => import("components/common/error"));
export const Search = lazy(() => import("components/common/searchResults"));
