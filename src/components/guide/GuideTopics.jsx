import GuideTopicCard from "./GuideTopicCard.jsx";

import { Brush, BrushCleaning, BottleWine, Calculator, Eye, SprayCan } from "lucide-react";
import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getGuideTopics, guideTopicsMock } from "../../services/content.js";

const topicIcons = [
  Brush,
  BottleWine,
  Eye,
  SprayCan,
  BrushCleaning,
  Calculator,
];

export default function GuideTopics() {
  const guideTopics = useAsyncData(getGuideTopics, guideTopicsMock);

  const topics = guideTopics.map((topic, index) => ({
    ...topic,
    icon: topicIcons[index] || Brush,
  }));

  return (
    <section className="mb-3">
      <h2
        className="
          mb-2
          text-right
          text-[13px]
          font-semibold

          sm:mb-4
          sm:text-[25px]

          md:mb-5
          md:text-[32px]

          lg:text-[38px]
        "
      >
        مواضيع الدليل
      </h2>

      <div
        className="
          flex
          flex-col
          gap-1

          sm:gap-3

          md:gap-4

          lg:gap-5
        "
      >
        {topics.map((topic) => (
          <GuideTopicCard
            key={topic.id}
            topic={topic}
          />
        ))}
      </div>
    </section>
  );
}