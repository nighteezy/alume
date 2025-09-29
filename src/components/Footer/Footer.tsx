import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div className="logo">ALUME Institute</div>
          <p>SUSTAINABLE EDUCATION</p>
          <p>
            Nurturing sustainable education and regenerative practices in
            Brazil&apos;s Atlantic Forest through innovative learning
            experiences.
          </p>
          <ul className="social-links">
            <li>
              <i className="fab fa-facebook"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Institute</li>
            <li>School</li>
            <li>Agro-Ecological Immersions</li>
            <li>Volunteering</li>
            <li>Wiki</li>
            <li>Join / Apply</li>
          </ul>
        </div>
        <div className="contacts">
          <h3>Contact</h3>
          <ul>
            <li>Atlantic Forest, Brazil</li>
            <li>contact@alume.institute</li>
            <li>+55 (11) 99999-9999</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="copyright">
          © 2024 ALUME Institute. All rights reserved.
        </div>
        <ul className="links">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </footer>
  );
};
