"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const events = [
  {
    image: "/img/event1.jpg",
    title: "Live Rap & DJ Set",
    date: "8 Mars 2024",
    description: "Une soirée incroyable avec des artistes locaux et un DJ set mémorable.",
  },
  {
    image: "/img/event2.jpg",
    title: "Fête de la Musique",
    date: "21 Juin 2024",
    description: "Rejoignez-nous pour célébrer la musique en plein air avec des concerts gratuits.",
  },
  {
    image: "/img/event3.jpg", // Assurez-vous que cette image existe dans /public/img/
    title: "Concert Acoustique",
    date: "15 Avril 2024",
    description: "Un concert acoustique intime pour une soirée inoubliable.",
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Événements à venir</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedEvent(event)}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={300}
                height={200}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal pour l'événement sélectionné */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)} // Ferme le modal au clic en dehors de la carte
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic sur la carte
            >
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                width={400}
                height={250}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>
              <p className="text-gray-600 mb-4">{selectedEvent.date}</p>
              <p className="text-gray-800">{selectedEvent.description}</p>
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setSelectedEvent(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

