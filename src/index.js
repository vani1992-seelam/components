import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 6:00PM"
        content="Nice Blog Post"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 7:00PM"
        content="I like Writing!"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="James"
        timeAgo="Today at 8:00PM"
        content="I like blogigng!!"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
