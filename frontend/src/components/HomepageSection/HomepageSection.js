import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import {
  HomepageBanner,
  InputContainer,
  Button,
  SearchInput,
  HomepageContainer,
  PageTitle,
  Separator,
  RestaurantCardGrid,
} from "./HomepageSection.styled";
import RestaurantCard from "./RestaurantCard";

export default function Homepage() {
  //const [users, setUsers] = useState([])
  //const token = useSelector(state => state.auth.accessToken)

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

  const restaurantObject1 = {
    title: "restaurant 1",
    adress: "dummyadress 1",
    rating: 2,
    ratingCount: 31,
  };

  const restaurantObject2 = {
    title: "restaurant 2",
    adress: "dummyadress 2",
    rating: 4,
    ratingCount: 35,
  };

  const restaurantObject3 = {
    title: "restaurant 3",
    adress: "dummyadress 3",
    rating: 3.5,
    ratingCount: 10,
  };

  return (
    <>
      <Header />
      <HomepageContainer>
        <HomepageBanner
          src="luna_banner.png"
          alt="luna banner"
        ></HomepageBanner>
        <InputContainer>
          <SearchInput type="text" placeholder="Search..."></SearchInput>
          <Button>Search </Button>
        </InputContainer>
        <PageTitle> Best rated restaurants</PageTitle>
        <Separator></Separator>
        <RestaurantCardGrid>
          <RestaurantCard restaurant={restaurantObject1}></RestaurantCard>
          <RestaurantCard restaurant={restaurantObject2}></RestaurantCard>
          <RestaurantCard restaurant={restaurantObject3}></RestaurantCard>
          <RestaurantCard restaurant={restaurantObject3}></RestaurantCard>
          <RestaurantCard restaurant={restaurantObject2}></RestaurantCard>
        </RestaurantCardGrid>
      </HomepageContainer>
      <Footer />
    </>
  );
}
