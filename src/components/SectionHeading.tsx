type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-xs font-black uppercase tracking-[0.28em] ${
          light ? "text-[#f0c86a]" : "text-[#b98724]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#14213d]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            light ? "text-[#c7cfdd]" : "text-[#647089]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}