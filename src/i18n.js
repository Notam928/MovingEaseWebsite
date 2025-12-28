import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        services: "Services",
        packages: "Our Packages",
        about: "About Us",
        faq: "FAQ",
        contact: "Contact",
        getQuote: "Get Free Quote"
      },
      
      // Home Page
      home: {
        hero: {
          title1: "Stress-Free",
          title2: "Moving Services",
          title3: "in Ottawa & Gatineau",
          subtitle: "Wanting to move but don't want to deal with the stress and tension moving comes with? We are here to help! At Moving Ease our main goal is to provide professional moving services at a low cost!",
          getQuote: "Get Free Quote",
          viewServices: "View Services",
          yearsExp: "Years Experience",
          customers: "Happy Customers",
          successRate: "Success Rate"
        },
        whyChoose: {
          title: "Why Choose",
          titleHighlight: "Moving Ease?",
          subtitle: "With years of experience, our team understands the challenges of moving and is committed to making the process as seamless as possible.",
          skilled: {
            title: "Skilled Movers",
            desc: "Our team of skilled movers is highly trained and experienced, ensuring that your belongings are in capable hands."
          },
          safety: {
            title: "Safety Priority",
            desc: "We prioritize the safety of your possessions. From proper packing techniques to secure transportation, we go above and beyond to protect your valuables."
          },
          professional: {
            title: "Professional Service",
            desc: "Whether it's residential, commercial, or specialized moving services, we've got you covered with professionalism and care."
          },
          onTime: {
            title: "On-Time Delivery",
            desc: "We respect your schedule and ensure timely pickups and deliveries, making your move stress-free and efficient."
          }
        },
        services: {
          title: "Our",
          titleHighlight: "Services",
          subtitle: "Moving can be overwhelming and time-consuming, but with our team of experienced professionals, we guarantee a smooth transition from start to finish.",
          residential: {
            title: "Local & Residential Moving",
            desc: "From apartments and houses to offices and retail spaces, we handle moves of all sizes with precision and care."
          },
          longDistance: {
            title: "Long Distance Moving",
            desc: "Whether it's a neighboring province or across the country. With our expertise and resources, embark on this significant move with peace of mind."
          },
          storage: {
            title: "Storage Solutions",
            desc: "If you require temporary or long-term storage, we offer secure and climate-controlled storage solutions to keep your possessions safe."
          },
          packing: {
            title: "Packing Services",
            desc: "Our expert packers use high-quality materials to ensure the safety of your belongings. We also offer packing supplies for DIY movers."
          },
          heavyLifting: {
            title: "Heavy Lifting",
            desc: "Need help with heavy lifting? Our skilled team is ready for efficient assistance, making moving day a breeze."
          },
          junkRemoval: {
            title: "Junk Removal",
            desc: "Need to declutter before your move? We provide hassle-free junk removal to dispose of unwanted items responsibly."
          },
          viewAll: "View All Services"
        },
        process: {
          title: "Simple",
          titleHighlight: "3-Step Process",
          subtitle: "At Moving Ease, we believe in simplifying your move and ensuring a stress-free experience from start to finish.",
          step1: {
            title: "Get an Estimate",
            desc: "Getting started is as easy as reaching out to us for an estimate. Simply provide us with some basic information about your move, and our team will promptly provide you with a comprehensive estimate that outlines the cost of your move."
          },
          step2: {
            title: "Schedule Your Date",
            desc: "Once you have your estimate in hand, it's time to choose a moving date that suits your schedule. We understand that your time is valuable, so we work closely with you to find a convenient moving day."
          },
          step3: {
            title: "We Handle Everything",
            desc: "On the day of your move, our dedicated team arrives on time and ready to work. We take care of every detail, from packing and loading to transportation and unloading."
          }
        },
        cta: {
          title: "Ready to Make Your Move?",
          subtitle: "Don't let the fear of moving keep you from starting afresh in your dream home. Take action today by contacting us for a free quote.",
          button: "Get Your Free Quote Today"
        }
      },
      
      // Footer
      footer: {
        description: "The most trusted moving services provider company in Ottawa and Gatineau. Professional moving services at a low cost!",
        quickLinks: "Quick Links",
        ourServices: "Our Services",
        contactUs: "Contact Us",
        available: "Available 24/7",
        services: {
          residential: "Residential Moving",
          commercial: "Commercial Moving",
          longDistance: "Long Distance Moving",
          packing: "Packing & Unpacking",
          storage: "Storage Solutions",
          junkRemoval: "Junk Removal"
        },
        rights: "All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  },
  fr: {
    translation: {
      // Navigation
      nav: {
        home: "Accueil",
        services: "Services",
        packages: "Nos Forfaits",
        about: "À Propos",
        faq: "FAQ",
        contact: "Contact",
        getQuote: "Obtenez un Devis Gratuit"
      },
      
      // Home Page
      home: {
        hero: {
          title1: "Services de",
          title2: "Déménagement",
          title3: "à Ottawa et Gatineau",
          subtitle: "Vous voulez déménager mais ne voulez pas gérer le stress et la tension que cela implique? Nous sommes là pour vous aider! Chez Moving Ease, notre objectif principal est de fournir des services de déménagement professionnels à faible coût!",
          getQuote: "Obtenez un Devis Gratuit",
          viewServices: "Voir les Services",
          yearsExp: "Années d'Expérience",
          customers: "Clients Satisfaits",
          successRate: "Taux de Réussite"
        },
        whyChoose: {
          title: "Pourquoi Choisir",
          titleHighlight: "Moving Ease?",
          subtitle: "Avec des années d'expérience, notre équipe comprend les défis du déménagement et s'engage à rendre le processus aussi fluide que possible.",
          skilled: {
            title: "Déménageurs Qualifiés",
            desc: "Notre équipe de déménageurs qualifiés est hautement formée et expérimentée, garantissant que vos biens sont entre de bonnes mains."
          },
          safety: {
            title: "Sécurité Prioritaire",
            desc: "Nous priorisons la sécurité de vos biens. Des techniques d'emballage appropriées au transport sécurisé, nous faisons tout pour protéger vos objets de valeur."
          },
          professional: {
            title: "Service Professionnel",
            desc: "Qu'il s'agisse de déménagement résidentiel, commercial ou spécialisé, nous vous couvrons avec professionnalisme et soin."
          },
          onTime: {
            title: "Livraison à Temps",
            desc: "Nous respectons votre horaire et assurons des ramassages et livraisons ponctuels, rendant votre déménagement sans stress et efficace."
          }
        },
        services: {
          title: "Nos",
          titleHighlight: "Services",
          subtitle: "Le déménagement peut être accablant et chronophage, mais avec notre équipe de professionnels expérimentés, nous garantissons une transition en douceur du début à la fin.",
          residential: {
            title: "Déménagement Local & Résidentiel",
            desc: "Des appartements et maisons aux bureaux et espaces commerciaux, nous gérons les déménagements de toutes tailles avec précision et soin."
          },
          longDistance: {
            title: "Déménagement Longue Distance",
            desc: "Que ce soit vers une province voisine ou à travers le pays. Avec notre expertise et nos ressources, embarquez dans ce déménagement important en toute tranquillité."
          },
          storage: {
            title: "Solutions d'Entreposage",
            desc: "Si vous avez besoin d'entreposage temporaire ou à long terme, nous offrons des solutions d'entreposage sécurisées et à température contrôlée."
          },
          packing: {
            title: "Services d'Emballage",
            desc: "Nos emballeurs experts utilisent des matériaux de haute qualité pour assurer la sécurité de vos biens. Nous offrons également des fournitures d'emballage pour les déménageurs DIY."
          },
          heavyLifting: {
            title: "Levage Lourd",
            desc: "Besoin d'aide pour le levage lourd? Notre équipe qualifiée est prête pour une assistance efficace, rendant le jour du déménagement un jeu d'enfant."
          },
          junkRemoval: {
            title: "Enlèvement d'Encombrants",
            desc: "Besoin de désencombrer avant votre déménagement? Nous offrons un service d'enlèvement d'encombrants sans tracas pour disposer des articles indésirables de manière responsable."
          },
          viewAll: "Voir Tous les Services"
        },
        process: {
          title: "Processus Simple",
          titleHighlight: "en 3 Étapes",
          subtitle: "Chez Moving Ease, nous croyons en la simplification de votre déménagement et en assurant une expérience sans stress du début à la fin.",
          step1: {
            title: "Obtenez une Estimation",
            desc: "Commencer est aussi simple que de nous contacter pour une estimation. Fournissez-nous simplement quelques informations de base sur votre déménagement, et notre équipe vous fournira rapidement une estimation complète."
          },
          step2: {
            title: "Planifiez Votre Date",
            desc: "Une fois que vous avez votre estimation en main, il est temps de choisir une date de déménagement qui convient à votre horaire. Nous travaillons en étroite collaboration avec vous pour trouver un jour pratique."
          },
          step3: {
            title: "Nous Gérons Tout",
            desc: "Le jour de votre déménagement, notre équipe dévouée arrive à l'heure et prête à travailler. Nous prenons soin de chaque détail, de l'emballage et du chargement au transport et au déchargement."
          }
        },
        cta: {
          title: "Prêt à Déménager?",
          subtitle: "Ne laissez pas la peur du déménagement vous empêcher de recommencer dans la maison de vos rêves. Agissez aujourd'hui en nous contactant pour un devis gratuit.",
          button: "Obtenez Votre Devis Gratuit Aujourd'hui"
        }
      },
      
      // Footer
      footer: {
        description: "Le fournisseur de services de déménagement le plus fiable à Ottawa et Gatineau. Services de déménagement professionnels à faible coût!",
        quickLinks: "Liens Rapides",
        ourServices: "Nos Services",
        contactUs: "Contactez-Nous",
        available: "Disponible 24/7",
        services: {
          residential: "Déménagement Résidentiel",
          commercial: "Déménagement Commercial",
          longDistance: "Déménagement Longue Distance",
          packing: "Emballage & Déballage",
          storage: "Solutions d'Entreposage",
          junkRemoval: "Enlèvement d'Encombrants"
        },
        rights: "Tous droits réservés",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
