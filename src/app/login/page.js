"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div>
      <h1 className="heading">login page</h1>
      <Link href="/">Go to home page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/")}>go to home</button>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>go to about</button>
      <br />
      <br />
      <button onClick={() => navigate("/studentlist")}>go to studentlist</button>
    </div>
  );
};

export default Login;
