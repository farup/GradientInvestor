// tsrfc

import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"


type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

export default function ActionButton({ children, setSelectedPage }: Props) {
    return (
        <AnchorLink
            className="rounded-md bg-white text-black px-10 py-2 hover:bg-gray-700 hover:text-black"
            onClick={() => setSelectedPage(SelectedPage.Aboutus)}
            href={`#${SelectedPage.Aboutus}`}

        >{children}</AnchorLink>
    )
}