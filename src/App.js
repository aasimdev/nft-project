import About from './views/About/About';
import './App.scss';
import Header from './constant/Header/Header';
import Home from './views/Home/Home';
import { Routes, Route, useLocation } from 'react-router-dom'
import NftMember from './views/NftMember/NftMember';
import Footer from './constant/Footer/Footer';
import NftDrop from './views/NftMember/NftDrop/NftDrop';
import ForSale from './views/NftMember/ForSale/ForSale';
import PastTransaction from './views/NftMember/PastTransactions/PastTransaction';
import ListofTicketHolder from './views/NftMember/ListofTickets/ListofTicketHolder';

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index={true} element={<Home />} />
        </Route>
        <Route path='about'>
          <Route index={true} element={<About />} />
        </Route>
        <Route path="nft-member">
          <Route index={true} element={<NftMember />} />
          <Route index={false} path='nft-drop' element={<NftDrop />} />
          <Route index={false} path='for-sale' element={<ForSale />} />
          <Route index={false} path='past-transaction' element={<PastTransaction />} />
          <Route index={false} path="list-of-ticket-holder" element={<ListofTicketHolder />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
      {pathname != '/' ?
        <Footer />
        : null}

    </>
  );
}

