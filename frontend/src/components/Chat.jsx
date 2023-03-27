import React from 'react';
// import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";
import { PrettyChatWindow } from 'react-chat-engine-pretty';

export function Chat(props) {
    // const chatProps = useMultiChatLogic('45c6404a-47de-449e-9110-eac12844daff', props.username, props.username)
    return (
        // <div style={{ height: '100vh' }}>
        //     <MultiChatSocket {...chatProps} />
        //     <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        // </div>
        <div style={{height: '100vh', width: '100vw'}}>
            <PrettyChatWindow
                projectId="45c6404a-47de-449e-9110-eac12844daff"
                username={props.username}
                secret={props.username}
                style={{ height: '100vh' }}
            />
        </div>
    );
}