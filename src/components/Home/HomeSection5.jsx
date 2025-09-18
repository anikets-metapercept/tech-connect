import { useEffect, useRef, useState } from "react";

const Counter = ({ target, label, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const speed = Math.ceil(target / 50);
    const interval = setInterval(() => {
      start += speed;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [target, isVisible]);

  return (
    <div className="flex justify-center items-center flex-col text-center p-1 w-[260px]">
      <div className="font-semibold text-[68px]">
        {count}<span className="font-semibold text-[68px]">+</span>
      </div>
      <div className="font-semibold text-[18px]">{label}</div>
    </div>
  );
};

function HomeSection5() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        background: `
      linear-gradient(to right, #FFAC01, #5ECB38)
      `,
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="w-full flex justify-center items-center flex-col gap-5 md:gap-10 px-4 py-10">
          <div>
            <h3 className="text-[32px] lg:text-[48px] font-semibold uppercase text-center">
              Tech Connect
            </h3>
          </div>
          <div className="w-full flex justify-center items-center flex-wrap gap-5">
            <Counter target={10} label="EDITION" isVisible={isVisible} />
            <span className="hidden h-20 w-[2px] lg:block bg-textHover"></span>
            <Counter target={10} label="SESSIONS" isVisible={isVisible} />
            <span className="hidden h-20 w-[2px] lg:block bg-textHover"></span>
            <Counter
              target={100}
              label="TRAINING DELIVERIES"
              isVisible={isVisible}
            />
            <span className="hidden h-20 w-[2px] lg:block bg-textHover"></span>
            <Counter target={50} label="SPEAKERS" isVisible={isVisible} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection5;
