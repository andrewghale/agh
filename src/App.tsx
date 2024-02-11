import { Routes, Route, Outlet, Link } from "react-router-dom";
import * as images from "./img";
import Max from "./Max";
import Developer from "./Developer";
import CV from "./CV";
import NoMatch from "./NoMatch";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/agh" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="developer" element={<Developer />} />
          <Route path="max" element={<Max />} />
          <Route path="cv" element={<CV />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="main">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <div className="sidebar">
        <div className="title">
          <Link to="/agh/">
            <img src={images.hero} alt="image" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>Work</li>
            <li>
              <Link to="developer">Developer</Link>
            </li>
            <li>
              <Link to="max">Max MSP</Link>
            </li>
            <li>Links</li>
            <li>
              <Link to="cv">CV</Link>
            </li>
            <li>
              <a href="https://github.com/andrewghale">Github</a>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div className="content">
      <div className="row">
        <div className="img-div">
          <img className="hover-zoom" src={images.home} alt="image" />
        </div>
        <div className="img-div">
          <img className="hover-zoom" src={images.home2} alt="image" />
        </div>
        <div className="img-div">
          <img className="hover-zoom" src={images.home3} alt="image" />
        </div>
      </div>
      <div className="row">
        <div className="img-div">
          <img className="hover-zoom" src={images.home4} alt="image" />
        </div>
        <div className="img-div">
          <img className="hover-zoom" src={images.home5} alt="image" />
        </div>
        <div className="img-div">
          <img className="hover-zoom" src={images.home6} alt="image" />
        </div>
      </div>
    </div>
  );
}