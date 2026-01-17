import StatsClient from './StatsClient';

// Server Component - renders static structure for SEO
// The actual numbers and animations are handled by the client component
const stats = [
  {
    value: 35,
    suffix: '+',
    label: 'Years of Experience',
    icon: 'history',
  },
  {
    value: 2500,
    suffix: '+',
    label: 'Instruments Restored',
    icon: 'handyman',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: 'sentiment_satisfied',
  },
  {
    value: 150,
    suffix: '+',
    label: 'Museum Pieces Serviced',
    icon: 'museum',
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary/5 dark:bg-primary/10 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">
            Trusted by Musicians Worldwide
          </h2>
          <p className="text-text-muted font-sans max-w-2xl mx-auto">
            Our dedication to preserving the soul of string instruments has earned us the trust of professionals and collectors alike.
          </p>
        </div>
        {/* Client component for animated numbers */}
        <StatsClient stats={stats} />
      </div>
    </section>
  );
}
