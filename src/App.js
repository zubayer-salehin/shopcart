import './App.css';
import Deals from './Components/Deals';
import Footer from './Components/Footer';
import HotDeals from './Components/HotDeals';
import Navbar from './Components/Navbar';
import Review from './Components/Review';
import SearchItems from './Components/SearchItems';
import TodayHotDeals from './Components/TodayHotDeals';


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <HotDeals></HotDeals>
      <TodayHotDeals></TodayHotDeals>
      <SearchItems></SearchItems>
      <Deals></Deals>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}

export default App;
