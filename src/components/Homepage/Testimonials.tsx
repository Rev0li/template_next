"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "Un service impeccable ! Ils ont vraiment compris mes besoins.",
    author: "Chanteur",
    image: "/img/testimonial1.jpg", // Assurez-vous que l'image existe
  },
  {
    quote: "Des professionnels fiables et créatifs. Je recommande sans hésiter.",
    author: "Poete",
    image: "/img/testimonial2.jpg",
  },
  {
    quote: "Un accompagnement sur-mesure. Merci pour votre expertise !",
    author: "Evennementiel",
    image: "/img/testimonial3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Témoignages</h2>
        <p className="text-gray-400 mb-12">
          Découvrez ce que nos clients pensent de nous.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={testimonial.image}
                alt={`Témoignage de ${testimonial.author}`}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 border-2 border-blue-600"
              />
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <p className="text-sm text-gray-400 font-semibold">
                - {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

