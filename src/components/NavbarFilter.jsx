import React from "react";

function NavbarFilter() {
  return (
    <>
      {location.pathname == "/" && (
        <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setData(items)} className="items">
            No Filter
          </div>
          <div onClick={() => filterByCategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterByCategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterByCategory("tablets")} className="items">
            Tablets
          </div>
          <div onClick={() => filterByPrice(29999)} className="items">
            {">="}29999
          </div>
          <div onClick={() => filterByPrice(49999)} className="items">
            {">="}49999
          </div>
          <div onClick={() => filterByPrice(69999)} className="items">
            {">="}69999
          </div>
          <div onClick={() => filterByPrice(89999)} className="items">
            {">="}89999
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarFilter;
