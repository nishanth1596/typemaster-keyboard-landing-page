import FeatureItem from "./FeatureItem";
import { featureItemData } from "./data";

interface FeatureItemData {
  img: string;
  title: string;
  description: string;
}

function FeatureSection() {
  return (
    <section className="mt-[6.94rem] grid grid-cols-1 gap-y-16 md:mt-36 md:mr-[98px] md:ml-10 md:grid-cols-2 md:gap-x-3 md:gap-y-[4.5rem] xl:m-0 xl:mt-[10.5rem] xl:grid-cols-4 xl:gap-x-[1.88rem]">
      {featureItemData.map((item: FeatureItemData) => (
        <FeatureItem key={item.title} item={item} />
      ))}
    </section>
  );
}

export default FeatureSection;
