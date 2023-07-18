import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

import Home from "./pages/home_page/Home.js";
import Account from "./pages/account_page/Account.js";
import CaseOpeningPage from "./pages/case_opening_page/CaseOpeningPage.js";

function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/pages/account_page/Account.js" element={<Account />} />
          <Route path="/pages/case_opening_page/CaseOpeningPage.js" element={<CaseOpeningPage />} />

        </Routes>

      <Footer />

      </Router>
    </div>
  );
}

export default App;
