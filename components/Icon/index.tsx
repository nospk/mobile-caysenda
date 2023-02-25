import Image from 'next/image';
import type { FC } from "react";
interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
}
const Icon: FC<Props> = (props) => {
    return (
        <Image className="ml-auto mr-auto"
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
        />
    )

}

export default Icon;