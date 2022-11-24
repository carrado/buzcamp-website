import Image from "next/image";

export default function Layout() {
    return (
        <div className='bz-flex bz-w-42 bz-h-full bz-fixed bz-z-50'>
            <div className='bz-w-full bz-bg-lightest-red bz-mix-blend-normal bz-shadow-logo bz-rounded-xxl'>
                <Image
                    src="/images/buzcamp.png"
                    height={250}
                    width={250}
                    alt="buzcamp-logo"
                    className="bz-absolute"
                    style={{ left: '26.5%' }}
                />
                <Image
                    src="/images/bz-student_1.png"
                    height={247}
                    width={247}
                    alt="student_img"
                    className="bz-absolute"
                    style={{ right: '8%', top: '31%' }}
                />
                <Image
                    src="/images/bz-student_2.png"
                    height={247}
                    width={247}
                    alt="student_img"
                    className="bz-absolute"
                    style={{ left: '8%', top: '31%' }}
                />
                <Image
                    src="/images/bz-student_3.png"
                    height={247}
                    width={330}
                    alt="student_img"
                    className="bz-absolute"
                    style={{ left: '24.5%', top: '45%' }}
                />
            </div>
        </div>
    )
}