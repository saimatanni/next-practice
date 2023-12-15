"use client";
const StudentDetails = ({ params }) => {

  return (
    <div>
      <h2> StudentDetails</h2>
      <h4>name : {params.student}</h4>
    </div>
  );
};

export default StudentDetails;
