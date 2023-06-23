// type Value = string | number

import { Card } from "./card"

// type NestedObject = {
//     [key: string]: string | number
// }

// type Props = {
//     [key: string]: string | number | { [key: string]: string | number }
// }

type DetailsList = {
    [key: string]: string
}

export const Details = ({ details }: any) => {

    const detailsList: DetailsList = {
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        trailingEps: "Eps",
        trailingPE: "P/E",

        profitMargins: "Profit Margins"
    }

    return (
        <Card>
            <ul className="w-full h-full flex flex-col justify-between divide-y-1 text-sm">
                {Object.keys(detailsList).map((item) => {
                    return (
                        <li key={item} className="flex-1 flex justify-between items-center gap-3">
                            <span>{detailsList[item]}</span>
                            <span>{details[item]} </span>
                        </li>)
                })}
            </ul>

        </Card>
    )
}