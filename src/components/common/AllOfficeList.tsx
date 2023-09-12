import { AiFillStar } from "react-icons/ai";
import { BackgroundCover } from "./BackgroundCover";
import { Pagination } from "./Pagination";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export const AllOfficeList = ({ data }: any): JSX.Element => {
  return (
    <>
      <div className="grid justify-center sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-w-min">
        {data?.content?.map((data: any) => {
          return (
            <Link to={`Booking/${data?.id}`} key={data?.id} className="mx-auto my-3">
              {data?.imagePath === "None" ? (
                <img className="rounded-xl" src={`officeImg/noimage.png`} />
              ) : (
                <img className="rounded-xl object-cover h-48 w-72" alt="{data?.name}사진" src={data?.imagePath[0]} />
              )}
              <div className="text-left mt-2 px-1">
                <div className="flex justify-between flex-row">
                  <p className="font-bold text-base tracking-tight">{data?.name}</p>
                  <div className="flex gap-1 items-center">
                    <AiFillStar className="flex" />
                    <p className="font-bold text-sm tracking-tight">
                      {data?.reviewRate}({data?.reviewCount})
                    </p>
                  </div>
                </div>
                <p className="font-medium text-sm">{data?.location}</p>
                <p className="font-medium text-sm price">월 {data?.leasePrice}원</p>
              </div>
            </Link>
          );
        })}
      </div>
      <BackgroundCover width="w-1/3" margin="mx-auto mt-10" padding="p-4">
        {/* <Pagination itemsPerPage={10} totalItems={data?.totalPages} /> */}
      </BackgroundCover>
    </>
  );
};
