import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  Services,
  Navbar,
  SubHeader,
  Contact,
  Footer,
} from "./component";

function App() {
  return (
    <BrowserRouter>
      <SubHeader />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
