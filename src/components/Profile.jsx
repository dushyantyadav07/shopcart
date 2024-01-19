import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { logout } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Handle image upload logic here
    console.log("Selected Image:", file);
  };

  return (
    <div className="container">
      {/* Logout Button */}
      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>

      {/* Cart Icon (You can replace it with your cart functionality) */}
      <Link to="/cart" className="btn btn-primary ml-2">
        <i className="fas fa-shopping-cart"></i> Cart
      </Link>
    </div>
  );
};

export default ProfilePage;
