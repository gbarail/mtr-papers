import Section from "./section";
import { sections } from "./papers";

export default function App() {
  return (
    <>
      <nav className="page__navbar">
        <h1>MTR Papers</h1>
      </nav>
      <div className="page__content">
        {sections.map(section => <Section key={section.section} section={section}></Section>)}
      </div>
    </>
  );
}