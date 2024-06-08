import { motion} from "framer-motion";
const SectionTitle = ({ title }) => {
  const firstWord = title?.split(" ")[0];
  const remainingWord = title?.split(" ").slice(1, title?.length).join(" ");
  const moddedTitle = title ? (
    <h3 className="text-3xl font-thin text-center">
      <span className="text-[#ed145b]">{firstWord} </span>
      {remainingWord}
    </h3>
  ) : (
    <h3 className="text-3xl font-thin text-center">
      <span className="text-[#ed145b]">Tourist </span>And Travel Guide
    </h3>
  );
  // console.log(firstWord + remainingWord);
  return (
    <motion.div initial={{opacity:0,translateX : 50,scale:0.5}} whileInView={{opacity : 1,translateX : 0,scale:1}}  viewport={{ once: false,  rootMargin: "+100px 0px" }} className="text-center space-y-3 md:w-[60%] mx-auto">
      {moddedTitle}
      <p className="">
        Ne his postulant posidonium adversarium. Ius tollit tamquam indoctum ea,
        cu quo equidem perfecto adipiscing. Eu mel aliquid delenit. Recteque
        laboramus ea est, te qui eirmod similique.
      </p>
      <span className="w-[30%] block mx-auto bg-gray-400 min-h-[3px]"><span className="w-[25%] block mx-auto bg-[#ed145b] min-h-[2px]"></span></span>
    </motion.div>
  );
};

export default SectionTitle;
