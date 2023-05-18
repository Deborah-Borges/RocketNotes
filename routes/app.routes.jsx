import { Routes, Route } from 'react-router-dom'
import { New } from '../src/pages/New'
import { Home } from '../src/pages/Home'
import { Details } from '../src/pages/Details'
import { Profile } from '../src/pages/Profile'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/details/:id" element={<Details />}/>
        </Routes>
    )
}