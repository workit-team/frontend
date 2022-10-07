import React, {FC} from "react";

const containerStyles = "w-full h-[5rem] flex flex-row items-center justify-center absolute bottom-0 mb-[10rem]"

const pageArr = ["1", "2", "3", "4", "5"]

type Props = {
    totalPages: number,
    currPage: number,
}

type PageLinkProps = {
    page: string
}

const PageLink: FC<PageLinkProps> = ({page}) => {
    const handleClick = (page) => {
        //handle page link click logic
        console.log(page)
    }

    return (
        <div onClick={handleClick} className="mr-2">
            {page}
        </div>
    )
}

export const Pagination: FC<Props> = ({totalPages}) => {

    return (
        <div className={containerStyles}>
            <PageLink page="prev" />
            {pageArr.map((page) => {
                return <PageLink page={page} key={page}/>
            })}
            

            <PageLink page="next" />
        </div>
    )
}