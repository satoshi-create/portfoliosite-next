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
      }}
    >
      {children}
    </ContextComponent.Provider>
  );
};
