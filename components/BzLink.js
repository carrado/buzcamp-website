import Link from "next/link";

export default function BzLink(props) {
    return (
        <>
            <div className='bz-w-full bz-flex bz-justify-center'>
                <Link href={props.linkedTo}>
                    <div
                        style={{ width: `${props.width}`, outline: 'none', border: '2px solid #ffffff' }}
                        className={`${props.class} ${props.bgColor} bz-py-2 bz-px-16`}
                    >
                        {props.text}
                    </div>
                </Link>
            </div>
        </>
    )
}