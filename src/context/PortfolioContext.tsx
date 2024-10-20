import { createContext, useContext, useRef } from 'react';

const PortfolioContext = createContext<any>(null);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  // const [sectionRef, setSectionRef] = useState([]);

  const sectionRef = useRef(null);

  return (
    <PortfolioContext.Provider value={{ sectionRef }}>
      {children}
    </PortfolioContext.Provider>
  );
}
