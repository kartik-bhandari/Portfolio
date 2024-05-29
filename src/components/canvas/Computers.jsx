import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { e } from "maath/dist/triangle-b62b9067.esm";

// const isMobile = () => {
//   const isMobile = useMediaQuery({ max-width: 500 })
//   return isMobile ? true : false
// }
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const isMobile = window.matchMedia("(max-width: 500px)").matches;
  return (
    <mesh >
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.75}
        position={isMobile ? [0, -3, -0.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   // Add a listener for changes to the screen size
  //   const mediaQuery = window.matchMedia("(min-width: 500px)").matches;

  //   // Set the initial value of the `isMobile` state variable
  //   setIsMobile(mediaQuery);

  //   // Define a callback function to handle changes to the media query
  //   // const handleMediaQueryChange = (event) => {
  //   //   setIsMobile(event.matches);
  //   // };
   
  //   // Add the callback function as a listener for changes to the media query
  //   // mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   // Remove the listener when the component is unmounted
  //   return () => {
  //     if(isMobile==true){
  //       console.log('is mobile')
  //     }
  //     else{
  //       console.log("not mobile")
  //     }
  
  //     // mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);
  return(
  <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;