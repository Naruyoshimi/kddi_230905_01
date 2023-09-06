import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import "./App.css";
const container = {
  width: "75%",
  height: "500px"
};

const position = {
  lat: 26.216841151924207,
  lng: 127.67918386809181
};

function App() {
  return (
    <>
      <h2>React & Google Map</h2>
      <div className="wrap">
        <LoadScript googleMapsApiKey="AIzaSyBkVf8mvOwMcwGDWF-Ry0HoKAJ5MF6Dsws">
          <GoogleMap mapContainerStyle={container} center={position} zoom={15}>
            <MarkerF
              position={position}
              label={"ファミリーマート 那覇店 在庫「◯」"}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
}

export default App;
