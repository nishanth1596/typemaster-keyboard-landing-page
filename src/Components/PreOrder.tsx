const light =
  "text-162542 bg-E8EFF2 hover:text-FFFFFF hover:bg-162542 transform rounded-lg px-3.5 py-3 leading-[1.63rem] font-bold uppercase transition-all duration-300 ease-in-out hover:cursor-pointer xl:py-4 xl:px-7";

const color =
  "text-FFFFFF bg-F16718 hover:bg-FF9B62 transform rounded-lg px-3.5 py-3 leading-[1.63rem] font-bold uppercase transition-all duration-300 ease-in-out hover:cursor-pointer xl:py-4 xl:px-7";

type PreOrderProps = {
  style: string;
};

function PreOrder({ style }: PreOrderProps) {
  let btnStyles;

  if (style === "light") {
    btnStyles = light;
  }

  if (style === "color") {
    btnStyles = color;
  }

  return (
    <a href="#" className={btnStyles}>
      Pre-order now
    </a>
  );
}

export default PreOrder;
