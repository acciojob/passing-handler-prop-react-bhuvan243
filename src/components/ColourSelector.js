import React from "react";

const ColourSelector = (props) => {
  const { key, config, selectNextBackground } = props;
  const { label, classname, background } = config;

  function fixBackground() {
    selectNextBackground({ ...config, background: background });
    // console.log(config);
  }

  return (
    <button className={classname} onClick={fixBackground} data-testid={key} >
      {label}
    </button>
  );
};
export default ColourSelector;
