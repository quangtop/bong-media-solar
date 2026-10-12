import Image from "next/image";
import avatar from "@/images/bong-media-avatar.jpg";
import { BRAND } from "@/data/brand";

export function BrandLogo() {
  return (
    <span className="inline-flex shrink-0 items-center gap-3">
      <Image src={avatar} alt={`Logo ${BRAND.name}`} width={56} height={56}
        className="size-12 rounded-full object-contain lg:size-14" loading="eager" />
      <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">{BRAND.name}</span>
    </span>
  );
}
