import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}, ${personalInfo.title}. Escríbeme para proyectos, prácticas o colaboraciones.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contacto | ${personalInfo.name}`,
    description: 'Escríbeme para proyectos, prácticas o colaboraciones.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `Contacto | ${personalInfo.name}`,
    description: 'Escríbeme para proyectos, prácticas o colaboraciones.',
  },
};

export default function ContactPage() {
  const channels = [
    { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { label: 'GitHub', value: personalInfo.github.replace('https://', ''), href: personalInfo.github },
    { label: 'LinkedIn', value: personalInfo.linkedin.replace('https://', ''), href: personalInfo.linkedin },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-10">
          ¿Tienes un proyecto en mente o una oportunidad de prácticas? Déjame un
          mensaje y te responderé lo antes posible.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <aside className="md:col-span-1 space-y-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-sm font-semibold text-blue-600">{c.label}</p>
                <p className="text-gray-700 break-all">{c.value}</p>
              </a>
            ))}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-sm font-semibold text-blue-600">Ubicación</p>
              <p className="text-gray-700">Lima, Perú</p>
            </div>
          </aside>

          <section className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíame un mensaje</h2>
            <ContactForm email={personalInfo.email} />
          </section>
        </div>
      </div>
    </div>
  );
}
