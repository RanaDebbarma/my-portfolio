"use client"

export const GradientBg = () => {
  return (
    <div
      className="animate-gradient-rotate bg-linear-(--gradient-angle) to-[hsla(212,100%,50%,0.27)] via-transparent from-[hsla(19,76%,41%,0.27)] h-full radialMask"
    >
    </div>
  );
};

export const GridBg = ({opacity = 50}: {opacity?: number}) => {
  return (
    <div
      className="bg-size-[33px_33px] bg-[linear-gradient(to_right,var(--wrapper-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--wrapper-border)_1px,transparent_1px)] h-full inverseRadialMask"
      style={{
        opacity: `${opacity}%`,
      }}
    >
    </div>
  )
}