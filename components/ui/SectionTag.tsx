interface Props {
  children: React.ReactNode;
}

/** Small mono-spaced label rendered above section headlines. */
export default function SectionTag({ children }: Props) {
  return <p className="section-tag">{children}</p>;
}
