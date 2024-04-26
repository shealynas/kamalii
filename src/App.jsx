import "normalize.css";
import "./App.css";
import TicketButton from "./TicketButton";
import Logo from "./images/Logo.png";
import BoyFishing from "./images/BoyFishing.jpg";
import GirlFishing from "./images/GirlFishing.jpg";
import Host from "./images/Host.png";
import sponsors from "./images/sponsors.png";

function App() {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="logo" />
        <p>about</p>
        <p>follow us</p>
        <p>instagram</p>
        <p>facebook</p>
      </div>
      <div className="bg-img-container">
        <img className="bg-img" src={BoyFishing} alt="" />
      </div>
      <h1 className="title">Kamali&#x2BB;i Fishing Challenge</h1>
      <h2 className="sub-title">Hawai&#x2BB;i's Largest Annual</h2>
      <h2 className="sub-title">Keiki Fishing Event</h2>
      <TicketButton
        text="Get Tickets"
        href="https://unkokimo.ticketbud.com/keikiokahammaz-is-da-future"
      />
      <div className="host-section">
        <img className="host-img" src={Host} alt="" />
        <p className="host-content">
          Hosted by <br /> Port Allen <br />
          Fishing Club
        </p>
      </div>
      <div className="about-section">
        <p>
          In the heart of Kauai’s west side, where recreational programs for
          children are few, a new initiative was born: Kamali`i Fishing
          Challenge. Launched by the Port Allen Fishing Club and spearheaded by
          Margie Goodman, the event seeks to provide an enriching experience for
          both youth and adults alike. Norman Kali, a driving force behind the
          project, envisioned a community-centered, local style celebration
          uniting hundreds of children and their families. With strong support
          from island sponsors, this effort seeks to demonstrate that on Kaua`i,
          our strength is in our collective spirit.
        </p>

        <img className="about-img" src={GirlFishing} alt="" />
      </div>
      <div className="ig-feed"></div>
      <div className="sponsors-section">
        <p className="sponsor-content">Big Mahalos To Our Sponsors!</p>
        <img className="sponsors-img" src={sponsors} alt="" />
      </div>
    </>
  );
}

export default App;
