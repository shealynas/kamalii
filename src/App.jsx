import "normalize.css";
import "./App.css";

import { InstagramEmbed } from "react-social-media-embed";
import TicketButton from "./TicketButton";
import Logo from "./images/Logo.png";
import BoyFishing2 from "./images/BoyFishing2.jpg";
import GirlFishing2 from "./images/GirlFishing2.jpg";
import Host from "./images/Host.png";
import Logo2 from "./images/Logo2.png";
import sponsors from "./images/sponsors.png";

function App() {
  return (
    <>
      {/* <div className="header">
        <img src={Logo} alt="logo" />
        <p>about</p>
        <p>follow us</p>
        <p>instagram</p>
        <p>facebook</p>
      </div> */}
      <div className="bg-img-container">
        <img className="bg-img" src={BoyFishing2} alt="" />

        <div className="top-info">
          <div className="transparent-bg">
            <h1 className="title">Kamali&#x2BB;i Fishing Challenge</h1>

            <h2 className="sub-title">Hawai&#x2BB;i's Largest </h2>
            <h2 className="sub-title">Keiki Fishing Event</h2>

            <p className="sub-info">An Annual Celebration Hosted By</p>
            <p className="sub-info2">Port Allen Fishing Club</p>
          </div>
          <div className="ticket-btn-container">
            <p className="register">Register To Attend</p>
            <TicketButton
              text="Get Tickets"
              href="https://unkokimo.ticketbud.com/keikiokahammaz-is-da-future"
            />
          </div>
        </div>
      </div>
      {/* <div className="host-section">
        
        <p className="host-content">
          Hosted by <br /> Port Allen <br />
          Fishing Club
        </p>
      </div> */}
      <div className="about-section">
        <img className="about-img" src={GirlFishing2} alt="" />
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
      </div>
      <div className="ig-feed">
        {/* <p>Stay Updated</p> */}
        <div style={{ display: "flex", justifyContent: "start" }}>
          <InstagramEmbed
            className="profile"
            url="https://www.instagram.com/kamalii_challenge/?utm_source=ig_embed&ig_rid=6cfa3df0-fd64-42ff-b20e-851d2e0f67b8"
            width={1250}
          />
          <img className="host-img" src={Host} alt="" />
          <img className="logo-img" src={Logo} alt="" />
        </div>
      </div>
      <div className="sponsors-section">
        <p className="sponsors-content">
          Mahalo To Our Sponsors! or Sponsor Shoutout
        </p>
        <img className="sponsors-img" src={sponsors} alt="" />
      </div>
      <footer></footer>
    </>
  );
}

export default App;
