import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, classname, label } = config;

  return (
    <button
      className={classname}
      data-testid={config.key}  // Add this so tests can find the button
      onClick={() => selectNextBackground(background)}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
