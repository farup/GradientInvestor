import useMediaQuery from '../../hooks/useMediaQuery'
import { useEffect, useState } from 'react'
import { SelectedPage } from '../../shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { tickerInfo } from '../../constants/mock'
import { Details } from './Details'
import { Overview } from './Overview'
import { Chart } from './Chart'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

type Data = {
    name: string,
    coolness: number
}

export const Dashboard = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [data, setData] = useState<Data[]>()
    const [inputValue, setInputValue] = useState<string>("")
    const [market, setMarket] = useState<string>("")

    // useEffect(() => {
    //     async function fecthData(): Promise<void> {
    //         try {
    //             console.log("Heeeeeeeee")
    //             const response = await fetch('http://localhost:5000/json')
    //             console.log(response)
    //             const dataJson: Data[] = await response.json()
    //             setData(dataJson)

    //         } catch (error) {
    //             console.log("heisann")
    //         }
    //     }
    //     fecthData()
    // }, [])


    // useEffect(() => {
    //     fetch('http://localhost:5000/market')
    //         .then(response => response.text())
    //         .then(data => {

    //             setMarket(data)
    //         }).catch(error => { console.log(error) })
    // }, [])


    return (
        <section id="dashboard" className=" bg-gray-800 py-10 h-full md:pb-0 md:mx-0">
            <div className="flex flex-col items-center mt-28 gap-2">
                <div className='gap-4 grid grid-cols-3 md:grid-cols-1 xl:grid-cols-3 grid-rows-4 md:grid-rows-5 xl:grid' >
                    <div className='col-span-2 md:col-span-2 xl:col-span-3 row-span-1' >
                        <Overview details={tickerInfo} />
                    </div>
                    <div className='col-span-2 md:col-span-2 xl:col-span-3 row-span-3' >
                        <Chart />
                    </div>
                    <div className='md:col-span-2 row-span-3' >
                        <Details details={tickerInfo} />
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