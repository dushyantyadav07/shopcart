import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const title = "Register";
const socialTitle = "Login with Social media";
const btnText = "Signup Now";

function Signup() {
  const [errorMessege, setErrorMessege] = useState("");
  const { createUser, signUpWithGmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessege("Please provide valid email or password");
      });
  };
  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.cpassword.value;
    console.log(form, email, password, confirmPassword);

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessege("Please enter a valid email address");
      return;
    }

    // Basic validation for password
    if (password.length < 6) {
      setErrorMessege("Password must be at least 6 characters");
      return;
    }

    // Basic validation for password
    if (password.length < 6) {
      setErrorMessege("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessege("Please Match the both Password");
    } else {
      setErrorMessege("");
      createUser(password, email)
        .then((userCrendential) => {
          const user = userCrendential.user;
          alert("Account Created SuccessFully");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          alert(`${error.message}`);
        });
    }
  };
  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>

              {/* showing messege */}

              {errorMessege && (
                <div className="error-messege text-danger mb-1">
                  {errorMessege}
                </div>
              )}

              <div className="form-group">
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* account bottom */}

            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Have an Account?
                <Link className="px-1" to="/login">
                  Login
                </Link>
              </span>

              <span className="or">OR</span>
            </div>

            {/* social login */}
            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justify-content-center">
              <li>
                <button className="github">
                  <i onClick={handleRegister} className="icofont-github"></i>
                </button>
              </li>
              <li>
                <a href="/" className="instagram">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/" className="twitter">
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/" className="facebook">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
