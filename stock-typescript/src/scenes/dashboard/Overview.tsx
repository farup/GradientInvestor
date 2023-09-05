import { Card } from "./card"
import { useState, useEffect } from "react"
import { useStockText } from "../../context/StockContext"

type Props = {}

export const Overview = ({ details }: any) => {

    const [change, setChange] = useState<number>(0)

    useEffect(() => {
        const open = details['open']
        const current = details['currentPrice']
        console.log(current, open)
        const chan: number = ((current - open) / open) * 100
        const roundNumb = parseFloat((Math.round(chan * 100) / 100).toFixed(2))

        setChange(roundNumb)
    }, [])

    return (

        <Card>
            <div className="flex flex-1 justify-between">
                <div className="flex flex-col">
                    <span className="text-lg">{details['shortName']}</span>
                    <p className="text-sm">{details['symbol']}</p>
                </div>
                <div>
                    <span>{details['currentPrice']} {details['currency']}</span>
                    <p className={` ${change > 0 ? "text-lime-500" : "text-red-500"}`}>{change}%</p>
                </div>
            </div>
        </Card>
    )
}