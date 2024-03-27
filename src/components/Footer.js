import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="my-auto  bg-gray-900 text-white py-4">
      <div className="flex justify-center items-center">
        <ul className="flex space-x-4">
          <li className="flex items-center">
            <span className="h-3 w-3 bg-white rounded-full mr-2"></span> Terms &
            Conditions
          </li>
          <li className="flex items-center">
            <span className="h-3 w-3 bg-white rounded-full mr-2"></span> Privacy
            Policy
          </li>
          <li className="flex items-center">
            <span className="h-3 w-3 bg-white rounded-full mr-2"></span> Refund
            Policy
          </li>
        </ul>
      </div>

      <br></br>
      <div className="container text-center text-slate-400 font-normal ">
        <h5>
          Address: NALANDA 53/1 C, Manoj Arcade, 24th Main Rd, Sector 2, HSR
          Layout, Bengaluru - 560102, Karnataka, India.Phone No:1800-212-7688
        </h5>
        <span>
          © 2009-2023- ITsoftware solutions. All Rights Reserved. The
          certification names are the trademark of their respective owners.
        </span>
      </div>

      <div className=" container flex mt-10 h-20 max-w-full">
        <div className="  ml-20 p-3 w-40 ">Call us on 1800-212-7688</div>

        <div className="  max-w-xl text-center ml-60 ">
          <p>&copy; {new Date().getFullYear()} IT Software courses Academy</p>
          <p>Contact: webdevelopacademy123@email.com</p>
        </div>

        <div className=" mx-auto p-2 h-11 ">
          <p>Follow us on !!!! </p>
          <div>
            <ul className="flex space-x-8 items-center">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/simplilearn"
                >
                  <FaFacebook size={32} />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://www.twitter.com/simplilearn"
                >
                  <FaTwitter size={32} />
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/company/simplilearn"
                >
                  <FaLinkedin size={32} />
                </a>
              </li>
              <li>
                <a
                  className="youtube text-red-500"
                  href="https://www.youtube.com/user/Simplilearn"
                >
                  <FaYoutube size={32} />
                </a>
              </li>
              <li>
                <a
                  className="telegram text-blue-500"
                  href="https://www.telegram.com/user/Simplilearn"
                >
                  <FaTelegram size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
