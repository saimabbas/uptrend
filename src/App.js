import MetaverseMarketing from "./views/MetaverseMarketing";
import EventMarketing from "./views/EventMarketing";
import InfluencerMarketing from "./views/InfluencerMarketing";
import Home from "./views/Home";
import LinksPage from "./views/Links";
import {
  BrowserRouter as Switch,
  Routes,
  Route,
  Router,
  useLocation,
} from "react-router-dom";
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

import React, { useEffect, useRef } from "react";

function App() {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path="/links" element={<LinksPage />} />
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
          <Route exact path="/pressandmedia/" element={<PressAndMedia />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route
            exact
            path="/Blog/Working-With-Leading-YouTube-Influencers:A-How-To-Guide"
            element={<Blog1 />}
          />
          <Route
            exact
            path="/Blog/3-Proven-Strategies-To-Building-Brand-Awareness-In-2022"
            element={<Blog2 />}
          />
          <Route
            exact
            path="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022(Part1)"
            element={<Blog3 />}
          />
          <Route
            exact
            path="/Blog/The-Art-of-SEO:Proven-Search-Engine-Strategies"
            element={<Blog4 />}
          />

          <Route
            exact
            path="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022(Part2)"
            element={<Blog5 />}
          />
          <Route
            exact
            path="/Blog/Top-Regions-With-The-Best-Marketing-Performance"
            element={<Blog6 />}
          />
          <Route
            exact
            path="/Blog/New-Local-Region-Tips-To-Get-Started"
            element={<Blog7 />}
          />
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

/* 

1. CHange chart animations on all pages ...DONE...
2. Change images 
3. Do bees and mission animations
4. Put videos in place of images 
5. Blog Click Issue

*/
