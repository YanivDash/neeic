import About from "../ABOUT/About";
import Banner from "./Banner/Banner";
import ServiceCards from "../SERVICES/ServiceCards";
import Reviews from "../REVIEWS/Reviews";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ServiceCards />
      <Reviews />
    </div>
  );
};

export default Home;
