import { ReactElement, SVGProps } from "react";

export type Social = {
    url: string;
    img: ReactElement<SVGProps<SVGElement>> | any;
}