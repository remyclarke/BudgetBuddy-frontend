import React from "react";
import "./About.css"


// const About = () => {
//   return <div>About</div>;
// };

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-dev">About Code 418 🫖 Developers</h1>
      <ul className="developer-list">
        <li className="developer">
          <h2>Anita</h2>
          <a href="https://github.com/AnitaOwen" className="github-link" target='_blank'>
          <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711312831/TeaWhips-slide1_spdyvw.jpg" alt="Anita!" width="300" height="300"/>
          </a>
          <p className="fun-fact"> <b>Facts:</b> "?"
          </p>
        </li>
        <li className="developer">
        <h2>Brenda</h2>
                <a href= "https://github.com/BSoto85" className ="github-link" target='_blank'>
                <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711388131/TeaWhips-Brenda_ybojtq.jpg" alt="Brenda!" width="300" height="300"/>
                </a>
            <p className="fun-fact"> <b>Facts:</b> "Brenda Soto is an aspiring full-stack web developer with a rich background in veterinary technology. Transitioning into tech, she brings a unique perspective and problem-solving skills honed over years of hands-on experience. Currently enrolled in Pursuit's 12-month mentorship program, Brenda is passionately learning the intricacies of web development, from front-end design to back-end logic. Her journey is a testament to her adaptability and eagerness to embrace new challenges in the tech world."</p>
        </li>
        <li className="developer">
        <h2>Kenneth</h2>
                <a href= "https://github.com/KenCab123" className ="github-link" target='_blank'>
                <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711480425/TeaWhips-HotRod_k7i3hu.avif" alt="Kenneth!" width="300" height="300"/>
                </a>
                <p className="fun-fact"> <b>Facts:</b> "?" </p>
        </li>
        <li className="developer">
        <h2>Marlon</h2>
                <a href= "https://github.com/MarlonPelau" className ="github-link" target='_blank'>
                <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711051183/TeaWhip10_zettiw.webp" alt="Marlon!" width="300" height="300"/>
                </a>
                <p className="fun-fact"> <b>Facts:</b> "Moving into the world of tech at Pursuit.org, I've been learning many different languages and methods to become a great Fullstack engineer, web designer or software developer. For me, this pivot away from living in LA as a media/marketing professional, creative writer/blogger and music journalist, has been an adjustment and challenge living in NYC, to say the least. However, I'm well on my way into finding a great fusion, including my past expertise in this newfound journey!"</p>
        </li>
      </ul>
    </div>
  );
}
