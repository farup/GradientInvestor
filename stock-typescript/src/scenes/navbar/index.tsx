import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import Link from "./Link"
import { SelectedPage } from "../../shared/types"
import useMediaQuery from "../../hooks/useMediaQuery"
import ActionButton from "../../shared/ActionButton"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { Search } from "./Search"
// Windows: ctrl + alt + t Tailwind doc


type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between" // Creates flex between div, vertical center
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navbarBacground = isTopOfPage ? "" : "bg-gray-700 drop-shadow"

    return (
        <nav>
            {/* {Full Nav Bar DVI } */}
            <div className={`${navbarBacground} ${flexBetween} fixed top-0 z-20 w-full py-6`}>
                {/* {Inner Bar with centred with padding} */}
                <div className={`${flexBetween}  mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full`}>
                        {/* {Left side } */}
                        <h1 className="font-bold">Gradient Investor</h1>
                        {/* {Right side} */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                {/* {Inner left side (links)}  // gap represent space betweeneach item*/}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    {
                                        Object.values(SelectedPage).map((value: string) => (
                                            <Link
                                                page={value as SelectedPage}
                                                pageTitle={value.replace(/^\w/, (c) => c.toUpperCase())} // pattern "^\w ^ symbolds start of strin w any character"
                                                selectedPage={selectedPage}
                                                setSelectedPage={setSelectedPage}
                                            />
                                        ))}
                                </div>
                                <Search />

                                {/* {Inner right side (login/signin)} */}
                                <div className={`${flexBetween} gap-8 `}>
                                    <p>Login</p>
                                    <ActionButton setSelectedPage={setSelectedPage} >Sign up</ActionButton>
                                </div>

                            </div>) : (
                            <div className="flex gap-2 ">
                                <Search />
                                <button className="rounded-full p-2"
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <Bars3Icon className="h-6 w-6 text-white" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-30 h-full w-[300px] bg-gray-600 drop-shadow-xl">
                    {/* {Close Icon } */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    {/* {Menu Items} */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        {
                            Object.values(SelectedPage).map((value: string) => (
                                <Link
                                    page={value as SelectedPage}
                                    pageTitle={value.replace(/^\w/, (c) => c.toUpperCase())}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar