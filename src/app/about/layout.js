import Link from "next/link";
import "./about.css";
export default function Layout({ children }) {
  return (
    <>
      <h1>Common login</h1>
      <ul className="about-menu">
        <li>
          <h4>Navbar</h4>
        </li>
        <li>
          <Link href={"/about/aboutstudent"}>Student about</Link>
        </li>
        <li>
          <Link href={"/about/aboutcollege"}>teacher about</Link>
        </li>
        <li>
          <Link href={"/about"}>main about</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
