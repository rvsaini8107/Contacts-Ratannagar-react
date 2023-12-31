import React from "react";
import myPic from "./../images/myPic.png"

const AboutUsPage = () => {
  return (
    <div className="aboutUsPage" id="about">
      <h2 className="About-heading">About Us</h2>
      <div className="about-main">
        <div className="about-img-div">
          {myPic &&<img src={myPic} className="aboutus-img" alt="" />}
        </div>
        <div className="about-p-div">
          <p className="about-p">
            मैं श्रीगणेश सैनी अपने Contacts Ratannagar website में आपका स्वागत
            करता हूं। <br/>यह website रतन नगर के निवासियों को सुविधा प्रदान करने के
            लिए बनाया गया है। <br/>इसमें आपको कोई त्रुटि या कुछ सुझाव देना हो या कुछ
            और नंबर जोड़ना हो तो Contact करें ऊपर दिए गए नंबरों पर | <br />
            धन्यवाद,
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
