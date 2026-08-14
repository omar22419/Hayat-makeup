import LookCard from "./LookCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getLooks, looksGridMock } from "../../services/catalog.js";

export default function LooksGrid() {
  const looks = useAsyncData(getLooks, looksGridMock);

  return (
    <section
      className="
        grid
        grid-cols-4
        gap-2

        sm:gap-3

        md:grid-cols-4
        md:gap-5

        lg:gap-6
      "
    >
      {looks.map((look) => (
        <LookCard key={look.id} look={look} />
      ))}
    </section>
  );
}
