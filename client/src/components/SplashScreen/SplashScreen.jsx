import { motion } from "framer-motion";
import "./SplashScreen.css";

import splash from "../../assets/splash-bg.png";

const SplashScreen = () => {
  return (
    <motion.div
      className="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Background */}
      <motion.img
        src={splash}
        alt="EasyKart Splash"
        className="background"
        draggable="false"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      />

      {/* Dark overlay for better visibility */}
      <div className="overlay"></div>

      {/* Loading */}
      <div className="loader-container">
        <div className="loader-bar">
          <motion.div
            className="loader-progress"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading your best deals...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;