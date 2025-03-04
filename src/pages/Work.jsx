import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";

function Work() {
  return (
    <div className="m-0 p-0">
      <div className='m-9 pt-2 md:m-9'>

      </div>
      <div className="">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <img
          src={`${process.env.PUBLIC_URL}/img/workImg.png`}
          alt="Investour Hospitality"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-start py-16 md:py-10 px-14 md:px-16">
          <h1 className="text-white text-3xl md:text-5xl font-600">
            Investour Hospitality
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='md:mx-4 mx-8'>
        <section className="content-section md:items-center md:justify-center md:mr-14">
          <div className="flex flex-col lg:flex-row md:items-center md:justify-center">
            <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-16">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-800 mb-6 lg:mb-10 text-start" style={{ color: '#281A2A' }}>
              Investour Hospitality 
              </h1>
              <div className="flex my-2">
                <div className="w-1 h-[210px] lg:h-20" style={{ backgroundColor: '#281A2A' }}></div>
                <p className="text-base md:text-lg lg:text-lg mb-6 font-600 text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4" style={{ color: '#281A2A' }}>
                Investour Hospitality incarne l’excellence familiale et l’innovation dans l’hôtellerie marocaine.
                  </p>
              </div>
            </div>
            
          </div>
          <div className="md:items-center md:justify-center md:mx-20 mx-6">
                <p className="text-base md:text-lg lg:text-lg mb-6 font-600 text-center md:text-start lg:ml-10 my-2 lg:mx-4" style={{ color: '#281A2A' }}>
                  Investour Hospitality properties are compelling additions to any market. We offer owner-friendly and flexible building options based on your project, budget, and location, including prototypical new build hotels, adaptive re-use projects, or the conversion of an existing hotel.
                </p>
              </div>
        </section>


        <section className="content-section mt-20">
          
          <div className="flex flex-col md:flex-row items-start w-full md:px-32">
            <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
              <h2 className="text-[#281A2A] text-4xl font-600 mb-10">Hébergement de qualité</h2>
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
              - Clubs-hôtels 4 à 4,5 étoiles
              </p>
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
              - Chambres spacieuses et élégantes
              </p>
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
              - Espaces dédiés au bien-être et à la détente
              </p>
              



            </div>

            <div className="md:w-full md:text-left">
              <h2 className="text-[#281A2A] text-4xl font-600 mb-10">Stratégie de performance</h2>
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                - Approche multicanale pour maximiser les réservations
                </p>
                <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                - Gestion dynamique des revenus pour optimiser les tarifs
                </p>
                <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                - Campagnes marketing digitales percutantes et ciblées
                </p>
              
            </div>
          </div>
        </section>

        <section className="content-section md:items-center md:justify-center md:mr-14">
          <div className="flex flex-col lg:flex-row md:items-center md:justify-center">
            <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:pt-16">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-700 mb-6 lg:mb-10 text-center md:text-start" style={{ color: '#281A2A' }}>
                Engagement durable
              </h1>
              <div className="my-2">
                <p className="text-base md:text-lg lg:text-lg mb-6 font-medium text-center md:text-start  my-2 lg:mx-4" style={{ color: '#281A2A' }}>
                - Partenariats avec plus de 200 fournisseurs locaux
                </p>
                <p className="text-base md:text-lg lg:text-lg mb-6 font-medium text-center md:text-start  my-2 lg:mx-4" style={{ color: '#281A2A' }}>
                - Initiatives en faveur du développement durable et de la responsabilité sociale
                </p>
                <p className="text-base md:text-lg lg:text-lg  font-medium text-center md:text-start  my-2 lg:mx-4" style={{ color: '#281A2A' }}>
                - Environnement de travail épanouissant pour nos équipes
                </p>
              </div>
            </div>
          </div>
          <div className="md:items-center md:justify-center md:mx-20 mx-6">
                <p className="text-base md:text-lg lg:text-lg mb-16 font-600 text-center md:text-start lg:ml-10 lg:mx-4" style={{ color: '#281A2A' }}>
                Investour Hospitality transforme chaque séjour en une expérience inoubliable grâce à une gestion rigoureuse, un service premium et un partenariat gagnant-gagnant avec les propriétaires. Explorez notre univers et vivez l’excellence de l’hospitalité marocaine.
                  </p>
              </div>
        </section>

    </div>
    </div>

      <ScrollToTopButton />
    </div>
  );
}

export default Work;
