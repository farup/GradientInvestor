import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Card = (props: Props) => {
    return (
        <div className="w-full h-full rounded-md relative p-8 bg-gray-700">{props.children}</div>
    )
}