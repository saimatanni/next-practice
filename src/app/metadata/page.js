const MetaData = () => {
  return <div>Generate MetaData</div>;
};

export default MetaData;

export function generateMetadata({ params }) {
  return {
    title: "User meta data",
    description: "user page description",
  };
}
