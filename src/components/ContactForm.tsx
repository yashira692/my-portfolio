'use client';

import { useState } from 'react';

export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nombre: ${form.name}\nCorreo: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      form.subject || 'Contacto desde el portafolio'
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
        ¡Gracias, {form.name}! Se abrió tu cliente de correo para enviar el mensaje.
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: '', email: '', subject: '', message: '' });
          }}
          className="block mt-3 text-blue-600 hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input id="name" name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="tu@correo.com" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Asunto
        </label>
        <input id="subject" name="subject" value={form.subject} onChange={handleChange} className={inputClass} placeholder="¿De qué quieres hablar?" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} className={inputClass} placeholder="Escribe tu mensaje..." />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Enviar mensaje
      </button>
    </form>
  );
}
