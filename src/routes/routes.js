import React from "react";
import HomePage from "../page/HomePage";
import TravelPage from "../page/TravelPage";
import MenCollection from "../page/MenCollection";
import ProductDetailPage from "../page/ProductDetailPage";
import AccessPage from "../page/AccessPage";
import SpecialPgae from "../page/SpecialPgae";
import BabyPage from "../page/BabyPage";
import CollectiblesPage from "../page/CollectiblesPage";
import SquadraPage from "../page/SquadraPage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/travel",
    exact: true,
    main: () => <TravelPage />,
  },
  {
    path: "/mencollection",
    exact: true,
    main: () => <MenCollection />,
  },
  {
    path: "/product",
    exact: true,
    main: () => <ProductDetailPage />,
  },
  {
    path: "/accessories",
    exact: true,
    main: () => <AccessPage />,
  },
  {
    path: "/special",
    exact: true,
    main: () => <SpecialPgae />,
  },
  {
    path: "/baby",
    exact: true,
    main: () => <BabyPage />,
  },
  {
    path: "/collectibles",
    exact: true,
    main: () => <CollectiblesPage />,
  },
  {
    path: "/squadra",
    exact: true,
    main: () => <SquadraPage />,
  },
  {
    path: "/login",
    exact: true,
    main: () => <LoginPage />,
  },
  {
    path: "/register",
    exact: true,
    main: () => <RegisterPage />,
  },
];

export default routes;
