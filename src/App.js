import { useLoadScript} from "@react-google-maps/api"
import './App.css';
import Map from "./Map";

function App() {
  const {isLoaded}= useLoadScript({
    googleMapsApiKey:"AIzaSyAhNLAo_Iu6xvnUUglEPCRAPmN2gkejXic"
  })

  if(!isLoaded)return <div>Loading....</div>
  return (
  <Map/>
  );
}

export default App;
