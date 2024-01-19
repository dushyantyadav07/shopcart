import React, { useState } from "react";

function CheckOutPage() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  const handleTabChange = (tableId) => {
    setActiveTab(tableId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="modalCard">
      <button
        className="bg-primary py-2 text-white rounded"
        onClick={handleShow}
      >
        Proceed to Checkout
      </button>
      {/* still work is pending on proceed checkout */}
    </div>
  );
}

export default CheckOutPage;
