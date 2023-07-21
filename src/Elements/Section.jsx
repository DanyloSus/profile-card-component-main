import React from "react";

function Section() {
  return (
    <section>
      <img src="./image-victor.jpg" alt="image victor" />
      <div className="name">
        <h3>Victor Crest</h3>
        <p>26</p>
      </div>
      <p>London</p>
      <div className="stats">
        <div>
          <h3>80k</h3>
          <p>followers</p>
        </div>
        <div>
          <h3>80.3k</h3>
          <p>likes</p>
        </div>
        <div>
          <h3>1.4k</h3>
          <p>photos</p>
        </div>
      </div>
    </section>
  );
}

export default Section;
