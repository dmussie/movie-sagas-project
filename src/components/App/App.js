import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  // this return renders this entire application
  // a router is implimented which defines the pathways
  // for each component in this application
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>   
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/detail" exact>
          <MovieDetail />
        </Route>
        <Route path="/addmovie" exact>
          <AddMovie/>        
        </Route>
      </Router>
    </div>
  );
}


export default App;
