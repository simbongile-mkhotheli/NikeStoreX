import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/index.css'
import { Provider } from 'react-redux'
import Store, { persistor } from './app/Store' // include persistor
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-center" reverseOrder={false} />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
