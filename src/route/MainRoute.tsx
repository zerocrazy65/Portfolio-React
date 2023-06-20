import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/Home";
import Contact from "../components/Contact";
import MyWork from "../components/Work";
import PersonalInfo from "../components/PersonalInfo";
const MainRoute = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>
   );
};

export default MainRoute;
