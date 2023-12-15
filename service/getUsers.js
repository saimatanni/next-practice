export default async function GetUser() {
  const result = await fetch("https://dummyjson.com/users");
  return result.json();
}
