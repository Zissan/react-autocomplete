import { useEffect, useState } from "react";

export function useFilter(items, keyword) {
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    setFilteredItems(
      keyword
        ? items.filter((item) => {
            return (
              Object.values(item)
                .join(" ")
                .toLowerCase()
                .indexOf(keyword.toLowerCase()) > -1
            );
          })
        : []
    );
  }, [items, keyword]);

  return filteredItems;
}
