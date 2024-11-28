import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    image: "/img/service1.jpg",
    title: "Production Musicale",
    description: "Enregistrement, mixage, mastering : donnez vie à votre musique.",
  },
  {
    image: "/img/service2.jpg",
    title: "Organisation d'Événements",
    description: "Planifiez des événements mémorables avec notre expertise.",
  },
  {
    image: "/img/service3.jpg",
    title: "Consulting pour Artistes",
    description: "Développez votre carrière grâce à nos conseils stratégiques.",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.services__container}>
        <h2 className={styles.services__title}>Nos Services</h2>
        <div className={styles.services__grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.services__card}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className={styles.services__image}
              />
              <h3 className={styles.services__cardTitle}>{service.title}</h3>
              <p className={styles.services__description}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

