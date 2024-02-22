import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import { router } from './utils/router/router';





ReactDOM.createRoot(document.getElementById('root')).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </LocalizationProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
)
