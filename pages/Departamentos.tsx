import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

import departamentos01 from "@/assets/departamentos/departamentos-01.jpg";
import departamentos02 from "@/assets/departamentos/departamentos-02.jpg";
import departamentos03 from "@/assets/departamentos/departamentos-03.jpg";
import departamentos04 from "@/assets/departamentos/departamentos-04.jpg";
import departamentos05 from "@/assets/departamentos/departamentos-05.jpg";
import departamentos06 from "@/assets/departamentos/departamentos-06.jpg";
import departamentos07 from "@/assets/departamentos/departamentos-07.jpg";

const portfolioImages = [
  { image: departamentos01 },
  { image: departamentos02 },
  { image: departamentos03 },
  { image: departamentos04 },
  { image: departamentos05 },
  { image: departamentos06 },
  { image: departamentos07 },
];

const trustPartners = [
  { name: "Polícia Civil" },
];

const DepartamentosPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Departamentos"
      segmentTitle="DEPARTAMENTOS"
      segmentSubtitle="Portfólio Departamentos"
      introText="Projetos desenvolvidos para departamentos e setores específicos, com foco em organização e identidade de equipe."
      seoDescription="Uniformes personalizados para departamentos e setores. Camisas para equipes, coletes de identificação e uniformes setoriais. Qualidade premium e atendimento nacional."
      portfolioImages={portfolioImages}
      heroImage={departamentos01}
      trustSectionTitle="Departamentos que atendemos"
      trustPartners={trustPartners}
    />
  );
};

export default DepartamentosPage;
