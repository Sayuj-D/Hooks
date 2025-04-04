import axios from "axios";
import React, { useState } from "react";

interface props1 {
  question: string;
  correct_answer: string;
}

const Api_here: React.FC = () => {
  const [data, setData] = useState<props1[]>([]);
  const [answer, setAnswer] = useState<boolean>(false);

  const handelClick = () => {
    const fetchdata = async () => {
      const responce = await axios.get(
        "https://opentdb.com/api.php?amount=1&type=multiple"
      );
      setData(responce.data.results);
      setAnswer(false);
    };
    fetchdata();
  };

  const handelclick_ans = () => {
    setAnswer(true);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex-col shadow-2xl my-4 inline-flex rounded-2xl p-8">
          <ul>
            {data.map((item, index) => {
              return <li key={index}>{item.question}</li>;
            })}
          </ul>
          <button className="buttons mb-4" onClick={handelClick}>
            Question here!
          </button>

          {/* conditional rendering &&, only load the correct_answer if answer is true.  */}
          <ul>
            {answer &&
              data.map((item, index) => {
                return <li key={index}>{item.correct_answer}</li>;
              })}
          </ul>

          <br />
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer"
            onClick={handelclick_ans}
          >
            Answer here!
          </button>
        </div>
      </div>
    </>
  );
};

export default Api_here;
