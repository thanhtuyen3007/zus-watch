import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { Slider } from "../../Slider/Slider";
import { Banner } from "../../Banner/Banner";
import { OurBrand } from "../../OurBrand/OurBrand";
import CollectionSection from "../../CollectionSection/CollectionSection";

// Home component
const Home = (): ReactElement => {
  return (
    <Container fluid className="px-0">
      {/* Slider component */}
      <Slider url="https://images.unsplash.com/photo-1731759992338-f44243163ba4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Slider>
      {/* Banner component */}
      <Banner
        title="New Collection"
        desc=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
        url="https://images.unsplash.com/photo-1677331785412-066c8646fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        linkToCollection="/collection"
      ></Banner>
      {/* TheBrand component */}
      <OurBrand />
      <CollectionSection/>
    </Container>
  );
};

export default Home;
