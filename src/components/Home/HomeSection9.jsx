import img1 from "../../assets/home/gallery/1.jpg";
import img2 from "../../assets/home/gallery/2.jpg";
import img3 from "../../assets/home/gallery/3.jpg";
import img4 from "../../assets/home/gallery/4.jpg";
import img5 from "../../assets/home/gallery/5.jpg";
import img6 from "../../assets/home/gallery/6.jpg";
import img7 from "../../assets/home/gallery/7.jpg";
import img8 from "../../assets/home/gallery/8.jpg";

function HomeSection9() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 my-5">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
        <img className="object-cover rounded-lg w-full h-full" src={img1} alt="" />
        <img className="object-cover rounded-lg w-full h-full" src={img2} alt="" />
        <img className="object-cover rounded-lg w-full h-full" src={img3} alt="" />
        <img className="object-cover rounded-lg w-full h-full" src={img4} alt="" />
        <img className="object-cover rounded-lg w-full h-full" src={img5} alt="" />
        <img className="object-cover rounded-lg w-full h-full" src={img6} alt="" />
        <img className="object-cover rounded-lg w-full h-full" src={img7} alt="" />
        <img className="object-cover rounded-lg w-full h-full" src={img8} alt="" />
      </div>
    </div>
  );
}

export default HomeSection9;
