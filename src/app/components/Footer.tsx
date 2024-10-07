"use client";
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer  id="footer-section" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: MLSA Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Microsoft Learn Student Ambassadors</h2>
            <p>Empowering students to lead the future with tech.</p>
          </div>
          {/* Right Section: Contact */}
          <div className="text-sm">
            <p>Email: <a href="mailto:mlsa@example.com" className="text-blue-400 hover:underline">mlsa@example.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="text-blue-400 hover:underline">+91 9322793132</a></p>
          </div>
        </div>

        {/* Bottom Footer: Social Media Links */}
        <div className="mt-6 text-center">
          <p>Follow us on social media:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/company/mlsa-dypcet-chapter" className="text-blue-400 hover:text-white" target='_blank'>Linkedin</a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-white" target='_blank'>Twitter</a>
            <a href="https://www.instagram.com/mlsa_dypcet_chapter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-blue-400 hover:text-white" target='_blank'>Instagram</a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 text-center text-gray-400 text-xs">
          <p>© 2024 MLSA Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
