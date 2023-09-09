import { motion } from "framer-motion";
import "../STYLES/about/about.css";

const About = () => {
  return (
    <motion.div id='about' className='about_container'>
      <motion.div className='about_heading'>
        <h1>ABOUT US</h1>
      </motion.div>
      <motion.div className='about_grid'>
        <motion.div className=' about_item about_grid_one'>
          <img
            src='https://img1.wsimg.com/isteam/stock/o37yZzQ/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300'
            alt=''
          />
          <motion.div className='item_text'>
            <h2>Passionate Business Consulting Experts</h2>
            <p>
              For the past 10 years, we have helped businesses create their
              brand presence and achieve their goals. Our process is designed to
              empower your brand and outfit your business with the professional
              tools needed to succeed. Talk to us today about how we can support
              your growth, limit your turnover, and put you on a solid track to
              success and profit.
            </p>
          </motion.div>
        </motion.div>
        <motion.div className='about_item about_grid_two'>
          <img
            src='https://img1.wsimg.com/isteam/stock/V8J01on/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300'
            alt=''
          />
          <motion.div className='item_text'>
            <h2>Our Analytical Approach</h2>
            <p>
              Our service includes a comprehensive consult to help identify gaps
              and opportunities, and results in a comprehensive report that
              includes a project plan with timelines a cost analysis. Our
              individualized plans are made up of quality services that will
              help you get there quickly and smoothly.{" "}
            </p>
          </motion.div>
        </motion.div>
        <motion.div className='about_item about_grid_three'>
          <img
            src='https://img1.wsimg.com/isteam/stock/87436/:/cr=t:12.27%25,l:0%25,w:100%25,h:75.45%25/rs=w:600,h:300,cg:true'
            alt=''
          />
          <motion.div className='item_text'>
            <h2>Industry Wide Success</h2>
            <p>
              We work with a large number of clients from various industries,
              including: Real Estate Export/Import of Goods Engineering
              Consultancy, Oil&Gas Services/Supplies Restaurant, Pub & Bar Our
              business experts are ready assist you in developing a adequate
              plan that drives your business.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
