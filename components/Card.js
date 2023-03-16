export default function Card({ className, children, variant, style }) {
  return (
    <>
      <div
        className={`${className} ${variant ? "bz-cs-shadow" : ""}`}
        style={style}
      >
        {children}
      </div>
    </>
  );
}
