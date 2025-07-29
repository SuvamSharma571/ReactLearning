import React, { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/SuvamSharma571")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
        Github Followers: {data.followers}
      </h1>
      <img src={data.avatar_url} alt="Git_picture" />
    </div>
  );
}
