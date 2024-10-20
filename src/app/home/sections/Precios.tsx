import Section from '@/components/Section';
import precios from '@/json/precios.json';
import ChangeIcon from '@/icons/ChangeIcon';
import OnePaymentIcon from '@/icons/OnePaymentIcon';
import ProgressivePaymentIcon from '@/icons/ProgressivePaymentIcon';
import { PreciosTypes } from '@/types';
export default function Precios() {
  const { introduction, payment_options }: PreciosTypes = precios;

  type IconKey = keyof typeof ICONS;

  const ICONS = {
    OnePayment: <OnePaymentIcon />,
    ProgressivePayment: <ProgressivePaymentIcon />,
    ExchangeValue: <ChangeIcon />,
  };
  return (
    <Section title='Precios' id='precios'>
      <p>{introduction}</p>
      <ul className='payment-options-container'>
        {payment_options.map((option, index) => (
          <li key={index}>
            <article className='payment-card'>
              <header>
                {ICONS[option.icon as IconKey]}
                <h4>{option.name}</h4>
              </header>
              <hr />
              <p>{option.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
