import React from "react";

const AboutUsPage = () => {
  return (
    <div className="aboutUsPage" id="about">
      <h2 className="About-heading">About Us</h2>
      <div className="about-main">
        <div className="about-img-div">
          <img src="" className="aboutus-img" alt="" />
        </div>
        <div className="about-p-div">
          <p className="about-p">
            मैं श्री गणेश सैनी अपने Contacts Ratannagar website में आपका स्वागत
            करता हूं। यह website रतन नगर के निवासियों को सुविधा प्रदान करने के
            लिए बनाया गया है। इसमें आपको कोई त्रुटि या कुछ सुझाव देना हो या कुछ
            और नंबर जोड़ना हो तो कांटेक्ट करें ऊपर दिए गए नंबरों पर | <br />
            धन्यवाद,
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
