import AboutUs from "./About us/AboutUs";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Support from "./Support/Support";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Support></Support>
      <Products></Products>
      <Team></Team>
      <h1 className="text-3xl">This is home page</h1>
    </div>
  );
};

export default Home;