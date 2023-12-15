"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
  const pathName = usePathname(); //conditional layout
  return (
    <>
      <h1>Common login</h1>
      {pathName !== "/login/teacherlogin" ? (
        <ul className="login-menu">
          <li>
            <h4>Navbar</h4>
          </li>
          <li>
            <Link href={"/login/studentlogin"}>Student login</Link>
          </li>
          <li>
            <Link href={"/login/teacherlogin"}>teacher login</Link>
          </li>
          <li>
            <Link href={"/login"}>main login</Link>
          </li>
        </ul>
      ) : (
        <li>
        <Link href={"/login"}>main login</Link>
      </li>
      )}

      {children}
    </>
  );
}
