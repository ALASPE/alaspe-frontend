import Login from './components/login';
import { getSearchParams } from 'next/navigation'

export default function LoginPage(){
    const url_server = 1

    return (
        <main>
            <Login/>
        </main>
    );
}