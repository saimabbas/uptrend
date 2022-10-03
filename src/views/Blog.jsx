import React, {useEffect, useState} from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";
import "../styles/views/marketing-views.css";
import "../styles/views/blog.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import EmHeroImg from "../assets/img/blog-hero-img.svg";
import BullElevatorImg2 from "../assets/img/bull-elevator-img-2.svg";
import Person from "../assets/img/blog-person.svg";
import JournalImg2 from "../assets/img/journal-img-2.svg";

// Icons
import {MdArrowDownward, MdArrowForward,} from "react-icons/md";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode} from "swiper";
import {gsap} from "gsap";
import {Linear,} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {ScrambleTextPlugin} from "gsap/ScrambleTextPlugin";
// import Tab from "react-bootstrap/Tab";
import BlogCard from "../components/BlogCard";
import {Nav, Tab} from "react-bootstrap";
import {dataAPI, hostname} from "../apiConnection/connect";

const EventMarketing = () => {
    gsap.registerPlugin(
        ScrollTrigger,
        SplitText,
        ScrollSmoother,
        ScrambleTextPlugin
    );
    useEffect(() => {
        // Text Spliting
        const marketingHeading = new SplitText(".im-hero-headings h1", {
            type: "chars, words,lines",
        });
        const marketingHeadingChars = marketingHeading.chars;
        const marketingHeadingLines = marketingHeading.lines;
        const marketingHeadingWords = marketingHeading.words;

        let marketingLandingAnim = gsap.timeline();
        marketingLandingAnim
            .fromTo(
                ".loading-screen",
                {
                    opacity: "1",
                },
                {
                    opacity: "0",
                    delay: 1,
                    duration: 0.5,
                    ease: Linear.easeInOut,
                }
            )
            .fromTo(
                marketingHeadingChars,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.25,
                    stagger: {
                        each: 0.05,
                    },
                }
            )
            .fromTo(
                ".im-hero-headings h3",
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    y: 0,
                    opacity: 1,
                },
                "<0"
            )
            .fromTo(
                ".loading-screen",
                {
                    height: "100vh",
                },
                {
                    height: "0",
                    duration: 0.01,
                },
                "<0"
            );
        gsap.fromTo(
            ".im-hero-explore svg",
            {
                y: 3,
            },
            {
                y: -3,
                ease: Linear.easeInOut,
                duration: 1,
                repeat: -1,
                yoyo: true,
            }
        );
        let homeExpertiseAnim = gsap.timeline({
            scrollTrigger: {
                trigger: ".service-description-grid",
                start: "top 50%",
            },
        });
        homeExpertiseAnim
            .fromTo(
                ".em-sd-grid-card-1-bg",
                {
                    width: 0,
                },
                {
                    width: "100%",
                    duration: 0.5,
                }
            )
            .fromTo(
                ".em-sd-grid-card-2-bg",
                {
                    width: 0,
                },
                {
                    width: "100%",
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-3-bg",
                {
                    width: 0,
                },
                {
                    width: "100%",
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-4-bg",
                {
                    width: 0,
                },
                {
                    width: "100%",
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-1 img",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                },
                "<0.5"
            )
            .fromTo(
                ".em-sd-grid-card-1 h4",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-2 img",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-3 img",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-3 h2",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-3 h6",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-4 img",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-4 h4",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                },
                "<0"
            )
            .fromTo(
                ".em-sd-grid-card-4 ul",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                },
                "<0"
            );
        let scrambleTextStats = gsap.timeline({
            scrollTrigger: {
                trigger: ".platform-stats-section",
                start: "top 50%",
            },
        });
        scrambleTextStats
            .to(".ps-box-1 h3 span", {
                duration: 3,
                scrambleText: {
                    text: "2.3",
                    chars: "0 1 2 3 4 5 6 7 8 9",
                    revealDelay: 0.5,
                    speed: 1,
                    delay: 3,
                },
            })
            .to(
                ".ps-box-2 h3 span",
                {
                    duration: 3,
                    scrambleText: {
                        text: "64",
                        chars: "0 1 2 3 4 5 6 7 8 9",
                        revealDelay: 0.5,
                        speed: 1,
                        delay: 3,
                    },
                },
                0
            )
            .to(
                ".ps-box-3 h3 span",
                {
                    duration: 3,
                    scrambleText: {
                        text: "448",
                        chars: "0 1 2 3 4 5 6 7 8 9",
                        revealDelay: 0.5,
                        speed: 1,
                        delay: 3,
                    },
                },
                0
            );
    }, []);

    const [blog, setBlog] = useState(null)
    const [uniqueCategories, setUniqueCategories] = useState(null)

    useEffect(() => {
        !blog &&
        dataAPI.getAllArticles().then(data => {
            if (data.success) {
                const getUnique = Object.values(
                    data.data.reduce((acc, obj) => ({...acc, [obj.category._id]: obj.category}), {})
                );

                setBlog(data.data)
                setUniqueCategories(getUnique)
            } else {
                console.log("%c Error Getting Information.", 'color: red')
            }
        })
    }, [blog])

    return (
        <main className="app">
            {/* <div className="loading-screen">
        <UTLogo color="#fff" />
      </div> */}
            <div className="event-marketing-page">
                <section className="im-hero-section">
                    <div className="box">
                        <div className="influencer-marketing-content">
                            <Header lightHeader={false}/>
                            <div className="im-hero-headings">
                                <h1>Uptrend Journal</h1>
                            </div>
                            <div className="im-hero-explore">
                                <a href="#">
                                    <span>explore</span>
                                    <MdArrowDownward/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        className="im-hero-img"
                        src={EmHeroImg}
                        alt="EmHeroImg"
                    />
                </section>
                <div className="blog-content-wrapper"/>
                <section className="service-description-section">
                    <div className="box">
                        <div className="heading-sublink-box">
                            <h2>Stories for Passion, Marketing, and Success</h2>
                        </div>
                        {uniqueCategories && blog &&
                            <Tab.Container defaultActiveKey={uniqueCategories && uniqueCategories[0]._id}>
                                <div className="blog-tabs">
                                    <Nav varient="tabs">
                                        <Swiper
                                            slidesPerView={"auto"}
                                            freeMode={true}
                                            spaceBetween={0}
                                            className="ds-tabs-nav"
                                            modules={[Autoplay, FreeMode]}
                                        >
                                            {uniqueCategories && uniqueCategories.map((cat, key) => {
                                                return (
                                                    <SwiperSlide key={key}>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey={cat._id}>{cat.title}</Nav.Link>
                                                        </Nav.Item>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </Nav>
                                </div>
                                <Tab.Content>
                                    {uniqueCategories && uniqueCategories.map((cat, key) => {
                                        let skip = false;
                                        let skip2 = true;

                                        return (
                                            <Tab.Pane eventKey={cat._id} key={key}>
                                                <div className="blog-tabs-content">


                                                    {blog && blog.map((b) => {
                                                        if (b.category._id === cat._id) {
                                                            if (skip2 === true){
                                                                skip2 = false;
                                                                return (
                                                                    <div className="main-blog-grid">
                                                                        <div className="main-blog-grid-left">
                                                                            <div className="white-tag">{cat.title}</div>
                                                                            <h3>
                                                                                {b.title}
                                                                            </h3>
                                                                            <p>
                                                                                {b.description}
                                                                            </p>
                                                                            <div className="blog-img-para">
                                                                                <div className="bipara-left">
                                                                                    <img src={b.author.image === "none" ? Person : hostname + "uploads/user_images/" + b.author.image} alt=""/>
                                                                                    <div className="bi-text">
                                                                                        <h5>{b.author.firstname + " " + b.author.surname}</h5>
                                                                                        <p>{new Date(b.createdAt).toLocaleDateString().replaceAll("/", ".")}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <span>{b.readingTime + " min. read"}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="main-blog-grid-right">
                                                                            <img src={b.featuredImage} alt={b.title}/>
                                                                        </div>
                                                                    </div>
                                                                )

                                                            }

                                                        }


                                                    })}


                                                    <div className="blog-cards-grid">
                                                        {blog && blog.map((b, key) => {

                                                            if (b.category._id === cat._id) {
                                                                if (skip === false){
                                                                    skip = true;

                                                                }else{
                                                                    return (
                                                                        <BlogCard key={b._id}
                                                                                  lightBlogCard={false}
                                                                                  blogImg={b.featuredImage}
                                                                                  heading={b.title}
                                                                                  description={b.description}
                                                                                  personImg={b.author.image === "none" ? Person : hostname + "uploads/user_images/" + b.author.image}
                                                                                  personName={b.author.firstname + " " + b.author.surname}
                                                                                  date={new Date(b.createdAt).toLocaleDateString().replaceAll("/", ".")}
                                                                                  readTime={b.readingTime + " min. read"}
                                                                        >
                                                                            {b.tags.split(",").map((tag, key) => (
                                                                                <span key={key}>{tag}</span>))}
                                                                        </BlogCard>
                                                                    )
                                                                }


                                                            }

                                                        })}

                                                    </div>
                                                    <div className="blog-bcr">
                                                        <div className="ut-breadcrumbs-section">
                                                            <div className="ut-breadcrumbs">
                                                                <div
                                                                    className="ut-breadcrumbs-box ut-breadcrumbs-box-active">
                                                                    1
                                                                </div>
                                                                <div className="ut-breadcrumbs-box">2</div>
                                                                <div className="ut-breadcrumbs-box">3</div>
                                                                <div
                                                                    className="ut-breadcrumbs-box ut-breadcrumbs-box-inactive">
                                                                    ...
                                                                </div>
                                                                <div className="ut-breadcrumbs-box">10</div>
                                                                <div className="ut-breadcrumbs-box">
                                                                    <MdArrowForward/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        )
                                    })}

                                </Tab.Content>
                            </Tab.Container>
                        }

                    </div>
                </section>

                <section className="top-stories">
                    <div className="box">
                        <h2 className="ts-head">Top Stories</h2>
                        <div className="top-stories-content">
                            {blog && blog.map((b, key) => {
                                if (b.star){
                                    return(
                                        <BlogCard key={key}
                                            lightBlogCard={true}
                                            blogImg={b.featuredImage}
                                            heading={b.title}
                                            description={b.description}
                                            personImg={b.author.image === "none" ? Person : hostname + "uploads/user_images/" + b.author.image}
                                            personName={b.author.firstname + " " + b.author.surname}
                                            date={new Date(b.createdAt).toLocaleDateString().replaceAll("/", ".")}
                                            readTime={b.readingTime + " min. read"}
                                        >
                                            {b.tags.split(",").map((tag, key) => (
                                                <span key={key}>{tag}</span>))}
                                        </BlogCard>
                                    )
                                }

                            })}

                            {/*<BlogCard*/}
                            {/*    lightBlogCard={true}*/}
                            {/*    blogImg={JournalImg2}*/}
                            {/*    heading="Top 5 Influencer Marketing Software Solutions To Boost  Brand Growth In 2022 (Part 1)"*/}
                            {/*    description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"*/}
                            {/*    personImg={Person}*/}
                            {/*    personName="Emre Murry"*/}
                            {/*    date="18.06.2022"*/}
                            {/*    readTime="5 mint read"*/}
                            {/*>*/}
                            {/*    <span>Gaming</span>*/}
                            {/*</BlogCard>*/}
                            {/*<BlogCard*/}
                            {/*    lightBlogCard={true}*/}
                            {/*    blogImg={JournalImg2}*/}
                            {/*    heading="Top 5 Influencer Marketing Software Solutions To Boost  Brand Growth In 2022 (Part 1)"*/}
                            {/*    description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"*/}
                            {/*    personImg={Person}*/}
                            {/*    personName="Emre Murry"*/}
                            {/*    date="18.06.2022"*/}
                            {/*    readTime="5 mint read"*/}
                            {/*>*/}
                            {/*    <span>Gaming</span>*/}
                            {/*</BlogCard>*/}
                        </div>
                    </div>
                </section>
                <section className="subs-journal-section">
                    <div className="box">
                        <div className="subs-journal-grid">
                            <div className="sj-grid-left">
                                <h3>
                                    Get an exclusive marketing digest from industry growth experts
                                </h3>
                                <div className="sj-input-box">
                                    <input type="text" placeholder="Email"/>
                                    <button>
                                        SUBSCRIBE <span> TO OUR JOURNAL</span>
                                    </button>
                                </div>
                            </div>
                            <div className="sj-bull-elevator-img-box">
                                <img
                                    loading="lazy"
                                    src={BullElevatorImg2}
                                    alt="BullElevatorImg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </main>
    );
};

export default EventMarketing;
