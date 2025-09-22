import Main_Logo from "../assets/techConnect.png";
import { MdOutlinePhoneInTalk, MdMail } from "react-icons/md";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#051639] border-t border-t-white/70">
      <div className="max-w-screen-2xl mx-auto text-white py-5 px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(180px,auto)_1fr_1fr_minmax(180px,auto)] gap-8 sm:gap-10 md:gap-5">
        <div className="flex justify-start items-center">
          <img
            src={Main_Logo}
            alt="TechConnect Logo"
            className="w-24 sm:w-28 h-auto"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start justify-start gap-2">
              <MdMail className="size-5" />
              <a
                href="mailto:letsconnect@techconnect-space.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                letsconnect[at]techconnect-space[dot]com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlinePhoneInTalk className="size-5" />
              <a
                href="tel:+917420965726"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +91-742-096-5726
              </a>
            </li>
          </ul>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-y-3 text-sm">
            <li>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/gdpr-compliance"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GDPR Compliance
              </a>
            </li>
            <li>
              <a
                href="/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="/refund-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Social Links */}
        <div className="flex justify-start items-start lg:items-center flex-col">
          <h3 className="font-semibold text-lg mb-4">Social Links</h3>
          <div className="flex items-center gap-5 text-xl">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-gray-400"
            >
              <FaXTwitter className="size-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
            >
              <FaLinkedinIn className="size-5" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-400"
            >
              <FaInstagram className="size-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full mt-10 py-4 text-center text-[14px] text-white border-t border-gray-700">
        &#169; 2025 DITAXPRESSO TECHNOLOGY PRIVATE LIMITED. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
