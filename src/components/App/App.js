import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <p>
          <Link to="/addmovie">Add New Movie</Link>  
        </p>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/detail">
          <MovieDetail />
        </Route>
        

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
