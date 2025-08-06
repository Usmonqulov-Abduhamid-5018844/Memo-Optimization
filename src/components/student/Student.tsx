import React, { type FC } from "react";
import type { Idata } from "../../types/Data.interface";



interface Props {
  data: Idata[];
  handleDelet: (e: number| string)=> void
  handleUpdate: (e: Idata | null)=> void
}

const Student:FC<Props> = ({data, handleDelet, handleUpdate}) => {
  
  return (
<div className="container mt-8 mb-8 flex flex-wrap gap-7 justify-center">
  {
    data?.map((item) => (
      <div
        key={item.id}
        className="w-[300px] bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center gap-4 max-[666px]:w-[100%]"
      >
        <h1 className="font-bold text-xl text-center text-gray-800 max-[666px]:text-2xl">{item.full_name}</h1>
        <span className="text-lg font-medium max-[666px]:text-[22px]">{item.age} years</span>
        <span className="text-base font-semibold max-[666px]:text-[19px]">{item.salary}$ USD</span>
        <span className="text-base font-semibold max-[666px]:text-[25px]">Experience: {item.expirens} years</span>

        <div className="flex gap-4 mt-2 max-[666px]:gap-12">
          <button
            onClick={() => handleDelet(item.id)}
            className="px-4 cursor-grab py-2 rounded-lg font-bold bg-red-500 hover:bg-red-600 text-white transition"
          >
            Delete
          </button>
          <button
            onClick={() => handleUpdate(item)}
            className="px-4 cursor-pointer py-2 rounded-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white transition"
          >
            Update
          </button>
        </div>
      </div>
    ))
  }
</div>

  );
};

export default React.memo(Student);