import { Component, createEffect, onCleanup, onMount } from 'solid-js';
import { Grid, GridOptions } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const VanillaGrid: Component = (gridProps: any) => {
  const {columnDefs, rowData, defaultColDef, gridOptions} = gridProps;

  const ghGridOptions: GridOptions = {
    columnDefs,
    defaultColDef,
    rowData: rowData,
    ...gridOptions
  };

  let egrid: Grid | null = null;

  onMount(() => {
    const eGridDiv = document.getElementById('ag-grid-placeholder');

    egrid = new Grid(eGridDiv!, ghGridOptions);
  });

  onCleanup(() => {
    egrid?.destroy();
  });

  return (
    <div style={{height: '100%', width: '50%'}}>
      Vanillajs
      <div id="ag-grid-placeholder" class="ag-theme-alpine" style={{height: '100%', width: '100%'}}>
      </div>
    </div>
  );

};

export default VanillaGrid;
