import React, { useCallback, useEffect, useState } from "react";
import FormData from "../formData/FormData";
import StudentData from "../student/Student";
import type { Idata } from "../../types/Data.interface";

const Main = () => {
  const [data, setData] = useState<Idata[]>(
    JSON.parse(localStorage.getItem("data") || `[]`)
  );
  const [update, setUpdate] = useState<Idata | null>(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleDelet = useCallback(
    (id: number | string) => {
      setData((prv) => prv.filter((item) => item.id !== id));
    },
    [setData]
  );

  return (
    <div>
      <FormData setData={setData} setUpdate={setUpdate} update={update} />
      <StudentData
        data={data}
        handleDelet={handleDelet}
        handleUpdate={setUpdate}
      />
    </div>
  );
};

export default React.memo(Main);
