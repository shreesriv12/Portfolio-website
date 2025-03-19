import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from "gsap"
import {useGSAP} from "@gsap/react";

const Target = (props) => {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');
  const targetRef = useRef();
 useGSAP(()=>{
    gsap.to(targetRef.current.position, {
      duration: 1.5,
      y: targetRef.current.position.y + 0.5,
      yoyo: true,
      repeat: -1,
    });
 })
  return (
    <mesh {...props} ref={targetRef} rotation={[0,Math.PI/5,0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
