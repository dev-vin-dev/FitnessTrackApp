import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-gray-100 text-gray-600">
      © {new Date().getFullYear()} Fitness Tracker. All rights reserved.
    </footer>
  );
};

export default Footer;
