import { Motion } from "@motionone/solid";

export const Compass = () => {
  const draw = (progress) => ({
    // This property makes the line "draw" in when animated
    strokeDashoffset: 1 - progress,

    // Each line will be hidden until it starts drawing
    // to fix a bug in Safari where the line can be
    // partially visible even when progress is at 0
    visibility: "visible",
  });
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <Motion.circle
        cx="100"
        cy="100"
        r="80"
        pathLength="1"
        animate={draw(1)}
        transition={{ duration: 0.8, delay: 2 }}
      />
      <Motion.path
        d="M 54 107.5 L 88 138.5 L 144.5 67.5"
        pathLength="1"
        animate={draw(1)}
        transition={{ duration: 0.6, delay: 2.4 }}
      />
    </svg>
  );
};
