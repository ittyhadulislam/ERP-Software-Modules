import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import { store } from './redux/store';
import { router } from './utils/router/router';




ReactDOM.createRoot(document.getElementById('root')).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DataProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </DataProvider>
  </LocalizationProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
)
