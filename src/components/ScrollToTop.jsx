import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function ScrollToTop() {
  const handleScrollBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleScrollBtn}
      className="fixed bottom-4 right-2 lg:right-4 cursor-pointer z-50"
    >
      <MdKeyboardDoubleArrowUp className="size-10 rounded-full bg-[#fe5e45] text-white p-2 shadow-lg hover:scale-110 transition-transform duration-300" />
    </div>
  );
}

export default ScrollToTop;
