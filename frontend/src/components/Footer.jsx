import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-start px-4 md:px-12">
          <div>
            <h3 className="font-bold text-lg">AlwaysApply</h3>
            <p className="text-sm mt-2">
              Call now:{" "}
              <a href="tel:+919591776078" className="text-purple-300">
                +91 9591776078
              </a>
            </p>
            <p className="text-sm mt-1">
              456 Chandni Chowk Street, Near Red Fort, Delhi 110006, India
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Quick Link</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>About</li>
              <li>Contact</li>
              <li>Admin</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg">Candidate</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Browse Jobs</li>
              <li>Browse Employers</li>
              <li>Candidate Dashboard</li>
              <li>Saved Jobs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg">Employers</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Post a Job</li>
              <li>Browse Candidates</li>
              <li>Employers Dashboard</li>
              <li>Applications</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          © 2022 AlwaysApply - Job Portal. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
