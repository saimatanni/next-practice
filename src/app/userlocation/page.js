'use client'
import Script from "next/script";

export default function UserLocation() {
  return (
    <div>
      <Script //script import
        src="/location.js"
        onLoad={() => {
          console.log("file loded");
        }}
      />
      <h1>Get user location</h1>
      <h1>Get user list</h1>
    </div>
  );
}
