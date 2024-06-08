import { createContext, useContext, useRef } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export function PortfolioProvider({ children }) {
  // const [sectionRef, setSectionRef] = useState([]);

  const sectionRef = useRef(null);
 

  return (
    <PortfolioContext.Provider value={{ sectionRef }}>
      {children}
    </PortfolioContext.Provider>
  );
}
