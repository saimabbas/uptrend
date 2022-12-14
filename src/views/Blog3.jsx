import React, { useState, useEffect } from "react";
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
import Person from "../assets/img/emre.png";
import JournalImg3 from "../assets/img/journal-img-3.png";
import InfluencerLogo from "../assets/img/influencer-logo.svg";
import InfluTypeImg from "../assets/img/influtype.svg";
import BlueArrow from "../assets/icons/BlueArrow";
import Person1 from "../assets/img/donna.png";
import JournalImg4 from "../assets/img/journal-img-4.png";
import Person3 from "../assets/img/sarah.png";
import JournalImg5 from "../assets/img/journal-img-5.png";
import JournalImg6 from "../assets/img/journal-img-6.png";
import OrangeBulb from "../assets/icons/OrangeBulb";
import TargetImg from "../assets/img/target-icon.png";
import OrangeBulbImg from "../assets/img/orange-bulb.png";
import BlogCard from "../components/BlogCard";
import JournalImg1 from "../assets/img/journal-img-1.png";
import JournalImg2 from "../assets/img/journal-img-2.png";
import { MdArrowForward } from "react-icons/md";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import IconWhatsapp from "../assets/icons/IconWhatsapp";

const Blog3 = () => {
  const [isIconsBoxShowing, setIsIconsBoxShowing] = useState(false);
  const showIconsBox = () => {
    setIsIconsBoxShowing(!isIconsBoxShowing);
    setTimeout(() => {
      setIsIconsBoxShowing(false);
    }, 5000);
  };
  return (
    <main className="app">
      {/* <div className="loading-screen">
        <UTLogo color="#fff" />
      </div> */}
      <div className="blog-page">
        <Header lightHeader={false} showIconsBox={showIconsBox} />

        <div className="blog-page-content">
          <div className="box">
            <div></div>
            {isIconsBoxShowing ? (
              <div className="hero-icons-line-box">
                <div></div>
                <a href="#">
                  <IconWhatsapp color="#fff" />
                </a>
                <a href="https://twitter.com/UptrendAgency">
                  <IconTwitter color="#fff" />
                </a>
                <a href="https://www.linkedin.com/company/UptrendAgency">
                  <IconLinkedIn color="#fff" />
                </a>
                <a href="http://instagram.com/uptrendagency">
                  <IconInstagram color="#fff" />
                </a>
                <a href="https://facebook.com/UptrendAgency">
                  <IconFacebook color="#fff" />
                </a>
              </div>
            ) : null}
          </div>
          <div className="blog-content-wrapper">
            <div className="box box-p">
              <div className="blog-img-para">
                <div className="bipara-left">
                  <img src={Person1} alt="" />
                  <div className="bi-text">
                    <h5>Donna Wanstein</h5>
                    <p>7.06.2022</p>
                  </div>
                </div>

                <span>10 min read</span>
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
                            <a href="http://instagram.com/uptrendagency">
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
                  <img src={OrangeBulbImg} alt="OrangeBulbImg" /> Conclusion
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
        <section className="other-articles">
          <div className="box">
            <h2 className="oa-head">Check our other articles</h2>
            <div className="blog-cards-grid">
              <a href="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022(Part2)">
                <BlogCard
                  lightBlogCard={false}
                  blogImg={JournalImg5}
                  heading="Top-5 Influencer Marketing Software Solutions To Boost Your Brand in 2022 (Part 2)"
                  description="Check out this comprehensive guide to discovering the most powerful influencers using popular influencer marketing software based on Uptrend???s insights and experience"
                  personImg={Person1}
                  personName="Donna Wanstein"
                  date="12.06.2022"
                  readTime="10 min read"
                >
                  <span>Branding</span>
                  <span>Influnncer Marketing</span>
                </BlogCard>
              </a>
              <a href="/Blog/Top-Regions-With-The-Best-Marketing-Performance">
                <BlogCard
                  lightBlogCard={false}
                  blogImg={JournalImg6}
                  heading="Top Regions With The Best Marketing Performance"
                  description="In this guide, Uptrend experts explain how to effectively distribute a marketing budget and launch a profitable advertising campaign in new local regions."
                  personImg={Person3}
                  personName="Sarah Evans"
                  date="20.06.2022"
                  readTime="5 min read"
                >
                  <span>Branding</span>
                  <span>Crypto</span>
                </BlogCard>
              </a>
              <a href="/Blog/New-Local-Region-Tips-To-Get-Started">
                <BlogCard
                  lightBlogCard={false}
                  blogImg={JournalImg4}
                  heading="New Local Region? Tips To Get Started"
                  description="The ultimate marketing plan for dominating local markets. Get the fundamental insights to impact your customers. We introduce essential marketing tips for brands to create the valuable experience."
                  personImg={Person}
                  personName="Emre Murry"
                  date="5.06.2022"
                  readTime="5 min read"
                >
                  <span>News</span>
                  <span>Influencer Marketing</span>
                </BlogCard>
              </a>
            </div>
            <div className="blog-bcr">
              <div className="ut-breadcrumbs-section">
                <div className="ut-breadcrumbs">
                  <div className="ut-breadcrumbs-box ut-breadcrumbs-box-active">
                    1
                  </div>
                  <div className="ut-breadcrumbs-box">2</div>
                  <div className="ut-breadcrumbs-box">3</div>
                  <div className="ut-breadcrumbs-box ut-breadcrumbs-box-inactive">
                    ...
                  </div>
                  <div className="ut-breadcrumbs-box">10</div>
                  <div className="ut-breadcrumbs-box">
                    <MdArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Blog3;
