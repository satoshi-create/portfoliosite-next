import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  useReducer,
} from "react";

export const ContextComponent = createContext();

export const ContedtProvider = ({ children }) => {
  const [value, setValue] = useState();
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("");

  const openSidebar = () => {
    setisSidebarOpen(true);
    document.querySelector("html").classList.add("open");
  };
  const closeSidebar = () => {
    setisSidebarOpen(false);
    document.querySelector("html").classList.remove("open");
  };

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 80 ? setStickyClass("header-fixed") : setStickyClass("");
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  const openModal = (id) => {
    setisModalOpen(true);
    const clientWidth = document.body.clientWidth;
    document.querySelector("html").classList.add("open");
    const noScrollBarWidth = document.body.clientWidth;
    const diff = noScrollBarWidth - clientWidth;
    if (diff > 0) {
      document.body.style["padding-right"] = diff + "px";
    }
    setValue(id);
  };

  const closeModal = () => {
    document.querySelector("html").classList.remove("open");
    setisModalOpen(false);
  };

  return (
    <ContextComponent.Provider
      value={{
        value,
        setValue,
        openModal,
        closeModal,
        isModalOpen,
        stickyClass,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </ContextComponent.Provider>
  );
};
