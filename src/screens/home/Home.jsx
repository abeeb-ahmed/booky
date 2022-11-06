import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h2>Browse by property type</h2>
        <PropertyList />
        <h2>Featured properties</h2>
        {/* <FeaturedProperties /> */}
      </div>
    </div>
  );
};

export default Home;
