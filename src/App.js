import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import { data } from "./data.json";
import SearchBox from "./components/SearchBox";
import "./lib/styles.css";

function App() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSelect = ({ name }) => {
    setValue(name);
  };

  const handleReady = useCallback((inputHtml) => {
    inputHtml.focus();
  }, []);

  const handleReset = () => {
    setValue("");
  };
  return (
    <div>
      <header className="app__header">
        <div className="app__header--wrapper">
          <SearchBox
            items={data.users}
            renderItem={({ id, name, address, pincode, items }) => {
              return (
                <>
                  <label>
                    <strong>{id}</strong>
                  </label>
                  <p className="render__name">{name}</p>
                  <address>
                    {address}, {pincode}, {items.join(", ")}
                  </address>
                </>
              );
            }}
            primaryKey={"id"}
            onChange={handleChange}
            value={value}
            ref={inputRef}
            onReady={handleReady}
            onSelect={handleSelect}
            placeholder="Search users by ID, address, name..."
            classList={["searchBox__input"]}
            noResultText="No User Found"
            reset={handleReset}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
