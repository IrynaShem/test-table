import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import InfiniteTable from './InfiniteTable';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
      <InfiniteTable/>
  </React.StrictMode>
);