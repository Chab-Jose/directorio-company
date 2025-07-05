
function Card({ children, className = '', ...props }) {
  return (
    <div
      className="bg-white w-5/6 shadow-md rounded-md p-6"
    >
      {children}
    </div>
  );
}

export default Card;
