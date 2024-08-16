import React from "react";
import { Container, Grid } from "@mui/material";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* by default, html is a 12x12 grid, as are all elements
Routes was formerly named Switch*/

function App() {
  return (
    <Container className="top_60">
      {" "}
      {/*imported from material UI, rescales elements in it*/}
      <Grid container spacing={7}>{/*adds spacing between all containers*/}
        <Grid item xs={12} sm={12} md={4} lg={3}>
          {/*Define how much space to take based on screen size - ranges from xl to xs, 1 - 12*/}
          <Profile />
        </Grid>
        <Grid item xs>
          {/*just the size category takes the remaining space*/}
          <Header />
          <Router>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/Resume" element={<Resume />}></Route>
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
