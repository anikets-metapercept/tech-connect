import { motion } from "motion/react";
import { useMemo, useState } from "react";
import HomeHeroImg from "../../assets/home/HomeHero.png";

function HomeHero() {
  const headingText = "TechConnect: Where Innovation Meets Conversation";
  const words = useMemo(() => headingText.split(" "), []);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex justify-center items-center pt-[68px] lg:pt-0">
      <div className="w-full flex justify-center items-center flex-col relative">
        <img
          src={HomeHeroImg}
          alt="Resources image"
          className="w-full h-auto relative"
          onLoad={() => setLoaded(true)}
        />
        {loaded && (
          <h1 className="w-[70%] font-semibold text-[18px] sm:text-[32px] lg:text-[56px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {words.map((word, index) => {
              const isHighlight =
                word === "Innovation" || word === "Conversation";
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.3,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  style={{
                    color: isHighlight ? "#FFAC01" : "#FFFFFF",
                    display: "inline-block",
                    marginRight: index === words.length - 1 ? 0 : "0.35em",
                    whiteSpace: "nowrap",
                    fontWeight: isHighlight ? "700" : "500",
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </h1>
        )}
      </div>
    </div>
  );
}

export default HomeHero;
