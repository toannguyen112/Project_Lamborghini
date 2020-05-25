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
import MidSeasonPage from "../page/MidSeasonPage";
import OuterWearPage from "../page/OuterWearPage";
import SweatshirtsKnitwearPage from "../page/SweatshirtsKnitwearPage";
import PoloShirtsPage from "../page/PoloShirtsPage";
import BackpackBagsPage from "../page/BackpackBagsPage";
import LeatherGoodsPage from "../page/LeatherGoodsPage";
import SmallLeatherGoodsPage from "../page/SmallLeatherGoodsPage";
import TrolleyPage from "../page/TrolleyPage";
import Tiespage from "../page/TiesPage";
import HeadWearPage from "../page/HeadWearPage";
import FootWearPage from "../page/FootWearPage";
import CosmeticPage from "../page/CosmeticPage";
import LuxuryPage from "../page/LuxuryPage";
import CasePage from "../page/CasePage";
import KidPage from "../page/KidPage";
import WomenPage from "../page/WomentPage";
import MenPage from "../page/MenPage";
import TshirtPage from "../page/TshirtPage";
import  CheckoutContainer  from "../container/CheckoutContainer";
import AccountPage from "../page/AccountDashBoardPage";
import SearchResultPage from "../page/SearchResultPage";
import OneStepCheckoutPage from "../page/OneStepCheckoutPage";
import AddNewAdreess from "../component/AddNewAdreess/AddNewAdress";
import AccountDashBoardPage from "../page/AccountDashBoardPage";
import MyOrder from "../component/MyOrder/MyOrder";
import Billing from "../component/Billing/Billing";
import MyWishlist from "../component/MyWishlist/MyWishlist";


const routes = [
  {
    path: "/",
    exact: true,
    main: ({ history, match }) => <HomePage history={history} match={match} />,
  },
  {
    path: "/midseason",
    exact: true,
    main: ({ history, match }) => (
      <MidSeasonPage history={history} match={match} />
    ),
  },
  {
    path: "/midseason/outerwear",
    exact: true,
    main: ({ history, match }) => (
      <OuterWearPage history={history} match={match} />
    ),
  },
  {
    path: "/midseason/SweatshirtsKnitwear",
    exact: true,
    main: ({ history, match }) => (
      <SweatshirtsKnitwearPage history={history} match={match} />
    ),
  },
  ,
  {
    path: "/midseason/PoloShirts",
    exact: true,
    main: ({ history, match }) => (
      <PoloShirtsPage history={history} match={match} />
    ),
  },

  {
    path: "/travel",
    exact: true,
    main: ({ history, match }) => (
      <TravelPage history={history} match={match} />
    ),
  },
  ,
  {
    path: "/travel/BackpackBags",
    exact: true,
    main: ({ history, match }) => (
      <BackpackBagsPage history={history} match={match} />
    ),
  },
  {
    path: "/travel/LeatherGoods",
    exact: true,
    main: ({ history, match }) => (
      <LeatherGoodsPage history={history} match={match} />
    ),
  },
  {
    path: "/travel/SmallLeatherGoods",
    exact: true,
    main: ({ history, match }) => (
      <SmallLeatherGoodsPage history={history} match={match} />
    ),
  },
  {
    path: "/travel/Trolley",
    exact: true,
    main: ({ history, match }) => (
      <TrolleyPage history={history} match={match} />
    ),
  },
  {
    path: "/mencollection",
    exact: true,
    main: ({ history, match }) => (
      <MenCollection history={history} match={match} />
    ),
  },
  {
    path: "/mencollection/tshirt",
    exact: true,
    main: ({ history, match }) => (
      <TshirtPage history={history} match={match} />
    ),
  },
  {
    path: "/product/:id",
    exact: true,
    main: ({ history, match }) => (
      <ProductDetailPage history={history} match={match} />
    ),
  },
  {
    path: "/accessories",
    exact: true,
    main: ({ history, match }) => (
      <AccessPage history={history} match={match} />
    ),
  },
  {
    path: "/accessories/TiesCufflinks",
    exact: true,
    main: ({ history, match }) => <Tiespage history={history} match={match} />,
  },
  {
    path: "/accessories/Headwear",
    exact: true,
    main: ({ history, match }) => (
      <HeadWearPage history={history} match={match} />
    ),
  },
  {
    path: "/accessories/Footwear",
    exact: true,
    main: ({ history, match }) => (
      <FootWearPage history={history} match={match} />
    ),
  },
  {
    path: "/accessories/Cosmetics",
    exact: true,
    main: ({ history, match }) => (
      <CosmeticPage history={history} match={match} />
    ),
  },

  {
    path: "/special",
    exact: true,
    main: ({ history, match }) => (
      <SpecialPgae history={history} match={match} />
    ),
  },


  {
    path: "/baby",
    exact: true,
    main: ({ history, match }) => <BabyPage history={history} match={match} />,
  },
  {
    path: "/collectibles",
    exact: true,
    main: ({ history, match }) => (
      <CollectiblesPage history={history} match={match} />
    ),
  },
  {
    path: "/collectibles/Luxury",
    exact: true,
    main: ({ history, match }) => (
      <LuxuryPage history={history} match={match} />
    ),
  },
  {
    path: "/collectibles/Cases-Hi-Tech",
    exact: true,
    main: ({ history, match }) => <CasePage history={history} match={match} />,
  },
  {
    path: "/squadra",
    exact: true,
    main: ({ history, match }) => (
      <SquadraPage history={history} match={match} />
    ),
  },
  {
    path: "/squadra/men",
    exact: true,
    main: ({ history, match }) => <MenPage history={history} match={match} />,
  },

  {
    path: "/squadra/women",
    exact: true,
    main: ({ history, match }) => <WomenPage history={history} match={match} />,
  },

  {
    path: "/squadra/kid",
    exact: true,
    main: ({ history, match }) => <KidPage history={history} match={match} />,
  },
  {
    path: "/login",
    exact: true,
    main: ({ history, match }) => <LoginPage history={history} match={match} />,
  },
  {
    path: "/register",
    exact: true,
    main: ({ history, match }) => (
      <RegisterPage history={history} match={match} />
    ),
  },
  {
    path: "/checkout",
    exact: true,
    main: ({ history, match }) => (
      <CheckoutContainer  history={history} match={match} />
    ),
  },
  {
    path: "/customer/account/dashboard",
    exact: true,
    main: ({ history, match }) => (
      <AccountDashBoardPage history={history} match={match} />
    ),
  },
  {
    path: "/customer/account/myorder",
    exact: true,
    main: ({ history, match }) => (
      <MyOrder history={history} match={match} />
    ),
  },
  {
    path: "/customer/account/billing",
    exact: true,
    main: ({ history, match }) => (
      <Billing history={history} match={match} />
    ),
  },
  {
    path: "/customer/account/mywishlist",
    exact: true,
    main: ({ history, match }) => (
      <MyWishlist history={history} match={match} />
    ),
  },
  {
    path: "/customer/account/addnewadress",
    exact: true,
    main: ({ history, match }) => (
      <AddNewAdreess history={history} match={match} />
    ),
  },
  {
    path: "/result",
    exact: true,
    main: ({ history, match }) => (
      <SearchResultPage history={history} match={match} />
    ),
  },
  {
    path: "/onestepcheckout",
    exact: true,
    main: ({ history, match }) => (
      <OneStepCheckoutPage history={history} match={match} />
    ),
  },
];

export default routes;
