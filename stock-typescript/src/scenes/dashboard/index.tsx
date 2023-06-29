import useMediaQuery from '../../hooks/useMediaQuery'
import { useEffect, useState, useReducer } from 'react'
import { SelectedPage } from '../../shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { tickerInfo, hist } from '../../constants/mock'
import { Details } from './Details'
import { Overview } from './Overview'
import { Chart } from './Chart'
import { useStockText } from '../../context/StockContext'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

type Data = {
    name: string,
    coolness: number
}

type historicalData = {
    [key: string]: number
}

export const Dashboard = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const { inputValue, handleSearchInput } = useStockText()
    const [market, setMarket] = useState(tickerInfo)
    const [marketHist, setMarketHist] = useState<historicalData>(hist)



    useEffect(() => {
        async function fecthTickerInfo(): Promise<void> {
            const data = { ticker: inputValue }
            const queryParams = new URLSearchParams(data).toString()

            try {
                const response = await fetch(`http://localhost:5000/stock?${queryParams}`)
                const dataJson: any = await response.json()
                setMarket(dataJson)

            } catch (error) {
                console.log("heisann")
            }
        }
        fecthTickerInfo()
    }, [, inputValue])

    useEffect(() => {
        async function fecthHistorical(): Promise<void> {
            const data = { ticker: inputValue, periode: '1y' }
            const queryParams = new URLSearchParams(data).toString()
            try {
                const response = await fetch(`http://localhost:5000/historical?${queryParams}`)
                const dataJson: any = await response.json()
                setMarketHist(dataJson)
                console.log("---------Hei--------", { marketHist })

            } catch (error) {
                console.log("heisann")
            }
        }
        fecthHistorical()
    }, [, inputValue])

    return (
        <section id="dashboard" className=" bg-gray-800 py-10 h-full md:pb-0 md:mx-0">
            <div className="flex flex-col items-center mt-28 gap-2">
                <div className='gap-4 grid grid-cols-3 md:grid-cols-1 xl:grid-cols-3 grid-rows-4 md:grid-rows-5 xl:grid' >
                    <div className='col-span-2 md:col-span-2 xl:col-span-3 row-span-1' >
                        <Overview details={market} />
                    </div>
                    <div className='col-span-2 md:col-span-2 xl:col-span-3 row-span-3' >
                        <Chart details={marketHist} />
                    </div>
                    <div className='md:col-span-2 row-span-3' >
                        <Details details={market} />
                    </div>
                </div>

                <div className="">
                    {/* {Action Buttoms} */}
                    <AnchorLink
                        className='text-sm font-bold text-primary-500'
                        onClick={() => setSelectedPage(SelectedPage.Analytics)}
                        href={`#${SelectedPage.Analytics}`}>
                        <p>Do Predictions</p>
                    </AnchorLink>
                </div>
            </div>
        </section>
    )
}