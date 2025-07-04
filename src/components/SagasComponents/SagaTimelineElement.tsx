'use client';

import React, { useMemo } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const HiArrowCircleDown = dynamic(() =>
  import("react-icons/hi").then((mod) => mod.HiArrowCircleDown)
);

type Props = {
  title: string;
  image: string;
  description: string;
  route: string;
};

export const SagaTimelineElement: React.FC<Props> = ({
  title,
  image,
  description,
  route,
}) => {
  const fullRoute = useMemo(() => {
    return route.startsWith("/") ? route : `/${route}`;
  }, [route]);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#f0f0f0", color: "#000" }}
      contentArrowStyle={{ borderRight: "7px solid #bbb" }}
      iconStyle={{ background: "#000", color: "#fff" }}
      icon={<HiArrowCircleDown />}
    >
      <h3 className="text-xl font-semibold">{title}</h3>

      <div className="relative w-full h-48 my-2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-sm">{description}</p>

      <Link
        href={fullRoute}
        className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Explore
      </Link>
    </VerticalTimelineElement>
  );
};
