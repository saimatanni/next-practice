import { Crimson_Text } from "next/font/google";
const fontRoboto=Crimson_Text({
weight:'600',
subsets:['latin'],
display:'swap'
})
const TeacherLogin = () => {
  return (
    <div className="heading">
      <h1> Teacher login</h1>
      <h1> Font optimisation</h1>
      <h1 className={fontRoboto.className}> Teacher login</h1>
    </div>
  );
};
export default TeacherLogin;
