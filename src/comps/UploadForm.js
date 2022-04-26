import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      // pn output div show file name
      //  {/* {file && <div className="upload-label">Uploading {file.name}</div>} */}

    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form>
      <div class="container">
        <div class="profile">
          <div class="profile-image">
            <img className="circular-img" alt="" />
          </div>
          <div class="profile-user-settings">
            <h1 class="profile-user-name">davexyza_</h1>
            <label className="profile-edit-btn">
              <input type="file" onChange={handleChange} />
              Add Post
            </label>
          </div>

          <div class="profile-stats">
            <ul>
              <li>
                <span class="profile-stat-count">5</span> Happy
              </li>
              <li>
                <span class="profile-stat-count">6</span> Birthday
              </li>
              <li>
                <span class="profile-stat-count">22</span> Bebi!
              </li>
            </ul>
          </div>

          <div class="profile-bio">
            <p>
              <span class="profile-real-name"></span> compilation of our
              pictures since we met (✿◠‿◠)♡
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="upload-label">Posting</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
