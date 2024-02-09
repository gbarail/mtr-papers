import Section from "./section";
import { sections } from "./papers";

export default function App() {
  return (
    <>
      <h1>MTR Papers</h1>
      {sections.map(section => <Section key={section.section} section={section}></Section>)}
    </>
  );
}