import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

import fitness01 from "@/assets/fitness/fitness-01.jpg";
import fitness02 from "@/assets/fitness/fitness-02.jpg";
import fitness03 from "@/assets/fitness/fitness-03.jpg";
import fitness04 from "@/assets/fitness/fitness-04.jpg";
import fitness05 from "@/assets/fitness/fitness-05.jpg";
import fitness06 from "@/assets/fitness/fitness-06.jpg";
import fitness08 from "@/assets/fitness/fitness-08.jpg";
import fitness09 from "@/assets/fitness/fitness-09.jpg";
import fitness10 from "@/assets/fitness/fitness-10.jpg";
import fitness11 from "@/assets/fitness/fitness-11.jpg";
import fitness12 from "@/assets/fitness/fitness-12.jpg";
import fitness13 from "@/assets/fitness/fitness-13.jpg";
import fitness14 from "@/assets/fitness/fitness-14.jpg";
import fitness15 from "@/assets/fitness/fitness-15.jpg";
import fitness16 from "@/assets/fitness/fitness-16.jpg";
import fitness17 from "@/assets/fitness/fitness-17.jpg";
import fitness18 from "@/assets/fitness/fitness-18.jpg";
import fitness19 from "@/assets/fitness/fitness-19.jpg";
import fitness20 from "@/assets/fitness/fitness-20.jpg";
import fitness21 from "@/assets/fitness/fitness-21.jpg";
import fitness22 from "@/assets/fitness/fitness-22.jpg";
import fitness23 from "@/assets/fitness/fitness-23.jpg";
import casacoMoletom from "@/assets/fitness/casaco-de-moletom.jpg";
import fitnessUniforme from "@/assets/fitness/fitness-uniforme.jpg";
import fittingUniformes from "@/assets/fitness/fitting-uniformes.jpg";
import regataMasculina from "@/assets/fitness/regata-masculina.jpg";
import roupaDeAcademia from "@/assets/fitness/roupa-de-academia.jpg";
import roupaFitness from "@/assets/fitness/roupa-fitness.jpg";
import uniformeCrossfit from "@/assets/fitness/uniforme-crossfit.jpg";
import uniformeFitness from "@/assets/fitness/uniforme-fitness.jpg";
import uniformesFitnessPersonalizados from "@/assets/fitness/uniformes-fitness-personalizados.jpg";

const portfolioImages = [
  { image: fitness01 },
  { image: fitness02 },
  { image: fitness03 },
  { image: fitness04 },
  { image: fitness05 },
  { image: fitness06 },
  { image: fitness08 },
  { image: fitness09 },
  { image: fitness10 },
  { image: fitness11 },
  { image: fitness12 },
  { image: fitness13 },
  { image: fitness14 },
  { image: fitness15 },
  { image: fitness16 },
  { image: fitness17 },
  { image: fitness18 },
  { image: fitness19 },
  { image: fitness20 },
  { image: fitness21 },
  { image: fitness22 },
  { image: fitness23 },
  { image: casacoMoletom },
  { image: fitnessUniforme },
  { image: fittingUniformes },
  { image: regataMasculina },
  { image: roupaDeAcademia },
  { image: roupaFitness },
  { image: uniformeCrossfit },
  { image: uniformeFitness },
  { image: uniformesFitnessPersonalizados },
];

const FitnessPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Fitness"
      segmentTitle="FITNESS"
      segmentSubtitle="Portfólio Fitness"
      introText="Projetos desenvolvidos para academias, estúdios e atletas em todo o Brasil, com foco em conforto, performance e identidade visual marcante."
      seoDescription="Uniformes personalizados para academias, estúdios de treino e atletas. Top, short, bermuda, leggings, macacão, camisa, babylook, moletom, casaco, camisetas e camisas com proteção UV. Qualidade premium e atendimento nacional."
      portfolioImages={portfolioImages}
      heroImage={fitness01}
      trustSectionTitle="Empresas que atendemos"
      trustPartners={[
        { name: "Korper" },
        { name: "Studio C2 Training" },
        { name: "Team New Miller" },
        { name: "Vibe" },
        { name: "Locatelli" },
      ]}
    />
  );
};

export default FitnessPage;
