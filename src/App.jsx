import "normalize.css";
import "./App.css";
import TicketButton from "./TicketButton";
import BoyFishing from "./images/BoyFishing.jpg";

function App() {
  return (
    <>
      <div className="header">
        <img src="" alt="logo" />
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
    </>
  );
}

export default App;
