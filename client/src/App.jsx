import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import AppRoutes from "./routes/AppRoutes";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2200); // Show splash for 2.2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen key="splash" />
      ) : (
        <AppRoutes key="routes" />
      )}
    </AnimatePresence>
  );
}

export default App;