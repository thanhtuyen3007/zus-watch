import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { Slider } from "../../components/Slider/Slider";
import { Banner } from "../../components/Banner/Banner";
import { OurBrand } from "../../components/OurBrand/OurBrand";
import { Mission } from "../../components/Mission/Mission";

// Home component
const Home = (): ReactElement => {
  return (
    <Container fluid className="px-0">
      {/* Slider component */}
      <Slider
        // url="https://images.unsplash.com/photo-1731759992333-909811e3070c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        url="https://res.cloudinary.com/djka3a0ah/image/upload/v1750401912/gcrfsgxts7snlgbwlhjo.jpg"
      />
      {/* Mission component */}
      <Mission
        slogan="Timeless Elegance, Crafted for You."
        mission="To deliver premium watches that blend style and precision, empowering individuality."
        url="https://images.unsplash.com/photo-1606750159182-3b3975faee66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      {/* Banner component */}
      <Banner
        title="New Collection"
        desc="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
        url="https://res.cloudinary.com/djka3a0ah/image/upload/v1744998004/sawdgmyeeus5c7d6blus.jpg"
        linkToCollection="/collection"
      ></Banner>
      {/* TheBrand component */}
      <OurBrand />
    </Container>
  );
};

export default Home;
