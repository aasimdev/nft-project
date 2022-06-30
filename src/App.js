import About from './views/About/About';
import './App.scss';
import Header from './constant/Header/Header';
import Home from './views/Home/Home';
import { Routes, Route, useLocation } from 'react-router-dom'
import NftMember from './views/NftMember/NftMember';
import Footer from './constant/Footer/Footer';

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="nft-member" element={<NftMember />} />
      </Routes>
      {pathname != '/' ?
        <Footer />
        : null}

    </>
  );
}

