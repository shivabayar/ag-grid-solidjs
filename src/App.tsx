import type { Component } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { columnDefs, rowData } from './colDef';
import VanillaGrid from './vanillaGrid';
const defaultColDef = {
  flex: 1,
  floatingFilter: true,
  minWidth: 150,
  resizable: true,
  sortable: true,
  useValueFormatterForExport: true
};

const App: Component = () => {
  return (
    <div id="wrapper">
      <div class="ag-theme-alpine" style={{ height: '100%', width: '50%' }}>
        Solidjs
        <AgGridSolid
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
        />
      </div>
      <VanillaGrid 
        defaultColDef={ defaultColDef }
        columnDefs={ columnDefs }
        rowData={ rowData }
      />
    </div>
  );
};

export default App;
