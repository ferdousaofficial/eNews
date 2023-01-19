export default function MoreNews(props) {
  return (
    <div className=" py-6 grid place-content-center mb-5">
      <button
        onClick={props.incrementNewsLimit}
        className="bg-buttonBg text-white py-3 px-10 rounded-full  transition-all duration-300 hover:scale-105"
      >
        More News
      </button>
    </div>
  );
}
