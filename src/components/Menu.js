import React, { useState } from "react";

const Menu = () => {
  const [showMore, setShowMore] = useState(false);
  const MoreAddons = () => (
    <div id='results' className='search-results'>
      <div>la</div>
    </div>
  );

  function handleClick() {
    setShowMore({ showMore: !showMore });
  }

  return (
    <>
      {showMore ? <MoreAddons /> : null}
      <button
        style={{ lineHeight: "4" }}
        onClick={() => setShowMore(!showMore)}>
        button
      </button>
    </>
  );
};

export default Menu;
