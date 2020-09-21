import React from "react";
import ListProduct from "./ListProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPosts from "./ListPosts";
import DetailPost from "./DetailPost";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={({ match: { url } }) => {
              return <div>Selamat Datang </div>;
            }}
          />
          <Route path="/product" component={ListProduct} />
          <Route path="/posts" component={ListPosts} />
          <Route path="/detail-post/:id" component={DetailPost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
