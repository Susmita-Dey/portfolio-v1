import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
// import music from "../assets/audio/u-said-it-v13-1167.mp3";

const Box = styled.div`
  diplay: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;
`;

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`;

const Line = styled.span`
  background: white;
  border: 1px solid red;
  animation:${play} 1s ease infinite;
  animation-play-state:${(props) => (props.click ? "running" : "paused")}
  height:1rem;
  width:2px;
  margin:0 0.1rem;
`;

function SoundBar() {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(click);
    if (click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <div className="play-sound" onClick={() => handleClick()}>
      {/* <div onClick={() => handleClick()}> */}
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio src={music} ref={ref} loop />
    </div>
  );
}

export default SoundBar;
