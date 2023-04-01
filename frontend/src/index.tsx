import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './movies';
import Layout from './Layout';
import './index.css';
import Podcasts from './podcasts';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

//Here we establish the elements that go with certain pathways, which will be referenced in the
//navbar and elsewhere.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="podcasts" element={<Podcasts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
