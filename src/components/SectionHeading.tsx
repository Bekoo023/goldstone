type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98724]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight text-[#14213d] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[#647089] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}