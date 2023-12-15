"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { api_BASE_URL } from "./const/page";
export default function Home() {
  const router = useRouter();
  const navigate = (page) => {
    router.push("/about" + page);
  };
console.log('process.env', process.env.SERVER_PASSWORD)
  return (
    <main>
      <h1>Home page</h1>
      <h1>
        {api_BASE_URL}
      </h1>
      <br />
      <Link href={"/login"}>Go to login page</Link>
      <br />
      <br />
      <Link href={"/about"}>Go to about page</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login")}>go to login</button>
      <br />
      <br />
      <button onClick={() => navigate("/aboutstudent")}>go to student</button>
      <br />
      <br />
      <button onClick={() => navigate("/aboutcollege")}>go to college</button>
      <br />
      <button onClick={() => navigate("/studentlist")}>
        go to studentlist
      </button>
      <br />
      <br />
      <button onClick={() => router.push("/productlist")}>
        go to productList
      </button>
      <br />
      <br />
      <button onClick={() => router.push("/metadata")}>
        go to metadata
      </button>
      <br />
      <br />
      <button onClick={() => router.push("/userlocation")}>
        go to user location
      </button>
      <br />
      <br />
      <button onClick={() => router.push("/user")}>
        go to user
      </button>
    </main>
  );
}
