import { isArray, mergeWith } from 'lodash';

const bindColumns = extensions => columns => (
  columns.map(
    column => bindColumn({
      column,
      extensions
    })
  )
);

function bindColumn({
  column,
  extensions
}) {
  const matches = extensions.map(({ match, evaluate }) => {
    const col = {
      cell: {},
      header: {},
      ...column
    };

    return match(col) && evaluate(col);
  });

  return mergeWith({}, column, ...matches, (obj, src) => {
    if (isArray(obj)) {
      return obj.concat(src);
    }

    return undefined;
  });
}

export default bindColumns;
