import "./ratingBars.scss";

interface ILinearProgressBar {
  percent: number;
  fontSize?: number;
  animateTiming?: number;
  starNumber?: number;
}

export const LinearProgressBar: React.FC<ILinearProgressBar> = (props) => {
  return (
    <div className={"mainProgressBarDiv"}>
      <span className={"starNumber"} style={{ fontSize: props.fontSize || 15 }}>
        {props.starNumber} {`${props.starNumber === 1 ? "star" : "stars"}`}
      </span>
      <div className={"emptyProgressBar"} style={{ width: "60%" }}>
        <div
          className={"fillingProgressBar"}
          style={{
            left: props.percent - 100 + "%",
            transition: "3s",
          }}
        />
      </div>
      <span className={"percentage"} style={{ fontSize: props.fontSize || 15 }}>
        {props.percent} %
      </span>
    </div>
  );
};
