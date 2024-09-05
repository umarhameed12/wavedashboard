import { ReactNode, createContext } from "react";
const Context = createContext({});
// interface ContextProvider {
//   toggleIcon:"";
//   setToggleIcon:()=>;
// }
export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <Context.Provider value={"{ toggleIcon: any, setToggleIcon: any }"}>
      {children}
    </Context.Provider>
  );
}
