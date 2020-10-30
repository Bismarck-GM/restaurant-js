let mainColumns = document.createElement('div');
mainColumns.classList.add('columns');
let left = document.createElement('div');
left.classList.add('column', 'is-half', 'p-3');
let right = document.createElement('div');
right.classList.add('column', 'is-half', 'p-3');
let innerLeftColumns = document.createElement('div');
innerLeftColumns.classList.add('columns', 'is-centered');
let innerRightColumns = document.createElement('div');
innerRightColumns.classList.add('columns', 'is-centered');
let innerLeftColumn = document.createElement('div');
innerLeftColumn.classList.add('column', 'is-three-quarters', 'p-3');
let innerRightColumn = document.createElement('div');
innerRightColumn.classList.add('column', 'is-three-quarters', 'p-3');

export {mainColumns, left, right, innerLeftColumns, innerRightColumns, innerLeftColumn, innerRightColumn}