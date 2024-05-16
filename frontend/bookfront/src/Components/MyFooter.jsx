import React from 'react';
import { Footer } from 'flowbite-react';

const MyFooter = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* COMPANY */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">COMPANY</h3>
            <ul className="text-white">
              <li>About</li>
              <li>Careers</li>
              <li>Brand Center</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* HELP CENTER */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">HELP CENTER</h3>
            <ul className="text-white">
              <li>Discord Server</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* LEGAL */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">LEGAL</h3>
            <ul className="text-white">
              <li>Privacy Policy</li>
              <li>Licensing</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          {/* DOWNLOAD */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">DOWNLOAD</h3>
            <ul className="text-white">
              <li>iOS</li>
              <li>Android</li>
              <li>Windows</li>
              <li>MacOS</li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-700 my-8" />
        <p className="text-white text-center">&copy; 2023 Flowbite™. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default MyFooter;
