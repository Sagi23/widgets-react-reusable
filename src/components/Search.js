import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    const timeOutId = setTimeout(() => {
      if (term) {
        searchWiki();
      }
    }, 500);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [term]);

  const renderdResults = results.map((reusult) => {
    return (
      <div key={reusult.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${reusult.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{reusult.title}</div>
          <span dangerouslySetInnerHTML={{ __html: reusult.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderdResults}</div>
    </div>
  );
};

export default Search;
