import { motion, AnimatePresence } from "framer-motion";
import {
  banner,
  service0,
  service1,
  service2,
  service3,
} from "../../../assets";
import "../../STYLES/banner/banner.css";
import { fadeIn } from "../../../utils/motion";

const Banner = () => {
  const carouseData = [service0, service1, service2, service3];

  return (
    <motion.div className='banner_container'>
      <motion.div className='banner_image'>
        <img src={banner} alt='' />
      </motion.div>
      <div className='darkenBanner'></div>
      <motion.div className='banner_header'>
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.2,
            duration: 0.9,
            ease: "easeOut",
          }}
          className='banner_text'
        >
          <h1>
            NIIEC<span>Private india limited</span>
          </h1>

          <h3>Build your own Success</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            provident blanditiis ad soluta natus aspernatur.{" "}
          </p>
          <motion.button
            whileHover={{ scale: 1.1, borderRadius: "10px" }}
            whileTap={{ scale: 0.9 }}
            className='banner_button'
          >
            Buy online
          </motion.button>
        </motion.div>
        <motion.div className='banner_carousel'>
          <AnimatePresence>
            <motion.div className='banner_carousel_img_container'>
              {carouseData.map((item, index) => (
                <motion.div
                  animate={{
                    y: "-280%",
                  }}
                  transition={{
                    duration: 50,
                    type: "tween",

                    repeat: "infinity",
                  }}
                  key={index}
                  className='banner_carousel_image'
                >
                  <img src={item} alt='serviceImg' />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
