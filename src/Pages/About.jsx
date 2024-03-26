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
            <svg width="98" height="96" xmlns="pic"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
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
                    <svg width="98" height="96" xmlns="pic"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
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
