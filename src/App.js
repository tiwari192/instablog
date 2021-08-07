
import Home from './Home.js';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route>
              <PageNotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
