/*
The essence of this code is to create a footer component that provides important information and links related to your web application. The footer is a common element found on many websites and serves both informational and navigational purposes. It enhances the user experience by offering access to additional resources and contact information while also displaying copyright and source code attribution.
*/
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="icon-div">
        <div className="icon-smedia-container">
          <Image
            src="/images/icon-facebook.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
        <div className="icon-smedia-container">
          <Image
            src="/images/icon-instagram.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
        <div className="icon-smedia-container">
          <Image
            src="/images/icon-twitter.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
        <div className="icon-smedia-container">
          <Image
            src="/images/icon-youtube.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
      </div>
      <div className="div-bs">
        <b>Conditions of Use</b>
        <b>Privacy & Policy</b>
        <b>Press Room</b>
      </div>
      <small>
        <i>©2023 Trae Zeeofor </i>
        <a
          href="https://github.com/traez/movie-discovery-webapp"
          target="_blank"
          className=""
        >
          Source Code
        </a>
      </small>
    </footer>
  );
}
