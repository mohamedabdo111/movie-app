import Navbarr from "./component/navbar";
import Movielist from "./component/movielist";
import { Container } from "react-bootstrap";
import Details from "./component/details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbarr></Navbarr>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movielist></Movielist>}></Route>
            <Route path="/movie/:id" element={<Details></Details>}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
