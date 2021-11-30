import './App.css';
import Logo from './assets/logo.svg';
import MarkerImg from './assets/marker.svg';
import BoxBLogo from './assets/new-year.png';
import BoxCLogo from './assets/box-c.png';
import BoxDLogo from './assets/box-d.png';
import BoxELogo from './assets/box-e.jpg';
import BoxFLogo from './assets/box-f1.jpg';
import SocialSpotifyLogo from './assets/social-spotify.svg';
import SocialFacebookLogo from './assets/social-facebook.svg';
import SociaPinterestLogo from './assets/social-pinterest.svg';
import SocialInstagramLogo from './assets/social-instagram.svg';
import SocialYoutubeLogo from './assets/social-youtube.svg';
import SocialTwitterLogo from './assets/social-twitter.svg';


/*function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));*/

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

          {/* Hamburger Menu */}
          <button type="button" className="hamburger" id="menu-btn">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
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

      {/* Box B */}
      <section className="box box-b bg-gray grid-col-2 grid-reversed">
        <img src={BoxBLogo} alt="Box B" />
        <div className="box-text">
          <h2 className="text-xl">STARBUCKS FOR LIFE</h2>
          <p className="text-md">Grab your favorite festive drink and play for the chance to win free coffee and so much more.*</p>
          <a href="" className="btn btn-light-outline">Play now</a>
        </div>
      </section>


      {/* Box C */}
      <section className="box box-c bg-secondary grid-col-2 grid-reversed">
        <img src={BoxCLogo} alt="Box C" />
        <div className="box-text">
          <h2 className="text-xl">BRULÉE BLISS</h2>
          <p className="text-md">One sip of our creamy and cozy Caramel Brulée Latte will put you in a festive state of mind.</p>
          <a href="" className="btn btn-light-outline">Order now</a>
        </div>
      </section>

      {/* Box D */}
      <section className="box box-d bg-primary grid-col-2">
        <img src={BoxDLogo} alt="Box D" />
        <div className="box-text">
          <h2 className="text-xl">CHILL AND BE MERRY</h2>
          <p className="text-md">Our Irish Cream Cold Brew is dressed up for the holidays with sweet cream cold foam and a strike of cocoa.</p>
          <a href="" className="btn btn-light-outline">Order now</a>
        </div>
      </section>

      {/* Box E */}
      <section className="box box-E bg-secondary grid-col-2 grid-reversed">
        <img src={BoxELogo} alt="Box E" />
        <div className="box-text">
          <h2 className="text-md">You vote, we give</h2>
          <p className="text-sm">This holiday season, The Starbucks Foundation is donating $1 million to strengthen communities—and you have a say in where it goes. Vote between Dec. 1-15.</p>
          <a href="" className="btn btn-light-outline">Cast your vote</a>
        </div>
      </section>

      {/* Box F */}
      <section className="box box-f grid-col-2">
        <div>
          <img src={BoxFLogo} alt="Box E" />
          <div className="bg-extra py-lg">
            <div className="box-text">
              <h2 className="text-md">You vote, we give</h2>
              <p className="text-sm">This holiday season, The Starbucks Foundation is donating $1 million to strengthen communities—and you have a say in where it goes. Vote between Dec. 1-15.</p>
              <a href="" className="btn btn-dark-outline">Cast your vote</a>
            </div>
          </div>

        </div>

        <div>
          <img src={BoxFLogo} alt="Box E" />
          <div className="bg-primary py-lg">
            <div className="box-text">
              <h2 className="text-md">You vote, we give</h2>
              <p className="text-sm">This holiday season, The Starbucks Foundation is donating $1 million to strengthen communities—and you have a say in where it goes. Vote between Dec. 1-15.</p>
              <a href="" className="btn btn-light-outline">Cast your vote</a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider">

      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="social">
            <a href="#">
              <img src={SocialSpotifyLogo} alt="Spotify" />
            </a>
            <a href="#">
              <img src={SocialFacebookLogo} alt="Facebook" />
            </a>
            <a href="#">
              <img src={SociaPinterestLogo} alt="Pinterest" />
            </a>
            <a href="#">
              <img src={SocialInstagramLogo} alt="Instagram" />
            </a>
            <a href="#">
              <img src={SocialYoutubeLogo} alt="Youtube" />
            </a>
            <a href="#">
              <img src={SocialTwitterLogo} alt="Twitter" />
            </a>
          </div>
          <p> 2021 Starbucks Coffee Company. All right reserved.</p>
        </div>
      </footer>



    </div>
  );
}

export default App;
