import { useRef } from "react";

export function HoldButton({
  onHold,
  children,
  style,
  ...rest
}: {
  onHold: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}) {
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    onHold(); // first immediate action
    intervalRef.current = window.setInterval(onHold, 150); // repeat
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <button
      onMouseDown={start}
      onMouseUp={stop}
      onMouseLeave={stop}
      onTouchStart={start}
      onTouchEnd={stop}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}
