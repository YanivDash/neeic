import { motion } from "framer-motion";
import "../STYLES/services/services.css";

const Services = () => {
  const data = [
    {
      title: "Online Business & Engineering Consultation",
      discription:
        "Let us sit down with you and look over your proposed plan. Do you have questions about your current plan? Do you have an upcoming project that needs an our experts push? With a consultation, we can get you on the right track. ",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/9Vo2nj1/:/cr=t:4.95%25,l:0%25,w:100%25,h:90.1%25/rs=w:1240,h:620,cg:true",
    },
    {
      title: "Real Estate",
      discription:
        "There will come a time in your business or personal promotion when you need some additional help with marketing. In addition to long-term marketing support, we can be available for extra hours during new releases and other important events.",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/1255/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
    },
    {
      title: "Export-Import of Goods",
      discription:
        "Every business needs a sound promotion plan in order to survive. Starting from an understanding of your target market, we will develop a plan with easy to follow steps for import / export go goods around the globe.;",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:600,h:300,cg:true",
    },
    {
      title: "Design Engineering, Oil & Gas and Supplies Services",
      discription:
        "We are a team of professional engineers with varied experience both in onshore as well as offshore operations. The years of experience in international operations has given the group a unique insight in to the approach to planning, execution and troubleshooting issues in drilling and completions of oil & gas wells.",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/8209/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
    },
    {
      title: "Restaurant, Pub & Bar Setup Consultant",
      discription:
        "We provide solutions that are tailored to customers’ specific brand requirements. it’s our natural way of business to respect ideas and keep them confidential, through design and innovation, we have a wide range of beer towers for all beer brands with multiple dispense taps in multiple finishes which suits in any pub, bar, brewery or restaurant, ",
      imageSrc:
        "https://img1.wsimg.com/isteam/stock/by3JjWk/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
    },
  ];
  return (
    <div className='service_container'>
      <motion.div className='services_heading'>
        <h1>
          <span>S</span>ervices
        </h1>
      </motion.div>
      {data.map((item, index) => (
        <motion.div className='service_item' id={index} key={index}>
          <div>
            <img src={item.imageSrc} alt='' />
          </div>
          <div>
            <h1>{item.title}</h1>
            <p>{item.discription}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
