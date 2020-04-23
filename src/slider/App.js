import React from "react";
import Slider from "./Slider";

function App() {
  let urls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Red_rose.jpg/220px-Red_rose.jpg",
    "https://i.pinimg.com/originals/e1/ce/f4/e1cef4b806afa461019f6ffd0f1c8d09.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41V24mwWtWL.jpg"
  ];
  return (
    <div>
      <Slider data={urls} />
    </div>
  );
}

export default App;
