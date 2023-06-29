import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { useStockText } from '../../context/StockContext'



export const Search = () => {
    const { inputValue, handleSearchInput } = useStockText()

    return (
        <div>
            <form className="bg-gray-600" >
                <div className="relative bg-gray-600 focus-within:text-gray-100">

                    <button className='absolute'>
                        <MagnifyingGlassIcon className=" w-5 h-5 m-2 pointer-events-none" />
                    </button>
                    <input type="text"
                        value={inputValue}
                        onChange={handleSearchInput}

                        name="search"
                        placeholder="Search stock ticker..."
                        autoComplete="off"
                        aria-label="Search talk"
                        className="w-full pr-3 pl-10 py-2 bg-gray-800 placeholder-gray-600 text-white rounded-md border-none ring-2 ring-gray-700 focus:ring-gray-800" />
                </div>
            </form>

        </div>
    )
}