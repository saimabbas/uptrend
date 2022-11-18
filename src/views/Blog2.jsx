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
import Person from "../assets/img/emre.png";
import JournalImg2 from "../assets/img/journal-img-2.png";
import InfluTypeImg from "../assets/img/influtype.svg";
import BlueArrow from "../assets/icons/BlueArrow";
import OrangeBulb from "../assets/icons/OrangeBulb";
import Person1 from "../assets/img/donna.png";
import JournalImg4 from "../assets/img/journal-img-4.png";
import Person3 from "../assets/img/sarah.png";
import JournalImg5 from "../assets/img/journal-img-5.png";
import JournalImg6 from "../assets/img/journal-img-6.png";
import TargetImg from "../assets/img/target-icon.png";
import OrangeBulbImg from "../assets/img/orange-bulb.png";
import JournalImg1 from "../assets/img/journal-img-1.png";
import JournalImg3 from "../assets/img/journal-img-3.png";
import BlogCard from "../components/BlogCard";
import { MdArrowForward } from "react-icons/md";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import IconWhatsapp from "../assets/icons/IconWhatsapp";
const Blog2 = () => {
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
                    <h5>Alex Wanstein</h5>
                    <p>10.06.2022</p>
                  </div>
                </div>
                <span>5 min read</span>
              </div>
              <div className="blog-main-content">
                <h3>3 Proven Strategies To Building Brand Awareness In 2022</h3>
                <p>
                  Have you ever wondered what makes a successful marketing
                  campaign? Extensive coverage? Increased audience loyalty?
                  Successful marketing is about getting everyone talking about
                  your brand. But how can such results be achieved? In this
                  article, we share our expertise and explain how brands can
                  significantly increase their awareness and get the necessary
                  reputation points for scale and growth. <br />
                  <br />
                  We share our experience to give marketers the valuable pieces
                  of the puzzle they need to create a powerful strategy that
                  works and delivers results. <br />
                  <br />
                  In our material, we will tell you about the five most
                  effective strategies for creating awareness. This material
                  summarizes the best practices that every brand needs to
                  execute today!
                </p>
                <img src={JournalImg2} alt="BlogImg" />
                <h3>Brand Events</h3>
                <p>
                  How can you attract the attention of a million people to your
                  brand? Just organize an online event! Events organized by
                  brands are especially popular among target audiences.
                  <br /> <br />
                  <b>How to create an event that will be valuable</b> <br />
                </p>
                <ol>
                  <li>
                    Determine the social media strategy for your brand's event.
                    YouTube, Twitter, Twitch – use the platform where your
                    primary audience is concentrated.
                  </li>
                  <br />
                  <br />
                  <li>
                    Prepare an event plan including the main topic and generate
                    a PDF. It can be a Live Stream, Web Panel, Webinar, and much
                    more!
                  </li>
                  <br />
                  <br />
                  <li>
                    Make a list of partners with an audience who can share
                    impactful insights.
                  </li>
                  <br />
                  <br />
                  <li>
                    Bloggers are your best friends. Invite the best influencers
                    in your segment and offer them the opportunity to be
                    speakers and attract additional audiences.
                  </li>
                  <br />
                  <br />
                  <li>
                    Make a content plan that includes promoting the event on all
                    target social media platforms.
                  </li>
                  <br />
                  <br />
                  <li>
                    Confirm the content plan with influencers, partners, and
                    participants. All participants should promote the event on
                    their social media accounts. More bloggers mean more reach.
                    Use the power of your charm and attract more influencers.
                  </li>
                  <br />
                  <br />
                  <li>
                    Prepare prizes for the most active participants of the
                    event. It can be merch, discounts on your service, tours,
                    and even Apple iPhones, Macbooks, and so on!
                  </li>
                  <br />
                  <br />
                  <li>
                    {" "}
                    Promote your event through digital marketing channels.
                  </li>
                  <br />
                  <br />
                  <li>
                    {" "}
                    After the event was provided, thank all participants,
                    partners, and bloggers on corporate social media.
                  </li>
                  <br />
                  <br />
                  <li>
                    Ask bloggers for a short summary of the event,
                    re-emphasizing the strength of your brand.
                  </li>
                </ol>
                <br />
                <br />
                <p>
                  Perfect! Your brand is in the spotlight. You bring valuable
                  knowledge to this world, invite famous people, and get
                  enormous reach and reputation points that help you to grow
                  your business.
                </p>
              </div>
              <div className="divide"></div>
              <div className="categories-box blog-2-cat">
                <div className="influ-type-box">
                  <img src={InfluTypeImg} alt="" />
                  <div className="influ-text">
                    <h3>Metaverse Presence</h3>
                    <p>
                      New technologies create new opportunities. With the advent
                      of the metaverse, there is an opportunity for brands to
                      reach new audiences and make a huge buzz. <br />
                      <br /> Metaverses allow brands to create objects and
                      assets with exclusive interactive experiences.
                    </p>
                  </div>
                </div>
                <h3>
                  How to create attention to your brand through Metaverses
                </h3>
                <ol>
                  <li>
                    Choose the metaverse that evokes your ideals. It's important
                    to choose only tier-1 metaverses with a lot of active users,
                    such as Decentraland, Sandbox, or Roblox.
                  </li>
                  <br />
                  <br />
                  <li>
                    Approve the concept of your brand's building. Only the most
                    daring and creative buildings allow a brand to stand out and
                    show uniqueness in the eyes of its customers.
                  </li>
                  <br />
                  <br />
                  <li>
                    Create a concept of your Web 3.0 merch. It should complement
                    the appearance of the building and open up opportunities to
                    fully enjoy your presence in the metaverse.
                  </li>
                  <br />
                  <br />
                  <li>
                    After the buildout is done and the merch design is
                    completed, it's time to transfer it to the real assets in
                    the metaverse. Work with leading contractors to ensure your
                    virtual office and merch completely match the real thing.
                    Quality is key to the success of this campaign.
                  </li>
                  <br />
                  <br />
                  <li>
                    Invite a metaverse audience to join your office, organize
                    the event, and announce the exclusive giveaway to engage
                    your audience.
                  </li>
                  <br />
                  <br />
                  <li>
                    Place your assets in the metaverse marketplace. Your assets
                    will be open to everyone who joins the marketplace.
                  </li>
                  <br />
                  <br />
                  <li>
                    It's time to invite the leading journalists to write press
                    releases and feature articles about your company and its
                    presence in the metaverse. Don't hesitate to provide
                    exclusive comments on the industry topics to leading
                    journalists who will magnify the reach of your voice.
                  </li>
                  <br />
                  <br />
                  <li>
                    Invite influencers to make featured videos or tweets
                    regarding your exclusive presence in the metaverse.
                  </li>
                  <br />
                  <br />
                  <li>
                    Be active! Talk with everyone who takes an interest in your
                    metaverse office. Prove to everyone that your brand doesn't
                    just keep up with trends; it creates them!
                  </li>
                  <br />
                </ol>
              </div>
              <div className="promo-box blog-2-promo">
                <h3>Influencer Marketing</h3>
                <p>
                  Influencer marketing supports brand growth and has the
                  potential to engage millions of people. At the same time,
                  there are a vast amount of conventions and pitfalls that
                  brands are unaware of, and they fail repeatedly. We share
                  insights on how to maximize influencer marketing performance
                  and build long-term success for your brand.
                </p>
                <h4>The ultimate influencer-marketing strategy</h4>
                <ol>
                  <li>
                    To approve the KPI of the promotion. It should comply with
                    industry standards and be comparable with competitors'
                    results. The understanding of the KPI is the first stage of
                    future success.
                  </li>
                  <br />
                  <br />
                  <li>
                    Provide research and explore the influencers that are highly
                    regarded by your competitors. Analyze the formats of content
                    to ensure the most successful and engaging ideas.
                  </li>
                  <br />
                  <br />
                  <li>
                    To maximize performance, brands should diversify their
                    influencer marketing strategy by launching different
                    formats, including live streams, organic integrations,
                    dedicated videos, webinars, web panels, promotional tweets,
                    and tutorials.
                  </li>
                  <br />
                  <br />
                  <li>
                    Attracting the attention of the audience from different
                    geo-locations can help to increase campaign awareness and
                    the results provided by influencer marketing.
                  </li>
                  <br />
                  <br />
                  <li>
                    Create the plan for launching the complex campaigns that
                    include different types of content: integration + webinar,
                    integration + live stream + web panel + dedicated videos,
                    and so on!
                  </li>
                  <br />
                  <br />
                  <li>
                    Use comprehensive software such as HypeAuditor to analyze
                    the influencer's audience, reach, engagement rate, and fraud
                    activity.
                  </li>
                  <br />
                  <br />
                  <li>
                    Discuss the content with each influencer and share ideas on
                    improving the campaign, collecting feedback, and adjusting
                    your strategy according to the influencer's vision and
                    experience. Influencers understand their audience much more
                    deeply.
                  </li>
                  <br />
                  <br />
                  <li>
                    Engage the influencer's audience by organizing the giveaway
                    with exclusive incentives.
                  </li>
                  <br />
                  <br />
                  <li>
                    Send quality-made merch for influencers. They'll provide the
                    content featuring your merchandise and help to increase
                    brand trust.
                  </li>
                  <br />
                  <br />
                  <li>
                    Review influencers' performance each sprint, figure out how
                    to improve it, and provide additional feedback from the
                    clients.
                  </li>
                  <br />
                  <br />
                  <li>
                    Build transparent relationships based on trust and mutual
                    respect. This approach helps to get the benefits from any
                    campaign you launch with influencers.
                  </li>
                </ol>
              </div>
              <div className="conclusion-box">
                <span>
                  <img src={OrangeBulbImg} alt="OrangeBulbImg" /> Conclusion
                </span>
                <p>
                  Influencer marketing can provide benefits for any company and
                  produce incredible results that are not even close to
                  comparable to other traffic sources. However, there are a lot
                  of important aspects to consider when brands are planning an
                  influencer marketing campaign. <br />
                  <br /> Do everything to show your brand to the target
                  audience, improve your marketing, and become the leading
                  company dominating the market!
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
                  description="Check out this comprehensive guide to discovering the most powerful influencers using popular influencer marketing software based on Uptrend’s insights and experience"
                  personImg={Person1}
                  personName="Donna Wanstein"
                  date="12.06.2022"
                  readTime="10 min read"
                >
                  <span>Gaming</span>
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
                  <span>Gaming</span>
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

export default Blog2;
