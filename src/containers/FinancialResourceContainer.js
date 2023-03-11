import { useState, useEffect } from "react";
import { FinancialResourcesList } from "../components/FinancialInfo/FinancialResourcesList";
export const FinancialResourceContainer = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("today");
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_RAPID_API_ENV_URL}/auto-complete?q=${search}&region=US`;
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": `${process.env.REACT_APP_RAPID_API_ENV_HOST}`,
        "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_ENV_KEY}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResources(data.news);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [search]);

  return (
    <div className="items-center justify-center w-screen h-screen ">
      <h1 className="mt-10 mx-5 mb-10">Financial Resources</h1>
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="border-8 border-blue-500 rounded-full bg-white shadow flex w-full">
          <input
            type="text"
            placeholder="Try 'Bagel Seasoning'"
            className="w-full rounded-tl-full rounded-bl-full py-2 px-4"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={() => setSearch(query)}
            className="bg-yellow-300 rounded-tr-full rounded-br-full hover:bg-red-300 py-2 px-4"
          >
            <p className="font-semibold text-base uppercase">Search</p>
          </button>
        </div>
      </div>
      <FinancialResourcesList resourcesList={resources} />
    </div>
  );
};
