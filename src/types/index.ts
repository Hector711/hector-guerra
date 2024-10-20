import { ReactNode } from 'react';

export type PropsTypes = {
  title?: string;
  children?: ReactNode;
  id?: string;
  ref?: any;
  className?: string;
  quote?: string;
  url?: string;
};

declare global {
  interface Window {
    Calendly: any; 
  }
}

export interface IconProps {
  className?: string;
  id?: string;
}

export interface ProfilesTypes {
  network: string;
  username: string;
  url: string;
}

export interface ClavesTypes {
  title: string;
  quote: string;
  icon: string;
}

export interface PreciosTypes {
  text: string;
  introduction: string;
  payment_options: PaymentOptionsTypes[];
}

export interface PaymentOptionsTypes {
  name: string;
  description: string;
  icon: string;
}
