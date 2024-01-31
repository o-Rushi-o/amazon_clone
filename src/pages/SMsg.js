import React from "react";
import { Link } from "react-router-dom";

function SMsg({ orderId }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg mb-8">Your order #{orderId} has been confirmed.</p>
      <Link to="/Checkout">
        <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-2 px-5 rounded-md mt-3">
          View Order History
        </button>
      </Link>
    </div>
  );
}

export default SMsg;
