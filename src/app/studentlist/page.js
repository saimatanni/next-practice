import Link from "next/link";

const StudentList = () => {
  const studentarray = [
    {
      id: 1,
      name: "Tanni",
    },
    {
      id: 2,
      name: "Sayma",
    },
    {
      id: 3,
      name: "Farju",
    },
  ];
  return (
    <div>
      {" "}
      <h4>student list</h4>{" "}
      <ul>
        {studentarray.map((item) => {
          return (
            <li key={item.id}>
              <Link href={"/studentlist/" + item.name}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default StudentList;
export function generateMetadata({ params }) {
  return {
    title: "Student meta data",
    description: "Student page description",
  };
}

