import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // ==========================
  // Current User
  // ==========================

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("easykart-user");

    if (!savedUser) return null;

    const parsedUser = JSON.parse(savedUser);

    return {
      ...parsedUser,
      id: parsedUser.id || parsedUser._id,
    };
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("easykart-token") || "";
  });

  // ==========================
  // Save User & Token
  // ==========================

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "easykart-user",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("easykart-user");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("easykart-token", token);
    } else {
      localStorage.removeItem("easykart-token");
    }
  }, [token]);

  // ==========================
  // LOGIN
  // ==========================

  const login = (userData, jwtToken) => {
    const normalizedUser = {
      ...userData,
      id: userData.id || userData._id,
    };

    setUser(normalizedUser);
    setToken(jwtToken);

    toast.success(`Welcome back, ${normalizedUser.name} 👋`);
  };

  // ==========================
  // SIGNUP
  // ==========================

  const signup = (userData, jwtToken) => {
    const normalizedUser = {
      ...userData,
      id: userData.id || userData._id,
    };

    setUser(normalizedUser);
    setToken(jwtToken);

    toast.success("Account Created Successfully 🎉");
  };

  // ==========================
  // GUEST LOGIN
  // ==========================

  const continueAsGuest = () => {
    const guestUser = {
      id: "guest",
      name: "Guest",
      email: "",
      mobile: "",
      guest: true,
    };

    setUser(guestUser);
    setToken("");

    toast.success("Welcome Guest 👋");
  };

  // ==========================
  // LOGOUT
  // ==========================

  const logout = () => {
    setUser(null);
    setToken("");

    localStorage.removeItem("easykart-user");
    localStorage.removeItem("easykart-token");

    toast.success("Logged Out Successfully");
  };

  // ==========================
  // CONTEXT VALUE
  // ==========================

  const value = {
    user,
    token,

    login,
    signup,
    logout,
    continueAsGuest,

    isLoggedIn: !!user,
    isGuest: user?.guest === true,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);