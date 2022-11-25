import './App.css';
import HotDeals from './Components/HotDeals';
import Navbar from './Components/Navbar';
import SearchItems from './Components/SearchItems';
import TodayHotDeals from './Components/TodayHotDeals';


function App() {

  return (
    <div className='customContainer'>
      <Navbar></Navbar>
      <HotDeals></HotDeals>
      <TodayHotDeals></TodayHotDeals>
      <SearchItems></SearchItems>
    </div>
  );
}

export default App;
