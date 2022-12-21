import { FunctionComponent, ReactElement } from "react";
import SvgInterface from "../../../interfaces/SvgInterface";
import AutoIcon from "../../Svg/AutoIcon";
import JobIcon from "../../Svg/JobIcon";
import MarketsIcon from "../../Svg/MarketsIcon";
import PropertyIcon from "../../Svg/PropertyIcon";
export interface MenuItem {
    title: string
    icon: any,
    link: string
}

const Items: MenuItem[] = [

    {
        title: "Работа",
        icon: JobIcon,
        link: "/job"
    },
    {
        title: "Авто",
        icon: AutoIcon,
        link: "/auto"
    },
    {
        title: "Недвижимость",
        icon: PropertyIcon,
        link: "/property"
    },
    {
        title: "Маркетплейсы",
        icon: MarketsIcon,
        link: "/marketplaces"
    },

]

export default Items;