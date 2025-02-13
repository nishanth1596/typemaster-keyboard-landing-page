import PreOrder from "./PreOrder";
import keyboardMobileImg from "../assets/mobile/image-keyboard.jpg";
import keyboardTabletImg from "../assets/tablet/image-keyboard.jpg";
import keyboardDesktopImg from "../assets/desktop/image-keyboard.jpg";

function Hero() {
  return (
    <section className="relative md:mt-[7.63rem] md:flex md:items-center md:gap-[4.31rem] xl:mt-[5.19rem] xl:items-start xl:gap-32">
      <div className="decorativeImage absolute top-0 left-[1140px] translate-x-1/2"></div>
      <div className="mx-6 md:mx-0 md:mt-0 md:ml-10 xl:ml-0">
        <h1 className="text-162542 text-5xl leading-12 font-black uppercase xl:mt-[3.75rem] xl:text-[3.5rem] xl:leading-[3.75rem]">
          Typemaster keyboard
        </h1>
        <p className="text-7B8BAD mt-8 leading-[1.63rem] font-medium md:mt-[2.13rem] xl:mt-6 xl:text-lg">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>

        <div className="mt-8 flex items-center gap-8 md:mt-10 xl:gap-10">
          <PreOrder style="color" />
          <p className="text-7B8BAD leading-[1.63rem] font-bold uppercase">
            Release on 5/27
          </p>
        </div>
      </div>

      <picture>
        {/* Image for desktop screens */}
        <source media="(min-width:1024px)" srcSet={keyboardDesktopImg} />

        {/* Image for tablets (screens between 768px and 1024px) */}
        <source
          media="(min-width:768px) and (max-width:1024px)"
          srcSet={keyboardTabletImg}
        />
        {/* Image for mobile screens (screens less than 768px) */}
        <source media="(max-width:767px)" srcSet={keyboardMobileImg} />

        {/* Fallback image for browsers that don't support <picture> */}
        <img
          className="mt-16 -mr-5 ml-6 w-full rounded-[1.25rem] md:mt-0 md:ml-0 xl:mr-0"
          src={keyboardMobileImg}
          alt="A Mechanical computer keyboard with buttons in black and in grey color"
        />
      </picture>
    </section>
  );
}

export default Hero;
