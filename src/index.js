// сделать клон современного Tweeter на antd

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Tweet = () => (
  <div className="tweet">
    <Avatar />
    <div className="content">
      <Author />
      <Time />
      <Message />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton />
        <LikeButton />
        <MoreOptionsButton />
      </div>
    </div>
  </div>
);

const Avatar = () => (
  <img
    src="https://www.gravatar.com/avatar/nothing"
    alt="avatar"
    className="avatar"
  />
);

const Author = () => (
  <span className="author">
    <span className="name">Dave Ceddia</span>
    <span className="handle">@dceddia</span>
  </span>
);

const Time = () => <span className="time">3h ago</span>;

const Message = () => <div className="message">Something great.</div>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Tweet />, rootElement);
