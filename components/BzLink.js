import Link from "next/link";

export default function BzLink(props) {
  return (
    <>
      <div className="bz-w-full bz-flex bz-justify-center">
        <Link href={props.linkedTo} className={`${props.class} ${props.bgColor}`}>
          <div
            style={{
              outline: "none",
            }}
            className={`bz-py-2 bz-px-16`}
          >
            {props.text}
          </div>
        </Link>
      </div>
    </>
  );
}
