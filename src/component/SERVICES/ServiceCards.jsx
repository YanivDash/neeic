import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../STYLES/servicesCard/serviceCard.css";

const ServiceCards = () => {
  const data = [
    {
      title: "Online Business & Engineering Consultation",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/9Vo2nj1/:/cr=t:4.95%25,l:0%25,w:100%25,h:90.1%25/rs=w:1240,h:620,cg:true",
    },
    {
      title: "Real Estate",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/1255/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
    },
    {
      title: "Export-Import of Goods",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:600,h:300,cg:true",
    },
    {
      title: "Design Engineering, Oil & Gas and Supplies Services",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/8209/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
    },
    {
      title: "Restaurant, Pub & Bar Setup Consultant",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/by3JjWk/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
    },
  ];

  return (
    <motion.div className='service_card_container'>
      <motion.div className='service_card_heading'>
        <Link to='/services'>
          <h1>Services</h1>{" "}
        </Link>
      </motion.div>

      <div className='service_card'>
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: "-100px" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className='service_card_item'
            key={index}
          >
            <img src={item.imageSrc} alt='' />

            <h3>{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCards;
