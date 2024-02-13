import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { label, classname, background } = config;

  function fixBackground() {
    selectNextBackground({ ...config, background: background });
    // console.log(config);
  }

  return (
    <button className={classname} onClick={fixBackground}>
      {label}
    </button>
  );
};
export default ColourSelector;
