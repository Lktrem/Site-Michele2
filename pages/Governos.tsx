import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

import governos01 from "@/assets/governos/governos-01.jpg";
import governos02 from "@/assets/governos/governos-02.jpg";
import governos03 from "@/assets/governos/governos-03.jpg";
import governos04 from "@/assets/governos/governos-04.jpg";
import governos05 from "@/assets/governos/governos-05.jpg";

const portfolioImages = [
  { image: governos01 },
  { image: governos02 },
  { image: governos03 },
  { image: governos04 },
  { image: governos05 },
];

const GovernosPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Governos/Prefeituras"
      segmentTitle="GOVERNOS/PREFEITURAS"
      segmentSubtitle="Portfólio Governos/Prefeituras"
      introText="Projetos desenvolvidos para órgãos governamentais, secretarias e entidades públicas, com foco em padronização e identidade institucional."
      seoDescription="Uniformes personalizados para governos e órgãos públicos. Camisas institucionais, coletes de fiscalização e uniformes para servidores. Qualidade premium, conformidade com normas e atendimento nacional."
      portfolioImages={portfolioImages}
      heroImage={governos01}
      trustSectionTitle="Governos/Prefeituras que atendemos"
      trustPartners={[
        { name: "Governo do Estado do Rio de Janeiro" },
      ]}
    />
  );
};

export default GovernosPage;
