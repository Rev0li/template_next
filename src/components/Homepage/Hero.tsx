"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 z-10"
      >
        <Image
          src="/img/logo.jpg"
          alt="Logo du site"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Transformez vos projets en réalité
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Nous offrons des services professionnels pour la musique et les
          événements.
        </p>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Découvrez Nos Services
        </motion.a>
      </motion.div>

      {/* Image de fond */}
      <Image
        src="/img/hero-bg.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full opacity-50 z-0"
      />
    </section>
  );
}

