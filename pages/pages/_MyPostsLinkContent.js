import Link from 'next/link'
import allPostsDataGet from '../../utils/allPostsDataGet'
export default function LinkContent(){
    const allPostsData = allPostsDataGet();
    console.log(allPostsData);
    return(
        <>
        {allPostsData.map(content =>
            <div className="mb-3">
            {content.map(({ file, title, platform }) => 
            <>
                <div className="-m-3">.</div>
                <Link href={`/${file}`}>
                    <li key={file} className="cursor-pointer">
                        <a className="text-green-600 hover:bg-green-600 hover:text-black duration-500">{title}</a>
                        <a className="mx-3 text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{platform}</a>
                    </li>
                </Link>
            </>
            )}
            </div>
        )}   
        </>
    )
}