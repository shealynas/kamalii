import "normalize.css";
import "./App.css";
import { InstagramEmbed } from "react-social-media-embed";
import { TfiInstagram } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { PiMapPinLight } from "react-icons/pi";

import TicketButton from "./TicketButton";
import Logo from "./images/Logo.png";
// import BoyFishing2 from "./images/BoyFishing2.jpg";
import GirlFishing2 from "./images/GirlFishing2.jpg";
import Host from "./images/Host.png";
import Logo2 from "./images/Logo2.png";
import sponsors from "./images/sponsors.png";
// import { SwiperSlide } from "swiper/react";
// import Swiper from "./Swiper/Swiper";
// import Collage from "./Collage";

function App() {
  return (
    <>
      <div className="bg-img-container">
        <div className="bg-img" alt="" />

        <div className="top-info">
          <div className="transparent-bg">
            <h1 className="title">Kamali&#x2BB;i Fishing Challenge</h1>

            <h2 className="sub-title">Hawai&#x2BB;i's Largest </h2>
            <h2 className="sub-title">Keiki Fishing Event</h2>

            <p className="sub-info">An Annual Celebration Hosted By</p>
            <p className="sub-info2">Port Allen Fishing Club</p>

            <div className="ticket-btn-container">
              <p className="register">Register To Attend</p>
              <TicketButton
                text="Get Tickets"
                href="https://unkokimo.ticketbud.com/keikiokahammaz-is-da-future"
              />
            </div>
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
          In the heart of Kauai&#x2BB;s west side, a new initiative was born:
          Kamali`i Fishing Challenge. Launched by the Port Allen Fishing Club
          and spearheaded by Margie Goodman, the event seeks to provide an
          enriching experience for all da generations. Norman Kali, a driving
          force behind the project, envisioned a community-centered, local style
          celebration uniting hundreds of keiki and their ohana. Fueled by
          unreal support from local sponsors, this effort proves that on Kaua`i,
          the strength of our home lies in our collective spirit, and community
          is the cornerstone of our beautiful identity.
        </p>
      </div>

      <div className="ig-feed-section">
        <p className="stay-updated-text">Stay Updated</p>
        <div className="ig-feed-content">
          <div>
            <InstagramEmbed
              className="profile"
              url="https://www.instagram.com/kamalii_challenge/?utm_source=ig_embed&ig_rid=6cfa3df0-fd64-42ff-b20e-851d2e0f67b8"
            />
          </div>
          <div className="logo-host-container">
            <img className="host-img" src={Host} alt="" />
            <img className="logo-img" src={Logo} alt="" />
          </div>
        </div>
      </div>

      {/* <Collage /> */}
      <div className="sponsors-section">
        <p className="sponsors-text">Mahalo Sponsors</p>
        <img className="sponsors-img" src={sponsors} alt="" />
      </div>
      {/* <div className="swiper-section">
        <Swiper />
      </div> */}
      <footer>
        <div className="footer-content">
          <div className="address-block">
            <a
              href="https://www.google.com/maps/place/Port+Allen+Small+Boat+Harbor/@21.901459,-159.5897108,17z/data=!3m1!4b1!4m6!3m5!1s0x7c07066cc2ad38db:0xe64b32d96d002915!8m2!3d21.9014788!4d-159.5895336!16s%2Fg%2F1tdcm59r?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              title="Map"
            >
              <PiMapPinLight className="map-icon" />
              <div className="icon-text">
                <p>Port Allen Harbor </p>
                <p>Ele&#x2BB;ele, HI 96705</p>
              </div>
            </a>
          </div>
          <div className="links-block">
            <div className="email-block">
              <a href="mailto:kamaliichallenge@gmail.com" title="Email:">
                <TfiEmail className="icon" />
                <p className="icon-text">kamaliichallenge@gmail.com</p>
              </a>
            </div>
            <div className="ig-block">
              <a
                href="https://www.instagram.com/kamalii_challenge/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <TfiInstagram className="icon" />
                <p className="icon-text">@kamaliichallenge</p>
              </a>
            </div>
          </div>

          <div className="register-block">
            <TicketButton
              className="ticketbtn"
              text="Register Here"
              href="https://unkokimo.ticketbud.com/keikiokahammaz-is-da-future"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

// style={{ display: "flex", justifyContent: "center" }}

export default App;
