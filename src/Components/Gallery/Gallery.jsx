import React from "react";

export default function Gallery({ gallery }) {
  // console.log(gallery);

  const data = gallery.map(imagelink => ({ imagelink }));
  // console.log(data);

  const [active, setActive] = React.useState(
    `${gallery[0]}`
  );
  return (
    // <div className=" w-full mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 my-10">
    //   {gallery?.map((img, i) => (
    //     <div key={i} className="grid gap-4">
    //       <div>
    //         <img
    //           className="h-auto max-w-full rounded-lg object-cover object-center"
    //           src={img}
    //           alt="gallery-photo"
    //         />
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="grid gap-4 my-10">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-4 items-center justify-center gap-0">
      {data?.map((img,index)=> <div key={index}>
           <img
             onClick={() => setActive(img.imagelink)}
             src={img.imagelink}
             className="h-20 w-40 cursor-pointer rounded-lg object-cover object-center"
             alt="gallery-image"
           />
         </div>)
        } 
      </div>
    </div>
  );
}
