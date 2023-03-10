import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { socket } from "../socket/socket";
import { Button, ButtonSpan, Text } from "../styled";
export const HomePage = () => {
  const navigate = useNavigate();
  const navigateCreate = () => {
    navigate("/create");
  };
  const navigateJoin = () => {
    navigate("/join");
  };
  useEffect(() => {
    socket.emit("delete-player", localStorage.getItem("id"));
    localStorage.clear();
  }, []);
  return (
    <HomeWrapper>
      <Video loop autoPlay muted>
        <source src="home.mp4" type="video/mp4" />
      </Video>
      <Text>
        <Name>MoviEmoji</Name>
        <Button onClick={navigateCreate}>
          <ButtonSpan></ButtonSpan>
          <ButtonSpan></ButtonSpan>
          <ButtonSpan></ButtonSpan>
          <ButtonSpan></ButtonSpan>Create
        </Button>
        <Button onClick={navigateJoin}>
          <ButtonSpan></ButtonSpan>
          <ButtonSpan></ButtonSpan>
          <ButtonSpan></ButtonSpan>
          <ButtonSpan></ButtonSpan>Join
        </Button>
      </Text>
    </HomeWrapper>
  );
};
const Name = styled.h1`
  text-align: center;
`;
const Video = styled.video`
  opacity: 0.4;
  position: relative;
  z-index: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const HomeWrapper = styled.div`
  display: flex;
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
`;
