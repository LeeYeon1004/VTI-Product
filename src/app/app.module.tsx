import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './app-routing';
import { AppContext } from './app.context';
import LoaderComponent from './core/components/loading/loader.component';
import ToastComponent from './shared/components/toast/toast.component';
import { IToastData } from './models/app-context.model';

export default function App() {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<IToastData>({
    show: false,
    message: '',
    type: 'warning',
  });

  const onShowLoader = (value: boolean) => {
    setShowLoader(value);
  };

  const setToastData = (toastData: IToastData) => {
    setToastMessage(toastData);
  };

  const getToastData = () => {
    return toastMessage;
  };

  return (
    <AppContext.Provider
      value={{
        onShowLoader,
        setToastData,
        getToastData,
      }}
    >
      <BrowserRouter>
        <AppRouting />
        {showLoader && <LoaderComponent />}
        {toastMessage.show && <ToastComponent />}
      </BrowserRouter>
    </AppContext.Provider>
  );
}
