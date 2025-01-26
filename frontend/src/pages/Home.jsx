import React, { useState } from "react";
import Navbar from "../components/Navbar";
import hompageImage from "../assets/homepage.png";
import Footer from "../components/Footer";
import axios from 'axios'

const Home = () => {

  const [job,setJob]=useState({title:"",city:""})

  async function reccomendJobs() {
    const res=await axios.post('http://localhost:8001/',job,
      {
        headers: {
          'Content-Type': 'application/json',
      }
    }
    )
    if(res){
      console.log(res);
    }else{
      console.log(error);      
    }
  }


  return (
    <div>
      <nav className="p-8 pt-0">
        <Navbar />
      </nav>
      <div className="bg-gray-50 min-h-screen pt-6">
        <div className="flex flex-row p-8 bg-gradient-to-r from-[#e3c1fc] to-[#f3e7fb]">
          <header className="text-center py-12 ">
            <h1 className="text-4xl font-bold text-gray-800">
              Find a job that aligns with your interests and skills
            </h1>
            <p className="text-gray-600 mt-4">
              Thousands of jobs in all the leading sectors are waiting for you.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <input
                type="text"
                name="title"
                placeholder="Job title, Keyword..."
                className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e)=>(setJob({...job,title:e.target.value}))}
              />
              <input
                type="text"
                name="city"
                placeholder="Location"
                className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e)=>(setJob({...job,city:e.target.value}))}
              />
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600" onClick={reccomendJobs}>
                Find Job
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Suggestions: UI/UX Designer, Programming, Digital Marketing,
              Video, Animation.
            </p>
          </header>
          <div>
            <img src={hompageImage} alt="" className="animate-pulse relative mx-auto h-96 w-auto" />
          </div>
        </div>

        <section className="py-12">
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Featured Jobs
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Choose jobs from the top employers and apply for the same.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
            {/* Replace these divs with your actual job cards */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="font-bold text-gray-800">
                Technical Support Specialist
              </h3>
              <p className="text-sm text-green-600">PART-TIME</p>
              <p className="mt-2 text-gray-700">
                Salary: 20,000 INR - 25,000 INR
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Google Inc., New Delhi, India
              </p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                Apply Now
              </button>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="font-bold text-gray-800">Senior UI/UX Designer</h3>
              <p className="text-sm text-blue-600">FULL-TIME</p>
              <p className="mt-2 text-gray-700">Salary: $30,000 - $55,000</p>
              <p className="mt-1 text-sm text-gray-500">Apple, Boston, USA</p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                Apply Now
              </button>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="font-bold text-gray-800">Marketing Officer</h3>
              <p className="text-sm text-green-600">PART-TIME</p>
              <p className="mt-2 text-gray-700">
                Salary: 15,000 INR - 35,000 INR
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Intel Corp, Bangalore, India
              </p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                Apply Now
              </button>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="text-purple-500 font-semibold">View All</button>
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Top companies hiring now
          </h2>
          <div className="mt-8 flex justify-center gap-8">
            {/* Space for company logos */}
            <div className="w-20 h-12 bg-gray-200 rounded"></div>
            <div className="w-20 h-12 bg-gray-200 rounded"></div>
            <div className="w-20 h-12 bg-gray-200 rounded"></div>
            <div className="w-20 h-12 bg-gray-200 rounded"></div>
            <div className="w-20 h-12 bg-gray-200 rounded"></div>
          </div>
        </section>
        <Footer />
        {/* <footer className="py-8 bg-gray-800 text-white">
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
        </footer> */}
      </div>
    </div>
  );
};

export default Home;
