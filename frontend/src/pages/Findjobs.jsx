import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const Findjobs = () => {
  const recommendations = useSelector((state) => state.recommendation);
  // Adjust based on your store structure
  console.log(recommendations);
  
  return (
    <div>
      <h1>Recommended Jobs</h1>
     
    </div>
  );
};

export default Findjobs;
