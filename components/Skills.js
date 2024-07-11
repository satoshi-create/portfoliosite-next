import React from "react";
import Title from "./Title";

const Skills = ({ title }) => {
  const { title1, bcgClr, btn } = title;
  return (
    <section className={`parts-grid section-padding `}>
      <Title title={{ title1 }} />
    </section>
  );
};

export default Skills;
