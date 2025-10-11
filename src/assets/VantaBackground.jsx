import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three"; 
import FOG from "vanta/dist/vanta.fog.min"; 

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      const effect = FOG({
        el: myRef.current,
        THREE, 
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xe2f7e5,
        midtoneColor: 0x47cf47,
        lowlightColor: 0xcff7bb,
        baseColor:0xf0fcf7,
        blurFactor: 0.6,
        zoom: 1.0,
        speed: 2.5,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default VantaBackground;
