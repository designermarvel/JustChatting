import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css'
import LoginForm from './components/LoginForm'


const App = () =>{
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
        height ="100vh"
        projectID="a7a2210c-e068-42fc-b38e-6db26157fbd8"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    ) 
}


export default App;