import { Routes, Route, Outlet, Link } from "react-router-dom";
import * as images from "./img";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Link to="/">
            <img src={images.hero} alt="image" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>Work</li>
            <li>
              <Link to="/developer">Developer</Link>
            </li>
            <li>
              <Link to="/max">Max MSP</Link>
            </li>
            <li>Links</li>
            <li>
              <Link to="/cv">CV</Link>
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
          <img src={images.home} alt="image" />
        </div>
        <div className="img-div">
          <img src={images.home2} alt="image" />
        </div>
      </div>
      <div className="row">
        <div className="img-div">
          <img src={images.home3} alt="image" />
        </div>
        <div className="img-div">
          <img src={images.home4} alt="image" />
        </div>
      </div>
      <div className="row">
        <div className="img-div">
          <img src={images.home5} alt="image" />
        </div>
        <div className="img-div">
          <img src={images.home6} alt="image" />
        </div>
      </div>
    </div>
  );
}

function Developer() {
  return (
    <div className="content">
      <h2>Developer</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, quam iste error itaque, nobis soluta, laborum quas exercitationem harum porro corrupti accusantium distinctio modi similique nostrum facere! Accusamus, veritatis reprehenderit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor illo perferendis a commodi consequatur! Earum repellat nostrum illo quis itaque eos voluptatum quibusdam accusantium, similique enim dolorum eum ratione modi.
      </p>
    </div>
  );
}

function Max() {
  return (
    <div className="content">
      <h2>Max MSP</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi odio illum labore et perferendis accusamus error assumenda sunt soluta facere totam dolore at, placeat quidem eius qui suscipit incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugiat, nam neque minima reprehenderit a, fuga blanditiis et magni, repudiandae amet esse. Neque suscipit vitae, totam iusto et ducimus voluptatibus.</p>
    </div>
  );
}

function CV() {
  return (
    <div className="content">
      {/* <h2>Nothing to see here!</h2> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nemo aut nobis assumenda veritatis minus dolorem? Odit quos fugiat facere doloremque eum, culpa in placeat necessitatibus, esse, praesentium officiis temporibus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, mollitia dolor, laudantium assumenda deserunt doloribus repellendus aperiam quidem deleniti nisi quaerat temporibus! Suscipit reprehenderit mollitia molestiae vel at in. Sequi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti maiores cum nobis fugiat culpa perspiciatis nesciunt, reiciendis fugit pariatur provident suscipit ullam, quibusdam consectetur. Expedita saepe repudiandae voluptatum amet quo!
      </p>
    </div>
  );
}

function NoMatch() {
  return (
    <div className="content">
      {/* <h2>Nothing to see here!</h2> */}
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
