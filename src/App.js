import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

import Home from "./pages/home_page/Home.js";
import Account from "./pages/account_page/Account.js";
import CaseOpeningPage from "./pages/case_opening_page/CaseOpeningPage.js";

import DepositWindow from "./pop-up_windows/deposit_window/Deposit.js";
import PromoStatus from "./pop-up_windows/deposit_window/PromoStatus.js";

import accountLogo from "./img/icons/account.png";


function App() {

  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState(0.00);
  const [promoStatus, setPromoStatus] = useState(null);
  const [accountItems, setAccountItems] = useState([]);
  const [casesOpened, setCasesOpened] = useState(0);
  

  const handleWalletClick = () => setVisible(true);
  const handleSetBalance = () => setBalance((balance) => balance + 10.5);
  const handleSetItemSaleBalance = (itemPrice) => setBalance((balance) => balance + itemPrice);

  const addItemToAccount = (itemData) => {
    setAccountItems((prevItems) => [...prevItems, itemData]);
    setCasesOpened((casesOpened) => casesOpened + 1);
  };

  const sellAccountItem = (itemPrice, index) => {
    
    handleSetItemSaleBalance(itemPrice);

    const updatedAccountItems = [...accountItems];
    updatedAccountItems.splice(index, 1);

    setAccountItems(updatedAccountItems);
  }

  return (
    <div className="App">
      <Router>

        <Header onWalletClick={handleWalletClick} balance={balance} />

        <DepositWindow visible={visible} setVisible={setVisible} setBalance={handleSetBalance} setPromoStatus={setPromoStatus} />
        <PromoStatus promoStatus={promoStatus} setPromoStatus={setPromoStatus} />

        

        <Routes>

          <Route path="/mystery-box-project" element={<Home />} />
          <Route path="/pages/account_page/Account.js" element={<Account accountItems={accountItems} sellAccountItem={sellAccountItem} accountLogo={accountLogo} casesOpened={casesOpened} />} />
          <Route path="/pages/case_opening_page/CaseOpeningPage.js" element={<CaseOpeningPage balance={balance} setBalance={setBalance} addItemToAccount={addItemToAccount} />} />

        </Routes>

      <Footer />

      </Router>
    </div>
  );
}

export default App;
