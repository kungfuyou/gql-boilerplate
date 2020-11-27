import React, {useMemo, createContext, useContext, useState } from "react";

const MenuContext = createContext([]);

const useMenu = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('Menu context must be used within a Provider')
  }

  return context;
}

const MenuProvider = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const value = useMemo(() => [open, setOpen], [open]);

  console.log('value', value);
  return <MenuContext.Provider value={value} {...props} />
}

export { MenuProvider, useMenu }