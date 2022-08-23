import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './app-routing';
import { AppContext } from './app.context';
import './app.style.scss';
import LoaderComponent from './core/components/loading/loader.component';

export default function App() {
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const onShowLoader = (value: boolean) => {
    setShowLoader(value);
  };

  return (
    <AppContext.Provider
      value={{
        onShowLoader,
      }}
    >
      <BrowserRouter>
        <AppRouting />
        {showLoader && <LoaderComponent />}
      </BrowserRouter>
    </AppContext.Provider>
  );
}
