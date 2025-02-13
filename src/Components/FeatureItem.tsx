type FeatureItemProps = {
  item: {
    img: string;
    title: string;
    description: string;
  };
};

function FeatureItem({ item }: FeatureItemProps) {
  return (
    <article className="flex flex-col items-center gap-6 md:items-start">
      <img
        src={item.img}
        alt={`${item.title} icon`}
        className="bg-F16718 h-16 w-16 rounded-2xl px-5 py-5"
      />

      {/* Given extra mt-16px for md to h3 so that it will be 40px combined with the flex-gap */}
      <h3 className="text-162542 mx-6 mt-6 text-2xl leading-7 font-black uppercase md:mx-0 md:mt-4 md:mr-28 xl:mt-6 xl:mr-14">
        {item.title}
      </h3>
      <p className="text-7B8BAD mx-6 text-center leading-[1.63rem] font-medium md:mx-0 md:mr-5 md:text-left xl:mr-3.5">
        {item.description}
      </p>
    </article>
  );
}

export default FeatureItem;
