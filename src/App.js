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
import Blog1 from "./views/Blog1";
import Blog2 from "./views/Blog2";
import Blog4 from "./views/Blog4";
import Blog5 from "./views/Blog5";
import Blog3 from "./views/Blog3";
import Blog6 from "./views/Blog6";
import Blog7 from "./views/Blog7";
import Events from "./views/Events";
import Sandbox from "./views/Sandbox";
import AngelsProgram from "./views/AngelsProgram";
import UptrendCareer from "./views/UptrendCareer";

function App() {
  return (
    <>
      <Switch>
        <Routes>
          {/* <Route exact path="/" element={<LinksPage />} /> */}
          <Route exact path="/" element={<Home />} />
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
          <Route exact path="/blog1" element={<Blog1 />} />
          <Route exact path="/blog2" element={<Blog2 />} />
          <Route exact path="/blog3" element={<Blog3 />} />
          <Route exact path="/blog4" element={<Blog4 />} />
          <Route exact path="/blog5" element={<Blog5 />} />
          <Route exact path="/blog6" element={<Blog6 />} />
          <Route exact path="/blog7" element={<Blog7 />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/sandbox" element={<Sandbox />} />
          <Route exact path="/angelsprogram" element={<AngelsProgram />} />
          <Route exact path="/uptrendcareer" element={<UptrendCareer />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
