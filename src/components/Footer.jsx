import { FaGithub } from 'react-icons/fa';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#4A2C2A] text-[#F5E6D3]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold">Coffee Haven</h3>
            <p className="text-sm opacity-80 leading-relaxed">Your daily dose of happiness, one cup at a time.</p>
          </div>
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold">Hours</h3>
            <div className="space-y-2">
              <p className="text-sm opacity-80">Monday - Friday: 7am - 8pm</p>
              <p className="text-sm opacity-80">Saturday - Sunday: 8am - 9pm</p>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={22} />
              </a>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-300"
                aria-label="TikTok"
              >
                <FaTiktok size={22} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#F5E6D3]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © 2025 Coffee Haven. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm opacity-80">Developed by JSmitty</span>
              <a
                href="https://github.com/jacobsmxth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;