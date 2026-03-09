import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/React-Practice">
    <Provider store={store}>
      <ContextProvider>
          <App />
      </ContextProvider>   
    </Provider>
  </BrowserRouter>
)
