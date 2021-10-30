import NavbarNoBanner from "./existing_html/NavbarNoBanner";
import HomePage from "./existing_html/HomePage";
import Footer from "./existing_html/Footer";
import About from "./existing_html/About";
import Contact from "./existing_html/Contact";
import Sanctuary from "./existing_html/Sanctuary";
import Projects from "./existing_html/Projects";
import Shelter from "./existing_html/Shelter";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const useCss = (href) => {
  const [isLinkElementLoaded, setLinkElementLoaded] = useState(false)

  useEffect(() => {
    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("type", "text/css");
    linkElement.setAttribute(
      "href",
      href
    );
    document.head.appendChild(linkElement);

    setLinkElementLoaded(true)
  }, []);
  return isLinkElementLoaded;
}

const useScript = url => {
  const [isScriptElementLoaded, setScriptElementLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);
    setScriptElementLoaded(true);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
  return isScriptElementLoaded;
};

function App() {
  const isFontLoaded = useCss("https://fonts.googleapis.com/css?family=Roboto:300,400");
  const isJQueryLoaded = useScript("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");


  return (
    <div>
      {
        isFontLoaded 
        && isJQueryLoaded 
        && (
          <Router>
            <NavbarNoBanner />
            <Switch>
              <Route path={`${process.env.PUBLIC_URL}/about`}><About /></Route>
              <Route path={`${process.env.PUBLIC_URL}/contact`}><Contact /></Route>
              <Route path={`${process.env.PUBLIC_URL}/projects/shelter`}><Shelter /></Route>
              <Route path={`${process.env.PUBLIC_URL}/projects/sanctuary`}><Sanctuary /></Route>
              <Route path={`${process.env.PUBLIC_URL}/projects`}><Projects /></Route>
              <Route path="/"><HomePage /></Route>
            </Switch>
            <Footer />
          </Router>
        )
      }
    </div>
  )

}

export default App;
