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
import JournalImg5 from "../assets/img/journal-img-5.png";
import InfluTypeImg from "../assets/img/influtype.svg";
import BlueArrow from "../assets/icons/BlueArrow";
import OrangeBulb from "../assets/icons/OrangeBulb";
import TargetImg from "../assets/img/target-icon.png";
import OrangeBulbImg from "../assets/img/orange-bulb.png";
import JournalImg1 from "../assets/img/journal-img-1.png";
import JournalImg2 from "../assets/img/journal-img-2.png";
import JournalImg3 from "../assets/img/journal-img-3.png";
import BlogCard from "../components/BlogCard";
import { MdArrowForward } from "react-icons/md";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import IconWhatsapp from "../assets/icons/IconWhatsapp";

const Blog4 = () => {
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
                    <p>7.06.2022</p>
                  </div>
                </div>
                <span>5 min read</span>
              </div>
              <div className="blog-main-content">
                <h3>The Art of SEO: Proven Search Engine Strategies</h3>
                <p>
                  If you want your website or blog to grow over the long term,
                  SEO is one of the most critical growth strategies to
                  implement. It is integral to every successful website, as
                  search engines love it. But before we dive into the importance
                  of SEO, we must first learn
                </p>
                <img src={JournalImg5} alt="BlogImg" />
                <h3>What is SEO?</h3>
                <p>
                  SEO stands for Search Engine Optimization –– the process of
                  improving the quality and quantity of traffic sent to your
                  website from search engines like Google or Bing. Optimizing
                  your website improves the chances of acquiring more organic
                  traffic, as most websites don't rely on paid or direct
                  traffic.
                  <br /> <br />
                  The traffic from your website can come from various sources in
                  search engines ranging from text, image, video, news, or
                  industry-specific vertical search engines. SEO experts take
                  into account how the search engines work, how the algorithms
                  work, and what people are looking for in order to get the best
                  result from <b>keywords</b>. The higher your website ranks on
                  multiple keywords, the higher the chance of acquiring more
                  organic traffic. This is why when you write an article; you
                  must structure it according to SEO best practices to get the
                  most out of it –– but more on this later.
                  <br />
                </p>
                <h4>What is a keyword?</h4>
                <p>
                  A <b>keyword</b> is a word that emphasizes what is your
                  content/topic all about and what search engines use to
                  discover and recommend your content. When keywords are used
                  effectively, users on the web will be able to find your
                  website or blog.
                </p>
                <h4>Brief History of SEO</h4>
                <p>
                  It all began in the mid-90s when the first search engines
                  appeared. At first, webmasters only needed to submit an URL
                  address to search engines that, in return, would send a web
                  crawler to crawl it and extract links and words to be indexed.{" "}
                  <br />
                  <br />
                  The first versions of search algos mainly relied on
                  information provided by a webmaster, such as a keyword meta
                  tag or index files from ALIWEB engines. In 1997 engineers of
                  search engines realized that people were abusing the system,
                  gaming it by doing keyword stuffing. Keyword stuffing is the
                  practice of filling content with unnecessary and irrelevant
                  keywords, thus leading to manipulation. In order for search
                  engines to fix this situation, they needed to adapt and
                  improve, moving to a more holistic process for semantic
                  signals. <br />
                  <br />
                  Google released the Panda update in February of 2011, which
                  penalized websites with duplicated content taken from other
                  websites.
                </p>
                <h4>How to proceed when starting with SEO?</h4>
                <p>
                  Create a plan, research keywords, and use websites like
                  <a href="#"> https://neilpatel.com/</a> or{" "}
                  <a href="#">https://moz.com/</a> to further aid your research.
                  Knowing the most searched keywords for the industry you are
                  aiming for is very important. This will help you appropriately
                  structure your articles. <br />
                  <br />
                  Don't forget the images! Be very careful and mindful of the
                  size of an image, and also make sure that it has a description
                  with specific keywords that will help rank the picture in the
                  search engines. <br />
                  <br />
                  Ensure your article is linked to other articles on your
                  website or blog. You need to create an internal web of pages
                  in a sense. Imagine a pyramid that grows over time.
                </p>
              </div>
              <div className="divider"></div>
              <div className="categories-box cat-blog-4">
                <div className="influ-type-box">
                  <img src={InfluTypeImg} alt="" />
                  <div className="influ-text">
                    <h3>
                      Why is SEO (Search Engine Optimization) necessary for your
                      website?{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="promo-box">
                <h3>Higher visibility</h3>
                <p>
                  This is the most obvious one on the list, as good SEO
                  optimization provides more exposure to your website to users
                  as it ranks higher in the search engine list. If you are not
                  ranked higher on the SERP (search engine results page), don't
                  expect to see a lot of traffic to your website. The higher you
                  are ranked, you can expect a more significant number of people
                  to click on your website and vice versa when you rank lower in
                  SERP.
                </p>
                <h4>Improves overall credibility</h4>
                <p>
                  Having your website ranking higher in the SERP boosts
                  credibility and can also cause people to return to your
                  website. If your info is good, expect people to return for
                  reference to your blog or website. Schema markup is very
                  important as it gives out information to Google and provides
                  more info to the users in a concise manner.
                </p>
                <h4>SEO keeps you ahead of the competition</h4>
                <p>
                  It is a battlefield out there, and having your website SEO
                  optimized is like being battle ready. This is how to attract
                  more users/clients rather than the competition. The best part
                  of SEO is that you can continuously improve and stay
                  competitive in the SERP rankings. Researching competitors is
                  an integral part of staying ahead in the game.
                </p>
                <h4>Better user experience</h4>
                <p>
                  User Experience (UX) is one of the most critical aspects of
                  any website or product. Making the website easy to load and
                  navigate improves the potential for it to rank higher in
                  search engines like Google or DuckDuckGo. Keeping the website
                  clear of errors is part of the UX process, and if you don't
                  fix website errors, your blog or website could fall in the
                  SERP ranks by a considerable margin.{" "}
                </p>
                <h4>Reach a wider audience</h4>
                <p>
                  SEO optimization helps you to reach a wider audience with
                  different capital and affinity interests. The better optimized
                  a blog or website is, the higher the conversion rate will be.
                  You need to aim to deliver the right content to the right
                  people who search for it, and this is where keyword mapping
                  comes into play. <br />
                  <br />
                  Keyword mapping is creating a spreadsheet that correlates the
                  URLs to the keywords in them. This will help you optimize
                  content, landing pages, structure your website, etc.
                </p>
              </div>
              <div className="social-network-box sn-blog-4">
                <h3>Is it expensive to do SEO?</h3>
                <p>
                  <b>SEO</b> is not expensive if you want to do it yourself, but
                  it is time-consuming as you must edit every article, link,
                  description, and meta tag. You may need to pay at some point
                  if your website has errors on a more profound level that will
                  require advanced expertise to solve. SEO is a slow and mundane
                  job and is beneficial for the long term. If done right, you
                  can expect dramatic results in the long term.
                </p>
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

export default Blog4;
