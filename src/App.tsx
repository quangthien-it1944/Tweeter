import React, { PureComponent } from 'react';
import AddMessageContainer from './components/Form';
import MessageContainer from "./components/Messages";
import "./App.scss";

class App extends PureComponent {

  UNSAFE_componentWillMount() {
    const font = document.createElement("link");
    font.href = "https://fonts.googleapis.com/css?family=Roboto:300,400,500";
    font.rel = "stylesheet";
    font.id = "font-roboto";

    document.getElementsByTagName('head')[0].appendChild(font);
  }

  componentWillUnmount() {
    const font: any = document.getElementById("font-roboto");
    font.parentNode.removeChild(font);
  }

  render() {
    return (
      <div className="page">
        <ul>
          <li>1. Có thể thêm sửa xóa tin nhắn</li>
          <li>2. Lỗi có thể xảy ra, cái này là random để xem trường hợp</li>
        </ul>
        <div id="message-container">
          <MessageContainer />
          <AddMessageContainer />
        </div>
      </div>
    );
  }
}

export default App;
