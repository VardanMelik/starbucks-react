import './App.css';
import Logo from './assets/logo.svg';
import MarkerImg from './assets/marker.svg';

function App() {
  return (
    <div className="">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="#">
              <img src={Logo} alt="Starbucks" />
            </a>
          </div>

          <ul className="navbar-nav-left">
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Rewards</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>

          <ul className="navbar-nav-right">
            <li>
              <a href="#">
                <img src={MarkerImg} alt="marker" />
                <span>Find a store</span>
              </a>
            </li>
            <li>
              <button className="btn btn-dark-outline">
                Sign In
              </button>
            </li>
            <li>
              <button className="btn btn-dark">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Box A */}
      <section className="box box-a bg-primary text-center py-md">
        <div className="box-inner">
          <h2 className="text-xl">JINGLE ALL THE WAY TO FREE FAVORITES</h2>  
          <p className="text-md">Join Starbucks® Rewards for delicious deals & exclusive offers.
            <a href="#">Learn more</a>
          </p>
        </div>  
      </section>      



    </div>
  );
}

export default App;
