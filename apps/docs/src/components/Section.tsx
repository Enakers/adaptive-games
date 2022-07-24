import Image from "next/image";
import {FC, ReactNode} from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({id, title, children}) => (
  <section id={id} className="mt-40">
    <h2 className="text-center mb-10 text-2xl font-semibold">{title}</h2>
    <div className="divider" />

    {children}
  </section>
);

type SubSectionProps = {
  imgSrc: string;
  imgAlt: string;
  children: ReactNode;
};

export const SubSection: FC<SubSectionProps> = ({imgSrc, imgAlt, children}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
    <div className="prose my-auto">{children}</div>
    <div className="col-span-2">
      <Image src={imgSrc} alt={imgAlt} className="rounded-box" width="769" height="560" />
    </div>
  </div>
);
