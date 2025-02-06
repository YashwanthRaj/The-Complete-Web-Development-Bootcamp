import React from "react";
import ReactDOM from "react-dom";

const name = "Yashwanth Raj Varadharajan";

const currentYear = "2025";

ReactDOM.render(
  <div>
    <h1 className="heading">Food Images</h1>
    <img
      className="images"
      src="https://www.allrecipes.com/thmb/K0rliBG9KK5j3TCNxZgF5XoAY-s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/270770-garlic-noodles-ddmfs-4x3-0189-95ad30c68efd42e592a70ec82d24f0b9.jpg"
      alt="Noodles"
    />
    <img
      className="images"
      src="https://www.177milkstreet.com/assets/site/Recipes/_large/Butter-Chicken.jpg"
      alt="Butter Chicken"
    />
    <img
      className="images"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&s"
      alt="Briyani"
    />
  </div>,
  document.getElementById("root")
);
