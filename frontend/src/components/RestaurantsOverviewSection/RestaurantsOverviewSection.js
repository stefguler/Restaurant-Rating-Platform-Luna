import CategoryDropdown from "./CategoryDropdown/CategoryDropdown.js";
import ListFilterContainer from "./ListFilterContainer/ListFilterContainer.js";
import { useState } from "react";
import {
  RestaurantOverviewContainer,
  SearchBarContainer,
  SearchInput,
  RestaurantListFilterContainer,
  ListContainer,
  RestaurantListFilter,
  Underline,
} from "./RestaurantOverviewSection.styled";
import Header from "../Header-Footer/Header.js";
import Footer from "../Header-Footer/Footer";

export default function RestaurantOverview() {
  //const [users, setUsers] = useState([])
  //const token = useSelector(state => state.auth.accessToken)
  const [activeFilter, setActiveFilter] = useState("Restaurant");

  /*FETCH RESTAURANTS INIT

   //useEffect(() => {

       // if (token === undefined) navigate('/')

      
       const url = "https://motion.propulsion-home.ch/backend/api/users/?limit=250&offset=1000"
       const config = {
           method: "GET",
           headers: new Headers({
               "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`
           }),
           // body: JSON.stringify(jsObject)
       }
   
       fetch(url, config).then(
           response => response.json())
           // .then(
           //     data => setNotificationCount(data.count))
           .then(
               data => setUsers(data.results))

   }, [token]); */

  const handleActivateFilter = e => {
    setActiveFilter(e);
    console.log(activeFilter);
  };

  return (
    <>
      <Header />
      <RestaurantOverviewContainer>
        <SearchBarContainer>
          <SearchInput placeholder="Search"></SearchInput>
          <CategoryDropdown />
        </SearchBarContainer>
        <RestaurantListFilterContainer>
          <ListFilterContainer
            name={"Restaurants"}
            className="active"
            activeFilter={activeFilter}
            isInit={true}
            onClick={handleActivateFilter}
          />
          <ListFilterContainer
            name={"Reviews"}
            activeFilter={activeFilter}
            isInit={false}
            onClick={handleActivateFilter}
          />
          <ListFilterContainer
            name={"Users"}
            activeFilter={activeFilter}
            isInit={false}
            onClick={handleActivateFilter}
          />
        </RestaurantListFilterContainer>
      </RestaurantOverviewContainer>
      <Footer />
    </>
  );
}
