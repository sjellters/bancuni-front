import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from 'routes';

function App() {
  return <React.Fragment>{renderRoutes(routes)}</React.Fragment>;
}

export default App;
