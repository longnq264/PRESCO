"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const Members = () => {
  const [members, setMembers] = useState([]);
  console.log(members);
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/images");
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="member-container">
      {members.map((data) => (
        <div key={data.id}>
          {console.log(data.src)}
          <Image src={`../assets${data.src}`} alt="member" fill />
        </div>
      ))}
    </div>
  );
};

export default Members;
