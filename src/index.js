import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/home";
import { url } from "./constants/navhome";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "antd/dist/antd.css";
import "bulma/css/bulma.css";
import "./main.css";
import Contact from "./components/contactus/contactus";
import Services from "./components/services/services";
import Clients from "./components/clients/clients";
import Expertise from "./expertise/expertise";
import Standards from "./components/standards/standards";
import Management from "./components/management/management";
import Whoweare from "./components/whoweare/whoweare";
import Awards from "./components/awards/awards";
import Residential from "./components/projects/residential";
import Csr from "./components/csr/csr";
import Commercial from "./components/projects/commercial";
import Institutionalprojects from "./components/projects/institutionalprojects";
import Industrial from "./components/projects/industrial";
import Gallery from "./components/gallery/gallery";
import Careers from "./components/careers/careers";
import Header1 from "./components/header/header1";
import Machinery from "./components/Expertise/Machinery";
import Formwork from "./components/Expertise/Formwork";
import Technology from "./components/Expertise/Technology";
import Ourclients from "./components/clients/Ourclients";
import Architech from "./components/clients/Architect";

const Main = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [path]);
  return (
    <>
      <Header1 />
      <Routes>
        <Route path={url.home} element={<Home />} />
        <Route path={url.residential} element={<Residential />} />
        <Route path={url.services} element={<Services />} />
        <Route path={url.clients} element={<Clients />} />
        <Route path={url.Contact} element={<Contact />} />
        <Route path={url.standards} element={<Standards />} />
        <Route path={url.expertise} element={<Expertise />} />
        <Route path={url.management} element={<Management />} />
        <Route path={url.whoweare} element={<Whoweare />} />
        <Route path={url.commercial} element={<Commercial />} />
        <Route path={url.award} element={<Awards />} />
        <Route path={url.csr} element={<Csr />} />
        <Route path={url.industrial} element={<Industrial />} />
        <Route path={url.gallery} element={<Gallery />} />
        <Route path={url.careers} element={<Careers />} />
        <Route path={url.machinery} element={<Machinery />} />
        <Route path={url.formwork} element={<Formwork />} />
        <Route path={url.technology} element={<Technology />} />
        <Route path={url.ourclients} element={<Ourclients />} />
        <Route path={url.architech} element={<Architech />} />

        <Route
          path={url.institutionalprojects}
          element={<Institutionalprojects />}
        />
      </Routes>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
