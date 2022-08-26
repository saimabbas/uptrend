import MetaverseMarketing from "./views/MetaverseMarketing";
import EventMarketing from "./views/EventMarketing";
import InfluencerMarketing from "./views/InfluencerMarketing";
import Home from "./views/Home";
import LinksPage from "./views/Links";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path="/" element={<LinksPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/influencermarketing"
            element={<InfluencerMarketing />}
          />
          <Route exact path="/eventmarketing" element={<EventMarketing />} />
          <Route
            exact
            path="/metaversemarketing"
            element={<MetaverseMarketing />}
          />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
