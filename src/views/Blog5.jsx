import React, { useState, useEffect } from "react"; // Styles
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
import InfluenceLogo from "../assets/img/influence-logo.png";
import InfluTypeImg from "../assets/img/influtype.svg";
import BlueArrow from "../assets/icons/BlueArrow";
import OrangeBulb from "../assets/icons/OrangeBulb";
import TargetImg from "../assets/img/target-icon.png";
import OrangeBulbImg from "../assets/img/orange-bulb.png";
import BlogCard from "../components/BlogCard";
import JournalImg1 from "../assets/img/journal-img-1.png";
import JournalImg2 from "../assets/img/journal-img-2.png";
import JournalImg5 from "../assets/img/journal-img-5.png";
import { MdArrowForward } from "react-icons/md";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import IconWhatsapp from "../assets/icons/IconWhatsapp";

const Blog6 = () => {
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
                  <img src={Person} alt="" />
                  <div className="bi-text">
                    <h5>Donna Wanstein</h5>
                    <p>18.06.2022</p>
                  </div>
                </div>
                <span>5 min read</span>
              </div>
              <div className="blog-main-content">
                <h3>
                  Top 5 Influencer Marketing Software Solutions To Boost Your
                  Brand In 2022 (Part 2)
                </h3>
                <p>
                  In this article, we have collected a comprehensive list of
                  marketing platforms that help to utilize brand promotion on
                  social media. Using these platforms, brands receive access to
                  one-stop-shop solutions that automate marketing campaigns on
                  social media across the globe.
                  <br />
                  <br />
                  These are the top 5 platforms that will make it easier to
                  build a successful, results-driven marketing campaign.
                </p>
                <img src={JournalImg5} alt="BlogImg" />
              </div>
              <div className="top-5-picks-box">
                <div className="pick-box-content">
                  <div className="pbc-top-grid">
                    <div className="pbc-top-grid-left">
                      <img src={InfluenceLogo} alt="InfluencerLogo" />
                      <div>
                        <h3>Upfluence</h3>
                        <br />
                        <p>
                          Upfluence is a cloud-based influencer management
                          solution designed to help businesses of all sizes
                          manage their social media marketing campaigns.
                        </p>
                        <div className="pbc-pros-cons">
                          <p>
                            <b>Pros: </b>
                          </p>

                          <ul>
                            <li>
                              Ability to search via YouTuber's URL, video URL,
                              name, category, keywords, or the competitor
                            </li>
                            <li>
                              Creating an advertising campaign and target
                              influencer lists
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
                              Additional tools include a media kit, photo
                              studio, NFT maker, photo background remover, etc.
                            </li>
                          </ul>
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="pbc-right-grid-b5">
                      <div className="pbc-top-grid-right">
                        <div className="pbc-social-contact-cards">
                          <div className="pbc-right-grid-card">
                            <h5>Contact details:</h5>
                            <br />
                            <p>Located in the United States </p>
                            <p>Founded in 2013</p>
                            <a href="https://www.upfluence.com">
                              https://www.upfluence.com
                            </a>
                          </div>
                          <div className="pbc-right-grid-card pbc-sm-card">
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
                                  <img
                                    src={InstagramIcon}
                                    alt="InstagramIcon"
                                  />
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
                            <div className="pbc-social-media-grid">
                              <div className="pbc-social-icon">
                                <a href="#">
                                  <img src={TikTokIcon} alt="TikTokIcon" />
                                  <p>Pinterest</p>
                                </a>
                              </div>
                              <div className="pbc-social-icon">
                                <a href="http://instagram.com/uptrendagency">
                                  <img
                                    src={InstagramIcon}
                                    alt="InstagramIcon"
                                  />
                                  <p>Blog</p>
                                </a>
                              </div>
                              <div className="pbc-social-icon">
                                <a href="#">
                                  <img src={YouTubeIcon} alt="YouTubeIcon" />
                                  <p>Twitter</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbc-right-grid-card">
                          <h5>Main features:</h5>
                          <br />
                          <ul>
                            <li>Campaign Analytics</li>
                            <li>Contact Management</li>
                            <li>Campaign Management</li>
                            <li>CRM</li>
                            <li>Faceted Search/Filter</li>
                            <li>Influencer Discovery</li>
                            <li>Influencer Relationship Management</li>
                            <li>Reporting/Analytics</li>
                            <li>ROI Tracking</li>
                          </ul>
                        </div>
                      </div>
                      <div className="pbc-right-grid-card pbc-addtools">
                        <h5>Additional tools:</h5>
                        <br />
                        <ul>
                          <li>
                            <b>Ecommerce tool.</b> Access e-Commerce
                            integrations to help you identify the best
                            influencers, generate more sales, and grow your
                            brand.
                          </li>
                          <li>
                            <b>Influencer discovery.</b> With Upfluence's suite
                            of discovery tools, find influencers wherever they
                            are; your client base, your point of sale system,
                            your website, or via a database of influencer
                            profiles.
                          </li>
                          <li>
                            <b>Influencer analysis.</b> Analyze influencer's
                            performance metrics on Instagram, YouTube, TikTok,
                            Twitch, and more to make data-based decisions.
                          </li>
                          <li>
                            <b>Campaign management.</b> Manage your influencer
                            campaigns in one place.
                          </li>
                          <li>
                            <b>Product seeding.</b> Run influencer product
                            seeding campaigns.
                          </li>
                          <li>
                            <b>Affiliate management.</b> Upfluence provides
                            everything you need to manage your affiliate
                            program, from affiliate search to relationship
                            management, promotion code & performance tracking,
                            payments, and much more.
                          </li>
                          <li>
                            <b>Influencer payments.</b>Pay your influencers
                            easily, all in one place — using secure and seamless
                            international creator payments.
                          </li>
                          <li>
                            <b>Campaign analytics.</b> Understand your business
                            better with sponsored post tracking to detect
                            top-performing posts, gauge influencer engagement,
                            review campaign ROI insights, and dive into
                            competitor comparison analysis.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pbc-pros-cons">
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
              <BlogCard
                lightBlogCard={false}
                blogImg={JournalImg1}
                heading="3 Proven Strategies To Building Brand Awareness in 2022"
                description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                personImg={Person}
                personName="Alex Wanstein"
                date="10.06.2022"
                readTime="5 min read"
              >
                <span>Gaming</span>
                <span>News</span>
              </BlogCard>
              <BlogCard
                lightBlogCard={false}
                blogImg={JournalImg2}
                heading="Top 5 Influencer Marketing Software Solutions To Boost  Brand Growth In 2022 (Part 1)"
                description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                personImg={Person}
                personName="Donna Wanstein"
                date="7.06.2022"
                readTime="5 min read"
              >
                <span>Gaming</span>
              </BlogCard>
              <BlogCard
                lightBlogCard={false}
                blogImg={JournalImg3}
                heading="3 Proven Strategies To Building Brand Awareness in 2022"
                description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                personImg={Person}
                personName="Donna Wanstein"
                date="7.06.2022"
                readTime="5 min read"
              >
                <span>News</span>
              </BlogCard>
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

export default Blog6;
