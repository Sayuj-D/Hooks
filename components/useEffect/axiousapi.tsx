import React, { useEffect, useState } from "react";
import axios from "axios";

interface props1 {
  title: string;
  id: number;
}

const Axiousapi: React.FC = () => {
  const [data, setData] = useState<props1[]>([]);

  // when the components mounts, to perform the side-effects we use useeffect.

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const responce = await axios.get(
      "https://fakerestapi.azurewebsites.net/api/v1/Activities"
    );

    // we have got the data here.
    // console.log("responce is:", responce);

    // so we need to add the obtained responce to data variable.

    setData(responce.data);
    // now the obtained responce is set in data and we need to manipulate the data variable to set the responce in proper format
  };
  return (
    <>
      <ul className="grid grid-cols-5 gap-3 bg-amber-100 rounded-2xl p-4 my-4">
        {data.map((items, index) => {
          return (
            <li key={index}>
              id = {items.id}
              <br />
              Title = {items.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Axiousapi;
