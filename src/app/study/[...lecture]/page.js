"use client"; //client server
export default function Lecture({ params }) {
  console.log("params", params);
  //catch all segement
  return (
    <div>
      <h1>Day of colege {params.lecture[0]}</h1>
      <h2>lecture no: {params.lecture[1]}</h2>
    </div>
  );
}
