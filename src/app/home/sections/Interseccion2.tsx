import InterSection from '@/components/InterSection';
import quotes from '@/json/quotes.json';
import CalendlyButton from '@/components/CalendlyButton';

export default function Interseccion1() {
  return (
    <InterSection id='inter2' quote={quotes.quote2}>
      <CalendlyButton>Reserva tu llamada</CalendlyButton>
      </InterSection>
  );
}
