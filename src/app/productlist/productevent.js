"use client";
export default function ProductEvent(props) {
  return (
    <div>
      <button onClick={() => alert(props.price)}>check price</button>
    </div>
  );
}
