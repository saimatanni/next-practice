import Link from "next/link";

const About = () => {
  return (
    <>
      <h1 className="heading">About page</h1>
      <Link href="/">Go to home page</Link>
      <br />
      <br />
      <Link href="/about/aboutstudent">Go to student page</Link>
      <br />
      <br />
      <Link href="/about/aboutcollege">Go to college page</Link>
    </>
  );
};
export default About;
