import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Button from "../UIElements/Button";
import Card from "../UIElements/Card";

const Result = ({ userInfo }) => {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("quizStarted");
  }, []);

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      {userInfo && (
        <Card>
          <h1>Congratulations {userInfo.name}!!!</h1>
          <h3>You scored: {userInfo.score}</h3>
          <Button type="button" onClick={handleClick}>
            PLAY AGAIN
          </Button>
        </Card>
      )}
    </>
  );
};

export default Result;
