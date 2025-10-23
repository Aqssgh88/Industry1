import { motion } from "motion/react"
import { Briefcase, TrendingUp, Users } from "lucide-react"
import React from "react"

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[10%] py-24 scroll-mt-20 bg-gray-50 dark:bg-[#0b0b0b] relative"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/10 to-transparent dark:from-transparent dark:via-green-900/5 dark:to-transparent pointer-events-none"></div>

      {/* Heading */}
      <div className="text-center relative z-10">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-Ovo text-green-600 dark:text-green-400 tracking-wide"
        >
          Who We Are
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-Ovo mt-2 text-gray-900 dark:text-white"
        >
          About Our Industry
        </motion.h2>
        <div className="mt-2 w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-14 mt-16 relative z-10"
      >
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700"
        >
          <video
            src="/Shirts/Aboutus.mp4"
            controls
            autoPlay
            muted
            loop
            className="w-full h-[420px] md:h-[650px] object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <p className="mb-8 max-w-2xl text-base md:text-lg text-justify leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to our company! We are a leading provider of{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              customized apparel solutions
            </span>
            , specializing in{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              streetwear, activewear, sportswear, and corporate clothing
            </span>
            . With expertise in sublimation, screen printing, DTG, DTF,
            embroidery, and cut & sew services, we deliver apparel that blends
            style, comfort, and durability. Our mission is to bring brands’
            unique visions to life through{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              custom design and world-class production
            </span>
            . Every stitch and print reflects creativity, precision, and
            passion.
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <li className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/20">
                <Briefcase className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Customized Apparel
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  From streetwear to sportswear, we provide fully tailored
                  designs that fit your brand’s identity.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/20">
                <TrendingUp className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Advanced Printing & Embroidery
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Expertise in sublimation, screen printing, DTG, DTF, and
                  embroidery with top-tier finishing.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/20">
                <Users className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Global Reach
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Trusted by clients worldwide, delivering reliable production
                  and fast international shipping.
                </p>
              </div>
            </li>
          </ul>

          
          {/* Contact Button */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 mt-8">
  {[
    { name: "Contact Us", link: "#contact", icon: "📞" },
    { name: "WhatsApp", link: "https://wa.me/923127159395", icon: "💬" },
    { name: "Instagram", link: "https://www.instagram.com/faizi_industry_", icon: "📸" },
    { name: "Facebook", link: "https://www.facebook.com/share/1FJJXcjpQG/?mibextid=wwXIfr", icon: "📘" },
    { name: "Etsy Shop", link: "https://www.etsy.com/shop/FaiziIndustry", icon: "🛍️" },
  ].map((btn, i) => (
    <motion.a
      key={i}
      href={btn.link}
      target="_blank"
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center gap-2 w-52 px-6 py-3 
                 rounded-full text-white font-semibold text-center
                 bg-gradient-to-r from-green-500 to-green-700 
                 shadow-md shadow-green-500/30 hover:shadow-lg hover:shadow-green-500/50 
                 transition duration-300"
    >
      <span className="text-lg">{btn.icon}</span> {btn.name}
    </motion.a>
  ))}
</div>


        </motion.div>
        
      </motion.div>
    
    </motion.section>
  )
}

export default About
