import React from "react";
const subTitle = "Save The Day";
const title = (
  <h2 className="title">
    Join on Day Long Free Workshop for{" "}
    <b>
      Advance <span>Mastering</span>
    </b>{" "}
    on Sales
  </h2>
);
const desc = "Limited Time Offer ! Hurry Up";
function Register() {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subTitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>

          <div className="col">
            <div className="section-wrapper">
              <h4>Regiseter</h4>

              <form className="register-form">
                <input
                  type="text"
                  name="name"
                  className="reg-input"
                  placeholder="Username"
                />
                <input
                  type="email"
                  name="email"
                  className="reg-input"
                  placeholder="Email"
                />
                <input
                  type="number"
                  name="number"
                  className="reg-input"
                  placeholder="Number"
                />
                <button type="submit" className="lab-btn">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
