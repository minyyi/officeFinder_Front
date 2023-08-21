import { AiFillStar } from 'react-icons/ai';

export const AllOfficeList = (): JSX.Element => {
  return (
    <>
      <div className="grid justify-center grid-cols-4 gap-6">
        <figure>
          <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
          <div className="text-left">
            <div className="flex justify-between items-center">
              <p className="font-bold text-base tracking-tight">선릉 더 공간A</p>
              <div className="flex gap-1 items-center">
                <AiFillStar className="flex" />
                <p className="font-bold text-sm tracking-tight">4.91(21)</p>
              </div>
            </div>
            <p className="font-medium text-sm">서울시 강남구 테헤란로70번길 14-10</p>
            <p className="font-medium text-sm">200m</p>
            <p className="font-medium text-sm">월 500,000</p>
          </div>
        </figure>
      </div>
    </>
  );
};