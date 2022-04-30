import React, { useState } from "react";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import NavbarTop from "./comps/NavbarTop";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <NavbarTop />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
