import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={18} onSetRating={setMovieRating} />
//       <p>This was Movie {movieRating} Stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating
      size={24}
      maxRating={7}
      color="red"
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
