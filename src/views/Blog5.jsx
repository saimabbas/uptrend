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
import PinterestIcon from "../assets/img/pinterest-white-bg.svg";
import InstagramIcon from "../assets/img/instagram-white-bg.svg";
import YouTubeIcon from "../assets/img/youtube-white-bg.svg";
import Person from "../assets/img/emre.png";
import JournalImg3 from "../assets/img/journal-img-3.png";
import InfluencerLogo from "../assets/img/influencer-logo.svg";
import InfluenceLogo from "../assets/img/influence-logo.png";
import Aspire from "../assets/img/aspire.svg";
import Grin from "../assets/img/grin.svg";
import Influencity from "../assets/img/influencity.svg";
import Affable from "../assets/img/affable-img.svg";
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

import JournalImg5Cat from "../assets/img/journal-img-5-cat.png";
import Person1 from "../assets/img/donna.png";
import Person2 from "../assets/img/alex.png";

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
                  <img src={Person1} alt="" />
                  <div className="bi-text">
                    <h5>Donna Wanstein</h5>
                    <p>12.06.2022</p>
                  </div>
                </div>
                <span>10 min read</span>
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
                              Upfluence's social listening technology allows you
                              to find influencers already interacting with your
                              brand or talking about your products.
                            </li>
                            <li>
                              The ability to issue personalized promo codes
                              natively compatible with your online store,
                              including Shopify and WooCommerce, and watch your
                              e-commerce sales grow.
                            </li>
                            <li>
                              Create an unlimited number of influencer lists
                              depending on the strategy and goals of your
                              campaign
                            </li>
                            <li>
                              Ability to upload your lists to CSV or Excel.
                            </li>
                            <li>
                              Access performance metrics for Instagram, YouTube,
                              TikTok, Twitch, Twitter, and Pinterest.
                            </li>
                            <li>
                              You can see which brands influencers have
                              collaborated with in the past.
                            </li>
                            <li>
                              Launch a campaign for seeding products. You can
                              control the number of products an influencer can
                              select and automatically collect their shipping
                              information.
                            </li>
                            <li>
                              The ability to generate affiliate links and track
                              performance.
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
                                  <img src={PinterestIcon} alt="TikTokIcon" />
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
                        The low number of filters in the influencer search
                        system.
                      </li>
                      <li>The platform is quite challenging to use.</li>
                      <li>
                        Inaccuracies in forecasting prices for cooperation with
                        influential persons.
                      </li>
                      <li>
                        The process of manually adding influencers is laborious.
                      </li>
                      <li>
                        An insufficiently accurate search of influencers by
                        keywords.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="pick-box-content">
                  <div className="pbc-top-grid">
                    <div className="pbc-top-grid-left">
                      <img src={Aspire} alt="AspireLogo" />
                      <div>
                        <h3>Aspire</h3>
                        <br />
                        <p>
                          Aspire is the pioneering SaaS tool for e-Commerce
                          influencer marketing. Aspire is an ROI-focused
                          platform for high-growth e-Commerce brands.
                        </p>
                        <div className="pbc-pros-cons">
                          <p>
                            <b>Pros: </b>
                          </p>

                          <ul>
                            <li>
                              You can search for influencers by matching their
                              content provided by your company.
                            </li>
                            <li>
                              The availability of content guide templates that
                              define requirements for campaign tasks.
                            </li>
                            <li>
                              The ability to receive offers from influencers for
                              a marketing campaign inside the platform.
                            </li>
                            <li>
                              Creator Management allows brands to automate
                              product selection, allowing influencers who submit
                              a proposal to select the product (or its size,
                              color, etc.)
                            </li>
                            <li>
                              Send automatic reminder letters if the influencer
                              has not accepted the offer or if the offer is
                              about to expire.
                            </li>
                            <li>
                              Choosing conditions from a predefined digital
                              table will allow you to map out the terms and
                              conditions of each individual deal. They act as a
                              contract that specifies the work to be done and
                              the money to be paid.
                            </li>
                            <li>
                              The ability to make payments through the platform.
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
                            <p>Located in the United States</p>
                            <p>Founded in 2013</p>
                            <a href="https://aspire.io">https://aspire.io</a>
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
                            </div>
                            <div className="pbc-social-media-grid">
                              <div className="pbc-social-icon">
                                <a href="#">
                                  <img src={PinterestIcon} alt="TikTokIcon" />
                                  <p>Pinterest</p>
                                </a>
                              </div>
                              <div className="pbc-social-icon">
                                <a href="#">
                                  <img src={YouTubeIcon} alt="YouTubeIcon" />
                                  <p>Youtube</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbc-right-grid-card">
                          <h5>Main features:</h5>
                          <br />
                          <ul>
                            <li>Activity Dashboard</li>
                            <li>Campaign Management</li>
                            <li>Communication Management</li>
                            <li>Content Management</li>
                            <li>CRM</li>
                            <li>Categorization/Grouping</li>
                            <li>Contact Database</li>
                            <li>Data Import/Export</li>
                          </ul>
                        </div>
                      </div>
                      <div className="pbc-right-grid-card pbc-addtools">
                        <h5>Additional tools:</h5>
                        <br />
                        <ul>
                          <li>
                            Influencer Discovery. Search 100M influencers across
                            all channels filtering by location, engagement
                            metrics, demographics, industry, and much more. You
                            can even search by photo to match your brand's
                            aesthetic.
                          </li>
                          <li>
                            Creator marketplace. List your marketing campaign
                            and accept incoming applications from influencers to
                            participate in your campaign.
                          </li>
                          <li>
                            Relationship management. Automate your most
                            time-consuming processes with structured workflows —
                            like sending contracts, product fulfillment, and
                            more.
                          </li>
                          <li>
                            Measure ROI. Confidently measure full-funnel ROI and
                            sales. You can get the results of all sales and
                            conversions managed by influencers — on one
                            convenient dashboard.
                          </li>
                          <li>
                            Content creation. Organize all of your
                            influencer-generated content in one library. Filter
                            by campaign, project, influencer, product SKU, and
                            more.
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
                        An insufficient number of filters to search for
                        influencers.
                      </li>
                      <li>
                        You cannot use a Shopify account that is registered in
                        the USA and Canada at the same time.
                      </li>
                      <li>
                        Analytics on Twitter influencers are not provided.
                      </li>
                      <li>No direct access.</li>
                      <li>The demo is limited.</li>

                      <li>Finding influencers takes a lot of time.</li>
                      <li>
                        You have to pay extra for each additional function.
                      </li>
                      <li>Incomplete reporting in the reels segment.</li>
                      <li>
                        You will not be able to download reports in pdf format.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="pick-box-content">
                  <div className="pbc-top-grid">
                    <div className="pbc-top-grid-left">
                      <img src={Grin} alt="GrinLogo" />
                      <div>
                        <h3>Grin</h3>
                        <br />
                        <p>
                          GRIN is a creator management platform built for
                          e-Commerce. GRIN offers a 38m+ influencer recruitment
                          suite that allows you to find influencers based on
                          audience, demographic, and even customer influencers.
                        </p>
                        <div className="pbc-pros-cons">
                          <p>
                            <b>Pros: </b>
                          </p>

                          <ul>
                            <li>Extremely easy to use.</li>
                            <li>
                              Allows you to optimize the entire process of
                              working with influencers.
                            </li>
                            <li>
                              Compatible with e-Commerce software like Shopify,
                              WooCommerce, and Magento.
                            </li>
                            <li>
                              Email systems like Gmail and Outlook integrate
                              directly with GRIN's messaging system.
                            </li>
                            <li>
                              Connects to real-time communication channels like
                              SMS and Slack.
                            </li>
                            <li>
                              GRIN allows you to attract all registered users
                              from your e-Commerce site, then go out and find
                              their social media profiles.
                            </li>
                            <li>
                              GRIN features a social listening apparatus,
                              monitoring hashtags and mentions, as another way
                              to help find potential influencers.
                            </li>
                            <li>
                              {" "}
                              The Report Builder will help you create an
                              analytics report.
                            </li>
                          </ul>
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="pbc-right-grid-b5">
                      <div className="pbc-top-grid-right">
                        {/* <div className="pbc-social-contact-cards"> */}
                        <div className="pbc-right-grid-card">
                          <h5>Contact details:</h5>
                          <br />
                          <p>Located in the United States</p>
                          <p>Founded in 2014</p>
                          <a href="https://grin.co">https://grin.co</a>
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
                          <div className="pbc-social-media-grid">
                            <div className="pbc-social-icon">
                              <a href="#">
                                <img src={PinterestIcon} alt="TikTokIcon" />
                                <p>Pinterest</p>
                              </a>
                            </div>
                            <div className="pbc-social-icon">
                              <a href="#">
                                <img src={InstagramIcon} alt="InstagramIcon" />
                                <p>Twitch</p>
                              </a>
                            </div>
                            <div className="pbc-social-icon">
                              <a href="#">
                                <img src={YouTubeIcon} alt="YouTubeIcon" />
                                <p>Facebook</p>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="pbc-right-grid-card">
                          <h5>Main features:</h5>
                          <br />
                          <ul>
                            <li>Influencer Recruitment</li>
                            <li>Influencer Segmentation</li>
                            <li>Content Approval</li>
                            <li>Data Importing and Exporting Tools</li>
                            <li>Influencer Scoring</li>
                          </ul>
                        </div>
                        {/* </div> */}
                      </div>
                      <div className="pbc-right-grid-card pbc-addtools">
                        <h5>Additional tools:</h5>
                        <br />
                        <ul>
                          <li>
                            <b>Chrome extension.</b> The GRIN Chrome extension
                            will save you hours of research on influencers. Just
                            go to any Instagram creator profile and click the
                            extension to view key statistics.
                          </li>
                          <li>
                            <b>Fake influencer tool.</b> The Fake Subscribers
                            Audit tool identifies subscribers with erratic or
                            suspicious behavior.
                          </li>
                          <li>
                            <b>Influencer comparisons. </b> This free tool will
                            allow you to compare macro and micro influencers to
                            check engagement metrics and provide insights that
                            will help you find the right creators for a
                            partnership.
                          </li>
                          <li>
                            <b>Influencer analysis.</b> Analyze any influencer
                            on Instagram, TikTok, or YouTube.
                          </li>
                          <li>
                            <b>Influencer look-alike tool.</b> This tool will
                            help you find hidden influencers matching your
                            marketing campaign.
                          </li>

                          <li>
                            <b>Engagement rate calculator.</b>Using this free
                            tool, you can measure the quality of the creator's
                            relationship with their audience.
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
                      <li>Only email templates are available.</li>
                      <li>Paid analytical reports.</li>
                      <li>
                        There are no notifications when creators upload content.
                      </li>
                      <li>Some email addresses are outdated.</li>
                      <li>Limited filters for finding influencers.</li>

                      <li>Cannot add creators from one campaign to another.</li>
                      <li>
                        You have to pay extra for each additional function.
                      </li>
                      <li>
                        TikTok influencer search functionality is not as fully
                        built as Instagram.
                      </li>
                      <li>
                        A limited number of contacts with influential persons
                        per month.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="pick-box-content">
                  <div className="pbc-top-grid">
                    <div className="pbc-top-grid-left">
                      <img src={Influencity} alt="InfluencityLogo" />
                      <div>
                        <h3>Influencity</h3>
                        <br />
                        <p>
                          Influencity is the most complete AI-powered influencer
                          marketing solution that will allow you to obtain total
                          Influencer Relationship Management on a single
                          comprehensive platform.
                        </p>
                        <div className="pbc-pros-cons">
                          <p>
                            <b>Pros: </b>
                          </p>

                          <ul>
                            <li>
                              Pros: Access more than 70 million influencers.
                            </li>
                            <li>
                              Sort through niche profiles by scanning influencer
                              bios and content using keywords.
                            </li>
                            <li>
                              Proprietary analyses allow you to detect real and
                              fake followers to explore influencer authenticity.
                            </li>
                            <li>
                              The ability to find frequently used hashtags and
                              mentions used in the content of influencers.
                            </li>
                            <li>
                              You will be able to study the past partnerships of
                              influencers with competing brands and their
                              experience to see if they are right for you.
                            </li>
                            <li>
                              The ability to sort influencers in compiled lists
                              by common attributes such as category, language,
                              and project. .
                            </li>
                            <li>Сreate a list of favorite influencers.</li>
                            <li>
                              You can print or share your list of influencers.
                            </li>
                            <li>
                              Precision discovery and look-alike tools yield
                              highly relevant results.
                            </li>
                            <li>
                              There are many different filters to apply, and
                              each has a range of options.
                            </li>
                            <li>
                              Generate a list of influencers matching your
                              request and see why influencers match your
                              request.
                            </li>
                          </ul>
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="pbc-right-grid-b5">
                      <div className="pbc-top-grid-right">
                        {/* <div className="pbc-social-contact-cards"> */}
                        <div className="pbc-right-grid-card">
                          <h5>Contact details:</h5>
                          <br />
                          <p>Located in the United States</p>
                          <p>Founded in 2014</p>
                          <a href="https://influencity.com ">
                            https://influencity.com{" "}
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
                              <a href="#">
                                <img src={InstagramIcon} alt="InstagramIcon" />
                                <p>Instagram</p>
                              </a>
                            </div>
                          </div>
                          <div className="pbc-social-media-grid">
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
                            <li>Influencer Recruitment</li>
                            <li>Influencer Segmentation</li>
                            <li>Content Approval</li>
                            <li>Campaign Analytics</li>
                            <li>Social Commerce</li>
                          </ul>
                        </div>
                        {/* </div> */}
                      </div>
                      <div className="pbc-right-grid-card pbc-addtools">
                        <h5>Additional tools:</h5>
                        <br />
                        <ul>
                          <li>
                            <b>Analyze influencers.</b> Analyze subscriber
                            numbers, media earnings, engagement ratios, and
                            engagement analysis to ensure results.
                          </li>
                          <li>
                            <b>Organize influencers.</b> Databases stay
                            organized and accessible no matter how many
                            influencers you add. Sharing is seamless across your
                            enterprise.
                          </li>
                          <li>
                            <b>Forecast results.</b> Identify prime KPIs. Invest
                            intelligently. Always know your projected ROI ahead
                            of time.
                          </li>
                          <li>
                            <b>Manage campaigns.</b> View progress from the
                            moment an influencer takes on a task until it's
                            complete. You'll even know if something's been
                            rejected for complete control over an influencer's
                            progress.
                          </li>
                          <li>
                            <b>Measure your results.</b> Analyze influencer
                            effectiveness in real-time for quicker, better
                            strategic decisions and change.
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
                        Impossible to contact influencers directly from the
                        platform.
                      </li>
                      <li>Instagram stories are not supported.</li>
                      <li>
                        Can't import the CSV database inside the platform.
                      </li>
                      <li>Lack of filters for TikTok.</li>
                      <li>Twitter is not available.</li>
                      <li>No function to add attachments for notes.</li>
                      <li>The search tab is not detailed enough.</li>
                      <li>
                        The analysis of influencers is not well developed for
                        YouTube and TikTok.
                      </li>
                      <li>
                        Limited amount of searches and analysis for each tariff
                        plan.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="pick-box-content">
                  <div className="pbc-top-grid">
                    <div className="pbc-top-grid-left">
                      <img src={Affable} alt="InfluencityLogo" />
                      <div>
                        <h3>Affable</h3>
                        <br />
                        <p>
                          Affable is an AI platform for data-driven influencer
                          analytics and campaign management. Leading brands like
                          Huawei, Chanel, Estee Lauder, AirAsia, and Swarovski
                          use Affable to streamline and execute their influencer
                          campaigns.
                        </p>
                        <div className="pbc-pros-cons">
                          <p>
                            <b>Pros: </b>
                          </p>

                          <ul>
                            <li>
                              More than 20 advanced influencer search filters.
                            </li>
                            <li>
                              Unique Reach feature identifies audience overlap
                              between influencers.
                            </li>
                            <li>
                              Integrates with other sales tracking software
                              solutions.
                            </li>
                            <li>
                              As content is posted for a campaign, Affable
                              ingests it all into the platform for analysis and
                              reporting.
                            </li>
                            <li>
                              Images, videos, captions, influencers' stories,
                              and indicators can all be exported to a PowerPoint
                              presentation.
                            </li>
                            <li>
                              You can run a simple Market Trends report to
                              explore the campaigns produced by leading brands,
                              find trending hashtags and determine the most
                              engaging content.
                            </li>
                          </ul>
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="pbc-right-grid-b5">
                      <div className="pbc-top-grid-right">
                        {/* <div className="pbc-social-contact-cards"> */}
                        <div className="pbc-right-grid-card">
                          <h5>Contact details:</h5>
                          <br />
                          <p>Located in the Spain</p>
                          <p>Founded in 2014</p>
                          <a href="https://influencity.com ">
                            https://influencity.com{" "}
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
                              <a href="#">
                                <img src={InstagramIcon} alt="InstagramIcon" />
                                <p>Instagram</p>
                              </a>
                            </div>
                          </div>
                          <div className="pbc-social-media-grid">
                            <div className="pbc-social-icon">
                              <a href="#">
                                <img src={YouTubeIcon} alt="YouTubeIcon" />
                                <p>YouTube</p>
                              </a>
                            </div>
                            <div className="pbc-social-icon">
                              <a href="#">
                                <img src={YouTubeIcon} alt="YouTubeIcon" />
                                <p>Facebook</p>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="pbc-right-grid-card">
                          <h5>Main features:</h5>
                          <br />
                          <ul>
                            <li>Campaign Analytics</li>
                            <li>Campaign Management</li>
                            <li>Contact Database</li>
                            <li>Content Management</li>
                            <li>Conversion Tracking</li>
                            <li>CRM</li>
                            <li>Faceted Search/Filter</li>
                          </ul>
                        </div>
                        {/* </div> */}
                      </div>
                      <div className="pbc-right-grid-card pbc-addtools">
                        <h5>Additional tools:</h5>
                        <br />
                        <ul>
                          <li>
                            <b>Discover influencers.</b> Find influencers for
                            your campaigns.
                          </li>
                          <li>
                            <b>Analyze influencers.</b> Verify audience
                            demographics and authenticity of influencer's
                            followers.
                          </li>
                          <li>
                            <b>Manage campaigns.</b> Reach out to influencers
                            and manage campaign communications.
                          </li>
                          <li>
                            <b>Track influencers' stories.</b> Track influencer
                            stories and the time of publication.
                          </li>
                          <li>
                            <b>Measure influencer campaign ROI.</b>
                            Measure the ROI of influencer campaigns by tracking
                            engagement.
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
                      <li>Unable to send the scheduled emails.</li>
                      <li>
                        The platform has no contractual obligation in place to
                        protect the brand mandating influencers to post creative
                        content to their social media channels after receiving
                        free product gifting.
                      </li>
                      <li>
                        Insight reports are only available for Instagram and
                        Facebook.
                      </li>
                      <li>The amount of exported files is restricted.</li>

                      <li>
                        The list of influencers is limited, and you can directly
                        analyze their profile using the platform's tools.
                      </li>
                      <li>
                        The regionality of each influencer's followers is still
                        limited to the country level.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="conclusion-box">
                <span>
                  <img src={OrangeBulbImg} alt="OrangeBulbImg" /> Conclusion
                </span>
                <p>
                  Launching a marketing campaign doesn't have to be such a
                  challenge or a chore anymore. You don't need to conduct
                  massive man-hours worth of manual research; it's time to use
                  comprehensive marketing platforms to automate your social
                  media campaign!
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="other-articles">
          <div className="box">
            <h2 className="oa-head">Check our other articles</h2>
            <div className="blog-cards-grid">
              <a href="/Blog/3-Proven-Strategies-To-Building-Brand-Awareness-In-2022">
                <BlogCard
                  lightBlogCard={false}
                  blogImg={JournalImg2}
                  heading="3 Proven Strategies To Building Brand Awareness in 2022"
                  description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                  personImg={Person2}
                  personName="Alex Wanstein"
                  date="10.06.2022"
                  readTime="8 min read"
                >
                  <span>Branding</span>
                  <span>Performance</span>
                </BlogCard>
              </a>
              <a href="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022(Part1)">
                <BlogCard
                  lightBlogCard={false}
                  blogImg={JournalImg1}
                  heading="Top 5 Influencer Marketing Software Solutions To Boost  Brand Growth In 2022 (Part 1)"
                  description="Check out this comprehensive guide to discovering the most powerful influencers using popular influencer marketing software based on Uptrend’s insights and experience"
                  personImg={Person1}
                  personName="Donna Wanstein"
                  date="7.06.2022"
                  readTime="10 min read"
                >
                  <span>News</span>
                  <span>Influencer Marketing</span>
                </BlogCard>
              </a>
              <a href="/Blog/The-Art-of-SEO:Proven-Search-Engine-Strategies">
                <BlogCard
                  lightBlogCard={false}
                  blogImg={JournalImg5Cat}
                  heading="The Art of SEO: Proven Search Engine Strategies"
                  description="Uptrend search engine experts demonstrate how to prepare and deploy a multi-faceted SEO strategy using innovative techniques and proven effective processes"
                  personImg={Person1}
                  personName="Donna Wanstein"
                  date="7.06.2022"
                  readTime="10 min read"
                >
                  <span>Performance</span>
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

export default Blog6;
