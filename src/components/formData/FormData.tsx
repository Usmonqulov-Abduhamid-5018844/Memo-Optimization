import React, {
  useEffect,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import { useGetvalue } from "../../hook/GetvalueData";
import type { Idata } from "../../types/Data.interface";

const initialState: Idata = {
  id: 0,
  full_name: "",
  age: "",
  expirens: "",
  salary: "",
};

interface Props {
  setUpdate: Dispatch<SetStateAction<Idata | null>>;
  update: Idata | null;
  setData: Dispatch<SetStateAction<Idata[]>>;
}

const FormData: FC<Props> = ({ setData, setUpdate, update }) => {
  
  const { handleChange, formData, setFormData } = useGetvalue(initialState);

  useEffect(() => {
    if (update) {
      setFormData(update);
    }
  },[update, setFormData]);

  const hendleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (update) {
      setData((prv) =>
        prv.map((item) =>
          item.id === update.id ? { ...item, ...formData, salary: Number(formData.salary), expirens: Number(formData.expirens)} : item
        )
      );
      setUpdate(null);
    } else {
      const newData: Idata = {
        ...formData,
        salary: Number(formData.salary),
        expirens: Number(formData.expirens),
        id: Date.now()
      };
      setData((prev) => [...prev, newData]);
    }
    setFormData(initialState);
  };
  return (
    <div className="container">
      <form
  onSubmit={hendleSubmit}
  className="max-w-md w-full bg-black/50 shadow-2xl mt-6 mx-auto rounded-2xl px-8 py-10 flex flex-col gap-6"
>
  <input
    name="full_name"
    value={formData.full_name}
    onChange={handleChange}
    className="bg-gray-100 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
    required
    placeholder="Enter your full name"
    type="text"
  />

  <input
    name="age"
    value={formData.age}
    onChange={handleChange}
    className="bg-gray-100 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
    required
    placeholder="Enter your age"
    type="number"
  />

  <input
    name="salary"
    value={formData.salary}
    onChange={handleChange}
    className="bg-gray-100 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
    required
    placeholder="Enter your salary"
    type="number"
  />

  <input
    name="expirens"
    value={formData.expirens}
    onChange={handleChange}
    className="bg-gray-100 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
    required
    placeholder="Enter your experience"
    type="number"
  />

  <button
    className="mt-4 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-md cursor-pointer"
  >
    {update ? "Save" : "Submit"}
  </button>
</form>

    </div>
  );
};

export default React.memo(FormData);
