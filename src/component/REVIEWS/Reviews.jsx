import React from "react";
import { profile } from "../../assets";
import { motion } from "framer-motion";
import "../STYLES/reviews/reviews.css";
const Reviews = () => {
  const reviewData = [
    {
      name: "vinay latwal",
      profileImg: "",
      company: "J And T private Limited",
      testimony:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, eius incidunt accusantium labore deleniti ad laudantium fuga ipsum pariatur quisquam ipsa tenetur, unde dolorem veritatis aspernatur animi magnam totam omnis.",
    },
    {
      name: "Sara Lee",
      profileImg: "",
      company: "Yousun honk",
      testimony:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, eius incidunt accusantium labore deleniti ad laudantium fuga ipsum pariatur quisquam ipsa tenetur, unde dolorem veritatis aspernatur animi magnam totam omnis.",
    },
    {
      name: "yaniv singh",
      profileImg: "",
      company: "oda estacsy",
      testimony:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, eius incidunt accusantium labore deleniti ad laudantium fuga ipsum pariatur quisquam ipsa tenetur, unde dolorem veritatis aspernatur animi magnam totam omnis.",
    },
  ];
  return (
    <div className='review_container'>
      <motion.div className='testimonials'>
        <p>what others think about us</p>
        <h1>Testimoiniols</h1>
      </motion.div>
      <div className='review_card_container'>
        {reviewData.map((item, index) => (
          <motion.div className='review_card' key={index}>
            <h1 className='review_quote'>"</h1>
            <div className='review_test'>
              <p>{item.testimony}</p>
              <div className='review_data'>
                <div className='review_data_text'>
                  <p>{item.name}</p>
                  <p>{item.company}</p>
                </div>
                <div>
                  <img src={profile} alt='' />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
