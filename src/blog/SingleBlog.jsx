import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../shop/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];
const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((blg) => blg.id === Number(id));
  return (
    <div>
      <PageHeader title={"Sigle Blog Page"} currPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        {result.map((item) => {
                          return (
                            <div key={id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt={item.imgAlt}
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h2>{item.title}</h2>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => {
                                      return (
                                        <li key={i}>
                                          <i className={val.iconName}>
                                            {val.text}
                                          </i>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Et ipsum facere laudantium
                                  minus pariatur debitis corrupti id quod ad
                                  voluptatem! Fugiat mollitia eius illo in vel
                                  fuga soluta iure repudiandae perferendis vitae
                                  laudantium, beatae molestiae? Molestiae
                                  deleniti deserunt voluptas doloremque beatae!
                                  Inventore, dolorum at? Deleniti ipsam corrupti
                                  culpa quidem asperiores illo ipsa a, esse
                                  expedita est. Quam, atque! Assumenda
                                  aspernatur nesciunt porro aut voluptatibus
                                  impedit, eaque deserunt quas vel minima?
                                </p>

                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Nisi delectus repudiandae
                                    porro, dolore, minima, esse deserunt quod
                                    mollitia aliquid modi eligendi iusto! Amet,
                                    quos laborum neque vel fugiat temporibus ab!
                                  </p>
                                  <cite>
                                    <a href="#">...Dushyant Yadav</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Yourstory is the perfect place on the web to
                                  learn how the great leaders were born. This is
                                  one of the popular blogs in India that mainly
                                  covers startup related stuff to inspire people
                                  around online. Basically, Yourstory emphasizes
                                  on women power and why should not, when there
                                  are women who are such successful leaders.
                                  Shardha Sharma is the founder and
                                  editor-in-chief of Yourstory. This blog has
                                  made a great market value in a short time. It
                                  deals with success stories, business
                                  guidelines and start ups.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt="loding..."
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Sunt aliquam quas, obcaecati
                                  soluta iure voluptatum. Magnam blanditiis
                                  impedit ipsum perspiciatis velit sequi rem
                                  laborum numquam laboriosam consequuntur,
                                  exercitationem possimus dolorum aut, quasi
                                  soluta dolorem saepe quisquam maiores, quis
                                  laudantium optio molestiae ab. Cum aperiam rem
                                  fugiat quam. Dignissimos, delectus cupiditate!
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt="loding..."
                                  />
                                  <a
                                    href="https://www.youtube.com/watch?v=nu_pCVPKzTk"
                                    target="_blank"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Yourstory is the perfect place on the web to
                                  learn how the great leaders were born. This is
                                  one of the popular blogs in India that mainly
                                  covers startup related stuff to inspire people
                                  around online. Basically, Yourstory emphasizes
                                  on women power and why should not, when there
                                  are women who are such successful leaders.
                                  Shardha Sharma is the founder and
                                  editor-in-chief of Yourstory. This blog has
                                  made a great market value in a short time. It
                                  deals with success stories, business
                                  guidelines and start ups.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((item, i) => {
                                      return (
                                        <li key={i}>
                                          <a
                                            href="#"
                                            className={item.className}
                                          >
                                            <i className={item.iconName}></i>
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="navigations-part">
                    <div className="left">
                      <a href="#">
                        <i className="icofont-double-left"></i>Previous blog
                      </a>
                      <a href="#" className="title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, voluptate!
                      </a>
                    </div>{" "}
                    <div className="right">
                      <a href="#">
                        <i className="icofont-double-right"></i>Next blog
                      </a>
                      <a href="#" className="title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, voluptate!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-12">
            <aside>
              <Tags />
              <PopularPost />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
