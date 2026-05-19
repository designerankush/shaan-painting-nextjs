import type { Metadata } from 'next';
import ServicesPage from '@/components/pages/ServicesPage/ServicesPage';

export const metadata: Metadata = {
  title: 'Services | Shaan Painting DS Group',
  description:
    'Explore professional residential painting services by Shaan Painting DS Group, including exterior painting, interior painting, weatherboard restoration, doors, trims, decks and new construction painting.',
};

export default function Page() {
  return <ServicesPage />;
}