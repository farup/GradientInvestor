import { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../../shared/types';

type Props = {
    page: SelectedPage,
    pageTitle: String,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}



const Link = ({
    page,
    pageTitle,
    selectedPage,
    setSelectedPage,
}: Props) => {


    //const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
    return (
        <AnchorLink
            href={`#${page}`}
            className={`${selectedPage === page ? "text-primary-500" : "text-white"}
            transition duration-500 hover:text-primary-300`}
            onClick={() => setSelectedPage(page)}
        >
            {pageTitle}
        </AnchorLink>
    )
}

export default Link