import React, { useRef, useEffect } from "react";

const MouseFollowCircle = () => {
  const canvasRef = useRef(null);
  let mouseX = null;
  let mouseY = null;

  const CIRCLE_RADIUS = 50;

  const invertColor = (r, g, b) => {
    return [255 - r, 255 - g, 255 - b];
  };

  const drawCircleWithInvertedColors = (ctx, x, y, radius) => {
    const imageData = ctx.getImageData(
      x - radius,
      y - radius,
      radius * 2,
      radius * 2
    );
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const [invR, invG, invB] = invertColor(r, g, b);

      data[i] = invR; 
      data[i + 1] = invG; 
      data[i + 2] = invB; 
    }

    ctx.putImageData(imageData, x - radius, y - radius);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  };

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "linear-gradient(to right, #ff7e5f, #feb47b)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (mouseX !== null && mouseY !== null) {
      drawCircleWithInvertedColors(ctx, mouseX, mouseY, CIRCLE_RADIUS);
    }

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", position: "absolute", top: 0, left: 0, zIndex: 1 }}
    />
  );
};

export default MouseFollowCircle;
