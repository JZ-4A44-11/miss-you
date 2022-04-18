import { createRoot } from 'react-dom/client'
import App from './view/app'

const documentFragment = document.getElementById('root')
if (documentFragment == null) throw new Error('Failed to find the root element')

const root = createRoot(documentFragment)
root.render(<App />)
