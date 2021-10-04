import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMovie from '../AddMovie/AddMovie';

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
        <Route path="/detail" exact>
          <MovieDetail />
        </Route>
        <Route path="/addmovie" exact>
          <AddMovie/>        
        </Route>
        

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
