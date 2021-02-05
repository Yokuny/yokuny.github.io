import Link from 'next/link'
import allPostsDataGet from '../../utils/allPostsDataGet'
function LinkContent(){
    const allPostsData = allPostsDataGet();
    const backwardWords = "<<";
    const fowardWords = ">>";
    let currentPage = 0;
    const numberOfPages = allPostsData.length;
    function previousPage() {
        const getCurrentRenderedElement = document.getElementById(currentPage);
        getCurrentRenderedElement.style.display = 'none'
        console.log(currentPage);
        if(currentPage==0){
            currentPage = numberOfPages-1;
        }else{
            currentPage -= 1;
        }
        console.log(currentPage);
        const getNewElementToRender = document.getElementById(currentPage);
        getNewElementToRender.style.display = 'initial'
    }
    function nextPage() {
        const getCurrentRenderedElement = document.getElementById(currentPage);
        getCurrentRenderedElement.style.display = 'none'
        console.log(currentPage);
        if(currentPage==numberOfPages-1){
            currentPage=0;
        }else{
            currentPage++;
        }
        console.log(currentPage);
        const getNewElementToRender = document.getElementById(currentPage);
        getNewElementToRender.style.display = 'initial'
    }
    return(
        <>
        {allPostsData.map((content,index) =>
            <div id={index} className="mb-3 hidden">
            {content.map(({ file, title, platform }) => 
            <>
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
        <div className="flex justify-center mt-6">
            <button onClick={previousPage} className="mx-2 px-3 p-1 border text-xs xl:text-sm text-fuchsia-300 bg-gray-900 border-fuchsia-300 hover:text-gray-900 hover:border-gray-900 hover:bg-fuchsia-300 duration-500">{backwardWords}</button>
            <button onClick={nextPage} className="mx-2 px-3 p-1 border text-xs xl:text-sm text-fuchsia-300 bg-gray-900 border-fuchsia-300 hover:text-gray-900 hover:border-gray-900 hover:bg-fuchsia-300 duration-500">{fowardWords}</button>
        </div>
        </>
    )
}

export default LinkContent;