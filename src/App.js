import './App.css';
import { Footer, Header } from './component';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
