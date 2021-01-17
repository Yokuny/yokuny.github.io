import Image from 'next/image';
export default function RealContent(Props){
    // function ImageRender(){
    //     const imgLinks = PostInfo.children.imgSrc;
    //     const renderedImages = imgLinks.map(imgLink => (
    //             <div className="flex justify-cente items-center">
    //                 <Image src={imgLink} height={800} width={1200}></Image>
    //             </div>
    //         ));
    //     return renderedImages;
    // };
    // function CommentRender(){
    //     const postComment = PostInfo.children.comment;
    //     const renderedComment = postComment.map(comment => (
    //         <p className="text-xs xl:text-sm text-green-600">{comment}</p>
    //     ));
    //     return renderedComment;
    // };
    // function NetworkNamesAndLinkRender(){
    //     const socialNetworkNamesAndLink =  PostInfo.children.socialNetworkNamesAndLink;
    //     const renderedNetworkNamesAndLink = socialNetworkNamesAndLink.map(nameAndLink => (
    //         <a href={nameAndLink[1]} className="mx-2 p-0.5 border text-xs xl:text-sm text-fuchsia-300 bg-gray-900 border-fuchsia-300 hover:text-gray-900 hover:border-gray-900 hover:bg-fuchsia-300 duration-500">{nameAndLink[0]}</a>
    //     ));
    //     return renderedNetworkNamesAndLink;
    // };
    const imgLinks = Props.children.imgSrc;
    const postComment = Props.children.comment;
    const socialNetworkNamesAndLink =  Props.children.socialNetworkNamesAndLink;
    return(
    <>
        <div className="mt-2 grid grid-cols-1 gap-4">
            {imgLinks.map(imgLink => (
                <div className="flex justify-cente items-center">
                    <Image src={imgLink} height={800} width={1200}></Image>
                </div>
            ))}
        </div>
        <div className="mt-4">
            <a className="text-sm xl:text-lg text-fuchsia-300 hover:bg-fuchsia-300 hover:text-black duration-500" href={Props.children.projectLink}>{Props.children.title}</a>
            <a className="mx-4 text-xs xl:text-sm text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{Props.children.platform}</a>
        </div>
        <div className="mt-4">
            {postComment.map(comment => (
                <p className="text-xs xl:text-sm text-green-600">{comment}</p>
            ))}
        </div>
        <div className="mt-4">
            {socialNetworkNamesAndLink.map(nameAndLink => (
                <a href={nameAndLink[1]} className="mx-2 p-0.5 border text-xs xl:text-sm text-fuchsia-300 bg-gray-900 border-fuchsia-300 hover:text-gray-900 hover:border-gray-900 hover:bg-fuchsia-300 duration-500">{nameAndLink[0]}</a>
            ))}
        </div>
    </>
    );
}