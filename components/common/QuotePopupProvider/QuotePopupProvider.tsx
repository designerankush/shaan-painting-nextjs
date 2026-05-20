'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import QuotePopup from '@/components/popup/QuotePopup/QuotePopup';

type QuotePopupContextType = {
  openQuotePopup: () => void;
  closeQuotePopup: () => void;
};

const QuotePopupContext = createContext<QuotePopupContextType | null>(null);

export function useQuotePopup() {
  const context = useContext(QuotePopupContext);

  if (!context) {
    throw new Error('useQuotePopup must be used inside QuotePopupProvider');
  }

  return context;
}

export default function QuotePopupProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuotePopup = () => {
    setIsOpen(true);
  };

  const closeQuotePopup = () => {
    setIsOpen(false);
  };

  return (
    <QuotePopupContext.Provider value={{ openQuotePopup, closeQuotePopup }}>
      {children}

      <QuotePopup isOpen={isOpen} onClose={closeQuotePopup} />
    </QuotePopupContext.Provider>
  );
}