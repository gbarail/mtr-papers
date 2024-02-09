import Section from "./section";
import { sections } from "./papers";

export default function App() {
  return (
    <>
      <nav>
        <h1>MTR Papers</h1>
      </nav>
      <div>
        {sections.map(section => <Section key={section.section} section={section}></Section>)}
      </div>
    </>
  );
}