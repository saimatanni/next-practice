import Link from "next/link";

export default function AboutNotFound() { //route 404 page
    return (
      <div>
        <h1>About Page not found</h1>
        <Link href={'/'} >go to home</Link>
      </div>
    );
  }
  