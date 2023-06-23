
import { useState } from "react"
import { hist } from "../../constants/mock"
import { Card } from "./card"
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,

} from "recharts"
import { converUnixTimeToDate } from "../../helpers/data-helpers"

type Prop = {

}


type historicalData = {
    [key: string]: number
}

export const Chart = () => {

    const [data, setData] = useState<historicalData>(hist)
    const [filter, setFilter] = useState()

    const formatData = () => {
        return Object.entries(data).map(([uTime, price]) => {
            console.log(converUnixTimeToDate(Number(uTime)))

            return {

                value: price.toFixed(2),
                date: converUnixTimeToDate(Number(uTime))
            }
        })
    }

    return (
        <Card>
            <ul className="flex absolute top-2 right-2 z-40">

            </ul>
            <ResponsiveContainer>
                <AreaChart data={formatData()}>
                    <defs>
                        <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="rgb(75 85 99)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#312e81"
                        fillOpacity={1}
                        strokeWidth={0}
                        fill="url(#chartColor)" />
                    <Tooltip />
                    <XAxis dataKey={"date"} />
                    <YAxis domain={["datamin", "dataMax"]} />

                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}

