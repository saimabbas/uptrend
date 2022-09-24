import React from "react";
// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/blog.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import UTLogo from "../assets/icons/UTLogo";
import TikTokIcon from "../assets/img/tiktok-white-bg.svg";
import InstagramIcon from "../assets/img/instagram-white-bg.svg";
import YouTubeIcon from "../assets/img/youtube-white-bg.svg";
import Person from "../assets/img/blog-person.svg";
import JournalImg3 from "../assets/img/journal-img-3.svg";
import InfluencerLogo from "../assets/img/influencer-logo.svg";
import InfluTypeImg from "../assets/img/influtype.svg";
import BlueArrow from "../assets/icons/BlueArrow";
import OrangeBulb from "../assets/icons/OrangeBulb";

const Blog3 = () => {
  return (
    <main className="app">
      {/* <div className="loading-screen">
        <UTLogo color="#fff" />
      </div> */}
      <div className="blog-page">
        <div className="blog-page-content">
          <div className="box">
            <Header lightHeader={false} />
          </div>
          <div className="blog-content-wrapper">
            <div className="box box-p">
              <div className="blog-img-para">
                <div className="bipara-left">
                  <img src={Person} alt="" />
                  <div className="bi-text">
                    <h5>Emre Murry</h5>
                    <p>18.06.2022</p>
                  </div>
                </div>
                <span>5 mint read</span>
              </div>
              <div className="blog-main-content">
                <h3>
                  Top 5 Influencer Marketing Software Solutions To Boost Your
                  Brand In 2022 (Part 1)
                </h3>
                <p>
                  Today, influencer marketing has become a mainstream form of
                  online marketing. It is one of the most essential instruments
                  for brands that are looking to increase their brand awareness
                  and client acquisition. While it sounds simple enough, finding
                  the right influencer for a brand can get tricky.
                  <br />
                  <br />
                  To achieve permanent growth, one must find reputable and
                  relevant influencers to promote their brand. Also, to maximize
                  performance and protect the campaign, brands should be able to
                  detect potentially fraudulent activities. Given the size of
                  the influencer marketing sector, manually selecting the
                  best-suited influencer is nearly impossible. Luckily,
                  comprehensive software comes to the rescue!
                </p>
                <img src={JournalImg3} alt="BlogImg" />
                <h3>Comprehensive Software</h3>
                <p>
                  Using comprehensive software is one of the best ways to scout
                  and work with renowned influencers. These types of software
                  provide brands with in-depth influencer profile analytics,
                  such as engagement rates and audience reviews, allowing brands
                  to find and work with the right influencers seamlessly.
                  <br />
                  <br />
                  The Uptrend team has exclusively prepared the ultimate guide
                  for influencer marketing software solutions. Here are our top
                  5 picks!
                </p>
              </div>
              <div className="top-5-picks-box">
                <div className="pick-box-content">
                  <div className="pbc-top-grid">
                    <div className="pbc-top-grid-left">
                      <img src={InfluencerLogo} alt="InfluencerLogo" />
                      <div>
                        <h3>NoxInfluencer</h3>
                        <br />
                        <p>
                          NoxInfluencer is a comprehensive marketing software
                          located in Singapore. It boasts 20 million creators to
                          offer Influencer Discovery and Outreach, Influencer
                          Relationship Management, Campaign Running, and Social
                          Media Analytics. Its additional tools specifically
                          designed for YouTube makes NoxInfluencer stand out as
                          one of the top software to manage influencers on the
                          popular video platform.
                        </p>
                      </div>
                    </div>
                    <div className="pbc-top-grid-right">
                      <div className="pbc-right-grid-card">
                        <h5>Contact details:</h5>
                        <br />
                        <p>Located in Singapore</p>
                        <a href="https://www.noxinfluencer.com">
                          https://www.noxinfluencer.com
                        </a>
                      </div>
                      <div className="pbc-right-grid-card">
                        <h5>Social Media: </h5>
                        <br />
                        <div className="pbc-social-media-grid">
                          <div className="pbc-social-icon">
                            <a href="#">
                              <img src={TikTokIcon} alt="TikTokIcon" />
                              <p>TikTok</p>
                            </a>
                          </div>
                          <div className="pbc-social-icon">
                            <a href="#">
                              <img src={InstagramIcon} alt="InstagramIcon" />
                              <p>Instagram</p>
                            </a>
                          </div>
                          <div className="pbc-social-icon">
                            <a href="#">
                              <img src={YouTubeIcon} alt="YouTubeIcon" />
                              <p>YouTube</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="pbc-right-grid-card">
                        <h5>Main features:</h5>
                        <br />
                        <ul>
                          <li>Campaign Management</li>
                          <li>CRM</li>
                          <li>Influencer Discovery</li>
                          <li>Influencer Relationship Management</li>
                          <li>Influencer Tracking</li>
                          <li>Social Media Monitoring</li>
                        </ul>
                      </div>
                      <div className="pbc-right-grid-card">
                        <h5>Additional tools:</h5>
                        <br />
                        <ul>
                          <li>YouTubers Calculator</li>
                          <li>YouTube Video Analytics</li>
                          <li>YouTuber Comparing</li>
                          <li>Real-time YouTube Subscriber Count</li>
                          <li>Influencers' Marketing Calculators</li>
                          <li>YouTube Video Title Generator</li>
                          <li>Find the best YouTube Video Thumbnails</li>
                          <li>YouTube Trends</li>
                          <li>YouTube Keywords Tool</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pbc-pros-cons">
                    <p>
                      <b>Pros: </b>
                    </p>

                    <ul>
                      <li>
                        Ability to search via YouTuber's URL, video URL, name,
                        category, keywords, or the competitor
                      </li>
                      <li>
                        Creating an advertising campaign and target influencer
                        lists
                      </li>
                      <li>Competitor monitoring</li>
                      <li>
                        A rich library of search criteria for influencers,
                        including profile descriptions
                      </li>
                      <li>
                        Ability to directly contact influencers inside the
                        platform
                      </li>
                      <li>
                        SocialBook Checker (Chrome plugin for YouTube and
                        Instagram)
                      </li>
                      <li>Influencer payment management</li>
                      <li>Campaign KPI Tracking</li>
                      <li>
                        Additional tools include a media kit, photo studio, NFT
                        maker, photo background remover, etc.
                      </li>
                    </ul>
                    <br />
                    <br />
                    <p>
                      <b>Cons: </b>
                    </p>
                    <ul>
                      <li>
                        Smaller influencer library compared to other platforms
                      </li>
                      <li>No free versions are available</li>
                      <li>
                        The Platinum and Diamond plans aren't able to fully use
                        the influencer filtering feature
                      </li>
                      <li>
                        Unlimited access is granted after leaving a request
                      </li>
                      <li>
                        No analytics for influencers on Facebook and Twitter{" "}
                      </li>
                      <li>
                        Influencers' additional social media accounts aren't
                        included in the influencer profiles
                      </li>
                    </ul>
                  </div>
                  <p>
                    <b>Price: </b>
                  </p>
                  <br />
                  <div className="price-boxes-grid">
                    <div className="price-box-card">
                      <h5>
                        PLATINUM <br /> <span>PLAN</span>
                      </h5>
                      <h6>$499 /month</h6>
                    </div>
                    <div className="price-box-card">
                      <h5>
                        DIAMOND <br /> <span>PLAN</span>
                      </h5>
                      <h6>$999 /month</h6>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="pick-box-content">
                  <div className="pbc-top-grid">
                    <div className="pbc-top-grid-left">
                      <img src={InfluencerLogo} alt="InfluencerLogo" />
                      <div>
                        <h3>NoxInfluencer</h3>
                        <br />
                        <p>
                          NoxInfluencer is a comprehensive marketing software
                          located in Singapore. It boasts 20 million creators to
                          offer Influencer Discovery and Outreach, Influencer
                          Relationship Management, Campaign Running, and Social
                          Media Analytics. Its additional tools specifically
                          designed for YouTube makes NoxInfluencer stand out as
                          one of the top software to manage influencers on the
                          popular video platform.
                        </p>
                      </div>
                    </div>
                    <div className="pbc-top-grid-right">
                      <div className="pbc-right-grid-card">
                        <h5>Contact details:</h5>
                        <br />
                        <p>Located in Singapore</p>
                        <a href="https://www.noxinfluencer.com">
                          https://www.noxinfluencer.com
                        </a>
                      </div>
                      <div className="pbc-right-grid-card">
                        <h5>Social Media: </h5>
                        <br />
                        <div className="pbc-social-media-grid">
                          <div className="pbc-social-icon">
                            <a href="#">
                              <img src={TikTokIcon} alt="TikTokIcon" />
                              <p>TikTok</p>
                            </a>
                          </div>
                          <div className="pbc-social-icon">
                            <a href="#">
                              <img src={InstagramIcon} alt="InstagramIcon" />
                              <p>Instagram</p>
                            </a>
                          </div>
                          <div className="pbc-social-icon">
                            <a href="#">
                              <img src={YouTubeIcon} alt="YouTubeIcon" />
                              <p>YouTube</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="pbc-right-grid-card">
                        <h5>Main features:</h5>
                        <br />
                        <ul>
                          <li>Campaign Management</li>
                          <li>CRM</li>
                          <li>Influencer Discovery</li>
                          <li>Influencer Relationship Management</li>
                          <li>Influencer Tracking</li>
                          <li>Social Media Monitoring</li>
                        </ul>
                      </div>
                      <div className="pbc-right-grid-card">
                        <h5>Additional tools:</h5>
                        <br />
                        <ul>
                          <li>YouTubers Calculator</li>
                          <li>YouTube Video Analytics</li>
                          <li>YouTuber Comparing</li>
                          <li>Real-time YouTube Subscriber Count</li>
                          <li>Influencers' Marketing Calculators</li>
                          <li>YouTube Video Title Generator</li>
                          <li>Find the best YouTube Video Thumbnails</li>
                          <li>YouTube Trends</li>
                          <li>YouTube Keywords Tool</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pbc-pros-cons">
                    <p>
                      <b>Pros: </b>
                    </p>

                    <ul>
                      <li>
                        Ability to search via YouTuber's URL, video URL, name,
                        category, keywords, or the competitor
                      </li>
                      <li>
                        Creating an advertising campaign and target influencer
                        lists
                      </li>
                      <li>Competitor monitoring</li>
                      <li>
                        A rich library of search criteria for influencers,
                        including profile descriptions
                      </li>
                      <li>
                        Ability to directly contact influencers inside the
                        platform
                      </li>
                      <li>
                        SocialBook Checker (Chrome plugin for YouTube and
                        Instagram)
                      </li>
                      <li>Influencer payment management</li>
                      <li>Campaign KPI Tracking</li>
                      <li>
                        Additional tools include a media kit, photo studio, NFT
                        maker, photo background remover, etc.
                      </li>
                    </ul>
                    <br />
                    <br />
                    <p>
                      <b>Cons: </b>
                    </p>
                    <ul>
                      <li>
                        Smaller influencer library compared to other platforms
                      </li>
                      <li>No free versions are available</li>
                      <li>
                        The Platinum and Diamond plans aren't able to fully use
                        the influencer filtering feature
                      </li>
                      <li>
                        Unlimited access is granted after leaving a request
                      </li>
                      <li>
                        No analytics for influencers on Facebook and Twitter{" "}
                      </li>
                      <li>
                        Influencers' additional social media accounts aren't
                        included in the influencer profiles
                      </li>
                    </ul>
                  </div>
                  <p>
                    <b>Price: </b>
                  </p>
                  <br />
                  <div className="price-boxes-grid">
                    <div className="price-box-card">
                      <h5>
                        PLATINUM <br /> <span>PLAN</span>
                      </h5>
                      <h6>$499 /month</h6>
                    </div>
                    <div className="price-box-card">
                      <h5>
                        DIAMOND <br /> <span>PLAN</span>
                      </h5>
                      <h6>$999 /month</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="conclusion-box">
                <span>
                  <OrangeBulb /> Conclusion
                </span>
                <p>
                  SEO is the marketing strategy every website needs to include
                  and improve over the long term. It provides organic traffic
                  that can lead to a high return per click. It is not an easy
                  job, but in 2022 a website that is not SEO optimized does not
                  stand a chance on google.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Blog3;
