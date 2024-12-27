import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />//이렇게 쓰면 App의 모든 컴포넌트를 가져온다
)
