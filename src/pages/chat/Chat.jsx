import React, { Component } from 'react';
import '../../css/chat.css';

export default class Chat extends Component {
    render() {
        return (
            <div>
                <div>
                    Login in as: <strong>abc</strong>
                </div>
                <div className="chat_window">
                    <div className="top_menu">
                        <div className="buttons">
                            <div className="button close" />
                            <div className="button minimize" />
                            <div className="button maximize" />
                        </div>
                        <div className="title">Chat</div>
                    </div>
                    <ul className="messages">
                        <li className="message right appeared">
                            <div className="avatar"></div>
                            <div className="text_wrapper">
                                <div className="text">chào cậu</div>
                            </div>
                        </li>
                    </ul>
                    <div className="bottom_wrapper clearfix">
                        <form >
                            <div>
                            <input className="message_input_wrapper" placeholder="Type your message here..."
                                    ></input>
                                <div className="send_message">
                                    <button className="btn--send" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="message_template">
                    <li className="message">
                        <div className="avatar" />
                        <div className="text_wrapper">
                            <div className="text" />
                        </div>
                    </li>
                </div>
            </div>
        )
    }
}
