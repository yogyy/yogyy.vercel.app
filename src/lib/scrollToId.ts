export default function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: 'smooth' });
}
