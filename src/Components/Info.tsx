import keyboard1MobileImg from "../assets/mobile/image-phone-and-keyboard.jpg";
import keyboard1TabletImg from "../assets/tablet/image-phone-and-keyboard.jpg";
import keyboard1DesktopImg from "../assets/desktop/image-phone-and-keyboard.jpg";

import keyboard2MobileImg from "../assets/mobile/image-glass-and-keyboard.jpg";
import keyboard2TabletImg from "../assets/tablet/image-glass-and-keyboard.jpg";
import keyboard2DesktopImg from "../assets/desktop/image-glass-and-keyboard.jpg";

function Info() {
  return (
    <section className="mt-6 md:mx-10 md:mt-10 xl:mx-0 xl:grid xl:grid-cols-[750fr_255fr] xl:gap-x-[7.81rem]">
      <div className="flex gap-6 md:gap-[1.88rem] xl:grid xl:grid-cols-[255fr_455fr]">
        <div className="relative -ml-[1.375rem] w-[62%] md:ml-0 xl:w-full">
          <picture>
            <source media="(min-width:1024px)" srcSet={keyboard1DesktopImg} />
            <source
              media="(min-width:768px) and (max-width:1024px)"
              srcSet={keyboard1TabletImg}
            />
            <source media="(max-width:767px)" srcSet={keyboard1MobileImg} />
            <img
              src={keyboard1MobileImg}
              alt="A Black mechanical computer keyboard and a phone looking upside down"
              className="overLay h-full w-full rounded-[1.25rem]"
            />
          </picture>
        </div>

        <picture>
          <source media="(min-width:1024px)" srcSet={keyboard2DesktopImg} />
          <source
            media="(min-width:768px) and (max-width:1024px)"
            srcSet={keyboard2TabletImg}
          />
          <source media="(max-width:767px)" srcSet={keyboard2MobileImg} />
          <img
            src={keyboard2MobileImg}
            alt="A mechanical computer keyboard infront of the laptop, a mouse and a mousepad next to it"
            className="w-[67.3%] rounded-[1.25rem] md:h-full md:w-full"
          />
        </picture>
      </div>

      <div className="md:mt-[4.5rem] md:flex md:items-center md:gap-9 xl:flex-col xl:gap-7">
        <h2 className="text-162542 mx-[3.75rem] mt-[4.69rem] text-center text-[2rem] leading-9 font-black uppercase md:mx-0 md:mt-0 md:text-left">
          Mechanical wireless keyboard
        </h2>
        <p className="text-7B8BAD mx-6 mt-6 text-center leading-[1.63rem] font-medium md:mx-0 md:mt-0 md:text-left">
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
      <div className="decorativeImage absolute -bottom-[20px] -left-[120px] -translate-y-1/2"></div>
    </section>
  );
}

export default Info;
