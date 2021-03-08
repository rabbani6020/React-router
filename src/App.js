
import React from "react";
import {
   BrowserRouter,
   Switch,
   Route
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HomePart2 from "./components/HomePart2";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
   return (
      <BrowserRouter>

         <Header />

         <Switch>
            <Route exact path="/">
               <Home />
               <HomePart2 />
            </Route>
            <Route path="/about">
               <About />
            </Route>
            <Route path="/contact">
               <Contact />
            </Route>
         </Switch>

         <Footer />
         
      </BrowserRouter>
   );
}

export default App;

