import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import SearchBar from "./Components/search-bar";
import Navbars from "./Components/navbar";

function App() {
  return (
      <BrowserRouter>
        <div>
            <Route exact path="/" component={SearchBar}/>
          {/* <SearchBar/> */}
        </div>
        </BrowserRouter>
  );
}

export default App;
