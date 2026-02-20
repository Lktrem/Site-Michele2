import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

import empresas01 from "@/assets/empresas/empresas-01.jpg";
import empresas02 from "@/assets/empresas/empresas-02.jpg";
import empresas03 from "@/assets/empresas/empresas-03.jpg";
import empresas04 from "@/assets/empresas/empresas-04.jpg";
import empresas05 from "@/assets/empresas/empresas-05.jpg";
import empresas06 from "@/assets/empresas/empresas-06.jpg";
import empresas07 from "@/assets/empresas/empresas-07.jpg";
import empresas08 from "@/assets/empresas/empresas-08.jpg";
import empresas09 from "@/assets/empresas/empresas-09.jpg";
import empresas10 from "@/assets/empresas/empresas-10.jpg";
import empresas11 from "@/assets/empresas/empresas-11.jpg";
import empresas12 from "@/assets/empresas/empresas-12.jpg";
import empresas13 from "@/assets/empresas/empresas-13.jpg";
import empresas14 from "@/assets/empresas/empresas-14.jpg";
import empresas15 from "@/assets/empresas/empresas-15.jpg";
import empresas16 from "@/assets/empresas/empresas-16.jpg";
import empresas17 from "@/assets/empresas/empresas-17.jpg";
import empresas18 from "@/assets/empresas/empresas-18.jpg";
import empresas19 from "@/assets/empresas/empresas-19.jpg";
import empresas20 from "@/assets/empresas/empresas-20.jpg";
import empresas21 from "@/assets/empresas/empresas-21.jpg";
import empresas22 from "@/assets/empresas/empresas-22.jpg";
import empresas23 from "@/assets/empresas/empresas-23.jpg";
import empresas24 from "@/assets/empresas/empresas-24.jpg";
import empresas25 from "@/assets/empresas/empresas-25.jpg";
import empresas26 from "@/assets/empresas/empresas-26.jpg";
import empresas27 from "@/assets/empresas/empresas-27.jpg";
import empresas28 from "@/assets/empresas/empresas-28.jpg";
import empresas29 from "@/assets/empresas/empresas-29.jpg";
import empresaDeUniformes from "@/assets/empresas/empresa-de-uniformes.jpg";
import rrn10 from "@/assets/empresas/rrn10.jpg";
import instagramPost45Jpg from "@/assets/empresas/instagram-post-45.jpg";
import uniformeRrn10 from "@/assets/empresas/uniforme-rrn10.jpg";
import uniformeSocialFeminino from "@/assets/empresas/uniforme-social-feminino.jpg";
import uniformesBordados from "@/assets/empresas/uniformes-bordados.jpg";
import uniformesPersonalizadosParaEmpresas from "@/assets/empresas/uniformes-personalizados-para-empresas.jpg";
import uniformesPortoAlegre from "@/assets/empresas/uniformes-porto-alegre.jpg";
import uniformesProfissionaisSaoPaulo from "@/assets/empresas/uniformes-profissionais-sao-paulo.jpg";
import uniformesRrn10 from "@/assets/empresas/uniformes-rrn10.jpg";

const portfolioImages = [
  { image: empresas01 },
  { image: empresas02 },
  { image: empresas03 },
  { image: empresas04 },
  { image: empresas05 },
  { image: empresas06 },
  { image: empresas07 },
  { image: empresas08 },
  { image: empresas09 },
  { image: empresas10 },
  { image: empresas11 },
  { image: empresas12 },
  { image: empresas13 },
  { image: empresas14 },
  { image: empresas15 },
  { image: empresas16 },
  { image: empresas17 },
  { image: empresas18 },
  { image: empresas19 },
  { image: empresas20 },
  { image: empresas21 },
  { image: empresas22 },
  { image: empresas23 },
  { image: empresas24 },
  { image: empresas25 },
  { image: empresas26 },
  { image: empresas27 },
  { image: empresas28 },
  { image: empresas29 },
  { image: empresaDeUniformes },
  { image: rrn10 },
  { image: instagramPost45Jpg },
  { image: uniformeRrn10 },
  { image: uniformeRrn10 },
  { image: uniformeSocialFeminino },
  { image: uniformesBordados },
  { image: uniformesPersonalizadosParaEmpresas },
  { image: uniformesPortoAlegre },
  { image: uniformesProfissionaisSaoPaulo },
  { image: uniformesRrn10 },
];

const EmpresasPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Empresas"
      segmentTitle="EMPRESAS"
      segmentSubtitle="Portfólio Empresas"
      introText="Projetos desenvolvidos para empresas de diversos setores, valorizando a identidade corporativa e o conforto dos colaboradores."
      seoDescription="Uniformes personalizados para empresas. Camisas de malha, sociais, polo, calça de brim, calça social, jalecos, aventais, casacos e suéter. Qualidade premium, atendimento humanizado e entrega nacional."
      portfolioImages={portfolioImages}
      heroImage={empresas01}
      trustSectionTitle="Empresas que atendemos"
      trustPartners={[
        { name: "Sacolão do Retiro" },
        { name: "Condomínio Residencial Padre Corrêa" },
        { name: "Dib" },
        { name: "Nardo Autopeças" },
        { name: "Cidade das Hortênsias" },
        { name: "Italinea" },
        { name: "Felipe Tintas" },
        { name: "Cartão Convênio" },
        { name: "Ik Imports" },
        { name: "FarmaDebora" },
        { name: "Da Cruz Lutieria" },
        { name: "Manipulação Viver Bem" },
      ]}
    />
  );
};

export default EmpresasPage;
