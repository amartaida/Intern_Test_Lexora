import Image from "next/image";

type Props = {
  /** Which shred asset (1 = hero-style, 2 = video/anniversary-style) */
  variant?: 1 | 2;
  className?: string;
};

/*
 * Variant 2 asset (paper-shred-video.webp, 2880×171) is the full torn edge — it is NOT cropped.
 * Its first 65px (of 171) are the ragged tear; from there down it is solid, ending in the page's
 * paper colour. Height and overlap are both proportional to the rendered image width, so they scale
 * together: overlap = (65 + 3px safety) / 2880 of the width.
 */
const V2 = { src: "/images/paper-shred-video.webp", w: 2880, h: 171, overlap: 68 };
/** Image width: full viewport, but never narrower than this — keeps the tear readable on phones. */
const V2_WIDTH = "max(100vw, 900px)";

/**
 * White torn-paper edge. Overlaps the bottom of the previous section (negative margin).
 */
export default function PaperShred({ variant = 1, className = "" }: Props) {
  if (variant === 2) {
    return (
      <div
        className={`relative z-20 w-full overflow-hidden leading-[0] pointer-events-none select-none ${className}`}
        style={{
          height: `calc(${V2_WIDTH} * ${V2.h} / ${V2.w})`,
          marginTop: `calc(${V2_WIDTH} * -${V2.overlap} / ${V2.w})`,
        }}
        aria-hidden="true"
      >
        <Image
          src={V2.src}
          alt=""
          width={V2.w}
          height={V2.h}
          sizes="max(100vw, 900px)"
          className="absolute left-1/2 top-0 block h-full max-w-none -translate-x-1/2"
          style={{ width: V2_WIDTH }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative z-20 w-full leading-[0] -mt-8 sm:-mt-10 lg:-mt-12 pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-8 sm:h-10 lg:h-12">
        <Image src="/images/paper-shred.png" alt="" fill className="object-cover object-bottom" sizes="100vw" />
      </div>
      {/* Solid white continuation so next section blends cleanly */}
      <div className="h-2 bg-white" />
    </div>
  );
}
