import MetaverseMarketing from "./views/MetaverseMarketing";
import EventMarketing from "./views/EventMarketing";
import InfluencerMarketing from "./views/InfluencerMarketing";
import Home from "./views/Home";
import LinksPage from "./views/Links";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import TalkToUs from "./views/TalkToUs";
import UptrendGrowthStories from "./views/UptrendGrowthStories";
import InvestmentRelationships from "./views/InvestmentRelationships";
import Expertise from "./views/Expertise";
import Media from "./views/Media";
import UpTrendStore from "./views/UpTrendStore";
import Influencers from "./views/Influencers";
import PressAndMedia from "./views/PressAndMedia";
import Blog from "./views/Blog";
import Blog2 from "./views/Blog2";
import Blog4 from "./views/Blog4";
import Blog5 from "./views/Blog5";

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
          <Route exact path="/talktous" element={<TalkToUs />} />
          <Route
            exact
            path="/uptrendgrowthstories"
            element={<UptrendGrowthStories />}
          />
          <Route
            exact
            path="/investmentrelationships"
            element={<InvestmentRelationships />}
          />
          <Route exact path="/expertise" element={<Expertise />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/uptrendstore" element={<UpTrendStore />} />
          <Route exact path="/influencers" element={<Influencers />} />
          <Route exact path="/pressandmedia" element={<PressAndMedia />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog2" element={<Blog2 />} />
          <Route exact path="/blog4" element={<Blog4 />} />
          <Route exact path="/blog5" element={<Blog5 />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
