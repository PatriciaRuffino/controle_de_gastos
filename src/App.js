import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Home from "./components/pages/Home.js";
import Contact from "./components/pages/Contact.js";
import Company from "./components/pages/Company.js";
import NewProject from "./components/pages/NewProject.js";
import Projects from "./components/pages/Projects.js";
import Container from "./components/layout/Container.js";

import Footer from "./components/layout/Footer.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
