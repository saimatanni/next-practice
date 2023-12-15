import Link from "next/link";

export default function NotFound() { //global 404 page
  return (
    <div>
      <h1>Page not found</h1>
      <Link href={'/'} >go to home</Link>
    </div>
  );
}
