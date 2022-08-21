import React from "react";
interface Props{
    width:string;
    height:string;
    className:string
}

const Circle:React.FC<Props> = ({width,height,className}) => {
  return (
    <svg height={height} width={width} viewBox="0 0 100 100" className={`${className}`}>
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke='currentColor'
        stroke-width="10"
        fill="transparent"
      />
    </svg>
  );
};

export default Circle;
