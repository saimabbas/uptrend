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
import JournalImg3 from "../assets/img/journal-img-3.png";
import InfluTypeImg from "../assets/img/influtype.svg";
import BlueArrow from "../assets/icons/BlueArrow";
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
const Blog1 = () => {
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
                    <h5>Emre Murry</h5>
                    <p>18.06.2022</p>
                  </div>
                </div>
                <span>5 min read</span>
              </div>
              <div className="blog-main-content">
                <h3>
                  Working With Leading YouTube Influencers: A How To Guide
                </h3>
                <p>
                  The emergence of social networks has revolutionized the
                  promotion of goods and services. Marketers began actively
                  using social media to attract an audience, maximize brand
                  loyalty, and increase sales. In our article, we show exclusive
                  insights on how to build a powerful influencer marketing
                  campaign on social media.
                </p>
                <img src={JournalImg3} alt="BlogImg" />
                <h3>What is Influencer marketing?</h3>
                <p>
                  Influencer marketing is the process of promoting and selling
                  products or services through individuals capable of driving
                  action from your target audience.
                  <br /> <br />
                  The basic principle of impact marketing is native and
                  unobtrusive advertising, presented in the form of a friendly
                  recommendation from a famous person. <br />
                  <br />
                </p>
                <p>
                  {" "}
                  <b>Influence marketing objectives: </b>{" "}
                </p>
                <ul>
                  <li>Increase brand awareness</li>
                  <li>Engage the target audience</li>
                  <li>Review the product and service</li>
                  <li>Increase conversion rates and coverage</li>
                  <li>
                    Create the "correct positioning" of the product/service
                  </li>
                  <li>Increase sales</li>
                  <li>Attract the audience to the product's social networks</li>
                </ul>
                <p>
                  {" "}
                  <b>Influencer marketing challenges:</b>{" "}
                </p>
                <ul>
                  <li>
                    Scouting the target influencers to promote the product
                  </li>
                  <li>Verifying the quality of the influencer audience</li>
                  <li>Ensuring the safety of the brand's image</li>
                  <li>Creating the content that inspires an audience</li>
                  <li>Improving the content according to market trends</li>
                </ul>
                <p>
                  The most important part of this type of promotion is to find
                  influencers who provide outstanding performance and know how
                  to promote your product. Let's dive more deeply into this
                  task.{" "}
                  <b>
                    Who are influencers? How do you attract them? How do you
                    make influencers the best friends of your brand?
                  </b>{" "}
                  <br />
                  <br />
                  An influencer is a person who is regarded as an expert within
                  their particular field that also has a steady following.
                </p>
              </div>
              <div className="divider"></div>
              <div className="categories-box">
                <h3>Influencers fall into several categories:</h3>
                <div className="categories-grid">
                  <div className="cat-grid-content">
                    <p>1. By the number of subscribers:</p>
                    <ul>
                      <li>
                        Celebrity influencers are famous individuals who are
                        well-known around the world with an audience of over 1
                        million subscribers. They are usually famous for being
                        actors, singers, musicians, TV personalities, etc.
                      </li>

                      <li>
                        {" "}
                        Macro influencers have a large social media following,
                        usually over 500K followers.
                      </li>
                      <li>
                        {" "}
                        Rising stars are influencers with a fast-growing online
                        audience. They usually have between 100K – 500K
                        followers. Micro influencers have a small social media
                        audience of 5,000 – 20,000 followers.
                      </li>
                      <li>
                        {" "}
                        Nano influencers are the smallest category of
                        influencer. They will have between 1,000 – 5,000
                        followers who engage with their niche content.
                      </li>
                    </ul>
                  </div>
                  <div className="cat-grid-content">
                    <p>2. By niche:</p>
                    <ul>
                      <li>Beauty</li>
                      <li>Fashion</li>
                      <li>Travel</li>
                      <li>Food</li>
                      <li>Fitness/Sports/Health</li>
                      <li>Lifestyle</li>
                      <li>Gaming</li>
                      <li>Auto </li>
                      <li>Etc.</li>
                    </ul>
                  </div>
                  <div className="cat-grid-content">
                    <p>2. By Social networks:</p>
                    <ul>
                      <li>YouTube</li>
                      <li>Twitter</li>
                      <li>Instagram</li>
                      <li>TikTok</li>
                      <li>Twitch</li>
                    </ul>
                  </div>
                </div>
                <div className="influ-type-box">
                  <img src={InfluTypeImg} alt="" />
                  <div className="influ-text">
                    <h3>Types of influencer marketing campaigns</h3>
                    <p>
                      Influencer marketing requires a targeted campaign. You
                      won't achieve strategic success just by paying an
                      influencer with a large audience. Therefore, the first
                      thing you need to do is create a marketing strategy.
                      Implementing your marketing strategy will depend on the
                      formats and tools you choose to influence the audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="promo-box">
                <h3>There are several promotion formats:</h3>
                <ul>
                  <li>
                    <b>Review:</b> A review is content that explores the
                    advantages and disadvantages of a product or service. The
                    format can be any: post, stories, video, or live broadcast.
                  </li>
                  <li>
                    {" "}
                    <b>Integration:</b> Integration is a more native advertising
                    format in which the influencer mentions your
                    product/service.
                  </li>
                  <li>
                    {" "}
                    <b>Giveaway:</b> A giveaway is a contest on a social network
                    with valuable prizes.
                  </li>
                  <li>
                    <b>Unpacking:</b> Unpacking is content that includes a
                    review and testing of the product on camera.
                  </li>
                  <li>
                    <b>Pre-roll:</b> A pre-roll ad is a video advertisement that
                    automatically plays directly before a featured video.
                  </li>
                  <li>
                    <b>Product placement:</b> Product placement is an element of
                    hidden advertising when a product image/logo flashes in the
                    frame.
                  </li>
                  <li>
                    <b>Ambassadorship:</b> It is the attraction of a socially
                    active person who will represent your brand and publicly
                    express their sympathy for the product.
                  </li>
                </ul>
              </div>
              <div className="social-network-box">
                <h3>What types of content can we use in social networks?</h3>
                <p>
                  Utilize the content according to audience engagement on social
                  media.
                </p>
                <div className="social-net-grid">
                  <div className="social-net-flex">
                    <div className="social-flex-content">
                      <p>
                        <b>Instagram content</b>
                      </p>
                      <ul>
                        <li>Photos </li>
                        <li>Photo carousel</li>
                        <li>Videos</li>
                        <li>Reel</li>
                        <li>Instagram Story </li>
                        <li>Instagram Live </li>
                      </ul>
                    </div>
                    <div className="social-flex-content">
                      <p>
                        <b>TikTok content</b>
                      </p>
                      <ul>
                        <li>TikTok videos (short-form) </li>
                        <li>TikTok videos (long-form)</li>
                        <li> Live videos</li>
                      </ul>
                    </div>
                  </div>
                  <div className="social-net-flex">
                    <div className="social-flex-content">
                      <p>
                        <b>Twitch content</b>
                      </p>
                      <ul>
                        <li>Live streams</li>
                        <li>Organic integrations</li>
                        <li>Webinars</li>
                      </ul>
                    </div>
                    <div className="social-flex-content">
                      <p>
                        <b>Twitter content</b>
                      </p>
                      <ul>
                        <li>Tweets</li>
                        <li>Promo videos</li>
                        <li>Twitter threads</li>
                        <li>Live streams</li>
                      </ul>
                    </div>
                  </div>
                  <div className="social-net-flex">
                    <div className="social-flex-content">
                      <p>
                        <b>Youtube content</b>
                      </p>
                      <ul>
                        <li>YouTube dedicated videos</li>
                        <li>YouTube Shorts</li>
                        <li>Live streams</li>
                        <li>Organic integrations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span>
                  <img src={TargetImg} alt="" />
                  Influencer marketing also requires purposeful planning.{" "}
                </span>
                <h4>How to find profitable influencers?</h4>
                <p>
                  Searching for influencers is a complex and time-consuming
                  process. The most common mistake is choosing influencers based
                  on the number of followers. As a result, such a promotional
                  strategy does not yield a predictable outcome. Research
                  influencers' channels to identify only high-performing
                  accounts. <br /> <br /> We recommend using a one-stop-shop
                  influencer marketing software –– for example,
                  <b> Nox Influencer</b>. The service has an extensive database
                  of influencers with proven track records.{" "}
                </p>
              </div>
              <div className="nox-influencers">
                <h3>How to find influencers in Nox Influencer?</h3>
                <p>
                  You can find influencers using Nox Influencer using the
                  following guide:
                  <br />
                </p>
                <ul>
                  <li>YouTube</li>
                  <li>Instagram</li>
                  <li>TikTok</li>
                </ul>{" "}
                <br /> <br />
                <p>
                  Choose a category or select keywords
                  <br />
                  For example, you represent a gaming startup. Enter the
                  keywords suitable for your game into the search bar or select
                  the category "game." <br />
                  <br /> We got over 10,000 relevant accounts. You'll need to
                  configure search filters to make the selection more accurate
                  and fit your requirements. <br />
                  <br />
                  Select settings for search filters <br /> The search filter
                  will help you to form a query more accurately. This will allow
                  you to get a narrower sample. You can configure: <br />
                  <br />
                </p>
                <ul>
                  <li>By audience: area, gender, audience quality.</li>
                  <li>By influencers: region, language, age, gender.</li>
                  <li>
                    By statistics of influencers: engagement rate, number of
                    subscribers, publication date, views/comments.
                  </li>
                </ul>
                <br /> <br />
                <p>
                  <b>Get analytics</b> <br /> After you find potential
                  influencers, you can get a detailed report. Metrics that will
                  help assess the quality of the influencer profile:
                </p>{" "}
                <br />
                <br />
                <ul>
                  <li>
                    Geography of subscribers (where they are located
                    geographically)
                  </li>
                  <li>Age</li>
                  <li>Gender</li>
                  <li>Approximate earnings</li>
                  <li>Engagement rates</li>
                  <li>Comments/Likes</li>
                </ul>
                <br />
                <br />
                <p>
                  {" "}
                  You should also pay attention to the growing audience. The
                  growth should be gradual, without sharp leaps. The graph below
                  shows what the «qualitative» growth of subscribers looks like.{" "}
                  <br />
                  <br />
                  <b>Contact the influencer</b> <br /> Nox Influencer allows you
                  to contact an influencer directly. Formulate your commercial
                  offer. It should be clear and specific. Tell the influencer a
                  little bit about your product, what kind of cooperation is
                  offered, and the payment model. Show an individual approach.{" "}
                  <br />
                  <br /> <b>KPI Tracking</b> <br /> Track all the necessary
                  metrics, enter data, set goals for employees, and always have
                  convenient access to all essential information. <br />
                  <br /> The advantages and disadvantages of influencer
                  marketing <br /> Like all other marketing methods, this one
                  also has its advantages and disadvantages. Let's consider the
                  main ones.
                </p>
                <h4>
                  The advantages and disadvantages of influencer marketing
                </h4>{" "}
                <br />{" "}
                <h5>
                  <b>Pros:</b>
                </h5>
                <ul>
                  <li>
                    <b>Increase brand awareness: </b>Influencer marketing allows
                    brands to talk about their product to a vast audience. This
                    tool plays a key role when the brand enters new markets or
                    launches a new product. Influencer marketing helps to stand
                    out from competitors and generate a big buzz.
                  </li>
                  <li>
                    <b>Powerful content: </b>Influencers are masters at creating
                    content. This is fantastic for brands since influencers can
                    create top-notch, user-generated content about your
                    product/service that you can then share on your platform.
                  </li>
                  <li>
                    <b> Native advertising: </b>Building your influencer content
                    plan to include the different types of content from
                    influencers and utilizing targeted native ads is a highly
                    effective digital strategy for measurable growth.
                  </li>
                </ul>
                <br />
                <br />
                <h5>
                  <b>Cons:</b>
                </h5>
                <ul>
                  <li>
                    <b>Choosing the wrong influencer: </b>There is quite a
                    significant risk of spending a large budget on an influencer
                    with a low-quality audience and not getting the proper
                    coverage or content of the quality that was expected.
                  </li>
                  <li>
                    <b>Difficulty in tracking the company's results: </b>
                    Tracking a campaign and its results in influencer marketing
                    is much more complicated and inconvenient. You will have to
                    resort to additional influencer marketing tools that will
                    help you gain access to the campaign and track its results.
                  </li>
                </ul>
              </div>
              <div className="conclusion-box">
                <span>
                  <img src={OrangeBulbImg} alt="OrangeBulbImg" /> Conclusion
                </span>
                <p>
                  Summing up, we can say that influencer marketing is a
                  reasonably effective means of promotion. It allows you to
                  announce your product anywhere in the world and attract a new
                  audience.
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

export default Blog1;
