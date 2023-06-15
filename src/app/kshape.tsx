import { FC } from "react";

interface SvgProps {
  filled?: boolean;
  fill?: string;
  viewBox?: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  className?: string;
}

export const kShape: FC<SvgProps> = ({
  width = "160px",
  height = "161Px",
  fill = "currentColor",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      {...props}
      viewBox="0 0 160.39 161.81"
    >
      <path d="m33.66 88.67-.02 72.55c0 .28-.22.51-.5.51l-32.64.08c-.28 0-.5-.22-.5-.5V.52C0 .24.23.01.51.01h32.64c.28-.01.5.22.5.5l.07 73.03c0 .33.02.33.07 0 8.18-55.95 71.83-79.27 121-72.01 2.27.33 3.98.54 5.15.62.47.03.57.18.3.45-.12.12-.29.2-.52.23-24.66 3.07-48.09 14.07-64.47 33.04-16.89 19.57-22.82 46.09-13.79 70.31 10.87 29.15 38.88 48.27 68.46 54.45.73.15.73.27 0 .35-49.38 5.53-106.49-18.33-116.18-72.32-.05-.31-.08-.31-.08 0Z" />
    </svg>
  );
};
export default kShape;
