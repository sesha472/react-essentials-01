import React from "react";
import Coreconcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";

const CoreConcept = () => {
  return (
    <section id="core-concepts">
      <h2> Core concepts </h2>

      <ul>
        {CORE_CONCEPTS.map((item) => (
          <Coreconcepts key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcept;
