import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { Slider } from "../../Slider/Slider";

const Home = (): ReactElement => {
  return (
    <Container fluid className="px-0">
      <Slider
        url={
          "https://images.unsplash.com/photo-1731759992333-909811e3070c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ></Slider>
    </Container>
  );
};

export default Home;
