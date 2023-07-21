import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

import Home from "./pages/home_page/Home.js";
import Account from "./pages/account_page/Account.js";
import CaseOpeningPage from "./pages/case_opening_page/CaseOpeningPage.js";

import DepositWindow from "./pop-up_windows/deposit_window/Deposit.js";
import PromoStatus from "./pop-up_windows/deposit_window/PromoStatus.js";

function App() {

  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState(0.00);
  const [promoStatus, setPromoStatus] = useState(null);

  const handleWalletClick = () => setVisible(true);
  const handleSetBalance = () => setBalance((balance) => balance + 10.5);

  return (
    <div className="App">
      <Router>

        <Header onWalletClick={handleWalletClick} balance={balance} />

        <DepositWindow visible={visible} setVisible={setVisible} setBalance={handleSetBalance} setPromoStatus={setPromoStatus} />
        <PromoStatus promoStatus={promoStatus} setPromoStatus={setPromoStatus} />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/pages/account_page/Account.js" element={<Account />} />
          <Route path="/pages/case_opening_page/CaseOpeningPage.js" element={<CaseOpeningPage balance={balance} setBalance={setBalance} />} />

        </Routes>

      <Footer />

      </Router>
    </div>
  );
}

export default App;
