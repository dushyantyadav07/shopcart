import React, { useState } from "react";
import Rating from "./Rating";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
function Review() {
  const [reviewShow, setreviewShow] = useState(true);
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setreviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setreviewShow(!reviewShow)}>
          Reviews
        </li>
      </ul>

      {/* desc and review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => {
              return (
                <li key={i}>
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt={review.imgAlt} />
                  </div>

                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                      <div className="rating">
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* add review field */}

          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>Add a Review</h5>
              </div>

              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Full Email"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="mx-2 text-center">Your Rating</span>
                    {/* usung rating components */}
                    <Rating value={rating} onChange={handleRatingChange} />
                  </div>
                </div>

                <div className="col-md-12 col-12">
                  <textarea
                    name="messege"
                    id="messege"
                    rows="8"
                    placeholder="type your messege here"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            nostrum ut sunt vel commodi libero ab, molestiae, sit recusandae
            optio, in obcaecati praesentium? Id asperiores magni nam fugit
            dolores, nisi vero sint, quia odio placeat cum facilis tempora autem
            esse repellendus quam ea beatae pariatur tempore corporis ducimus
            deserunt impedit? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Sint exercitationem sit quisquam, totam facilis
            neque enim asperiores officia. Neque. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eligendi nam est dolorem rem
            perferendis maxime atque natus quo, dolore expedita officia
            voluptatum molestias, culpa repellendus aliquam molestiae
            asperiores? Blanditiis vel quos qui. Doloribus.
          </p>

          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, recusandae.
                </li>
                <li>
                  Lorem ipsum consectetur adipisicing elit. Obcaecati,
                  recusandae.
                </li>
                <li>Lorem ipsum dolor sit amet co Obcaecati, recusandae.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, recusandae.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, recusandae.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
