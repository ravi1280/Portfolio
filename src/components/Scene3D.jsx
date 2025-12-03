import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars, Text, Icosahedron, Octahedron } from '@react-three/drei';

const CodeSymbol = ({ text, position, color, fontSize = 1 }) => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Text
                position={position}
                color={color}
                fontSize={fontSize}
                font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnF8RD8yKxTOlOV.woff"
                anchorX="center"
                anchorY="middle"
            >
                {text}
            </Text>
        </Float>
    );
};

const WireframeShape = ({ position, color, scale = 1, geometry = 'icosahedron' }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.1;
        meshRef.current.rotation.y = t * 0.15;
    });

    return (
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                {geometry === 'icosahedron' ? (
                    <icosahedronGeometry args={[1, 0]} />
                ) : (
                    <octahedronGeometry args={[1, 0]} />
                )}
                <meshBasicMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
};

const Scene3D = () => {
    return (
        <div className="scene-container">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                {/* Wireframe Shapes */}
                <WireframeShape
                    position={[-5, 2, -5]}
                    color="#00f0ff"
                    scale={2}
                    geometry="icosahedron"
                />
                <WireframeShape
                    position={[6, -3, -6]}
                    color="#7000ff"
                    scale={2.5}
                    geometry="octahedron"
                />
                <WireframeShape
                    position={[0, 4, -8]}
                    color="#333333"
                    scale={1.5}
                    geometry="icosahedron"
                />

                {/* Floating Code Symbols */}
                <CodeSymbol text="< />" position={[-3, -2, -2]} color="#00f0ff" fontSize={0.8} />
                <CodeSymbol text="{ }" position={[3, 2, -3]} color="#7000ff" fontSize={0.8} />
                <CodeSymbol text="const" position={[-6, 3, -8]} color="#a0a0a0" fontSize={0.6} />
                <CodeSymbol text="npm" position={[5, 0, -10]} color="#a0a0a0" fontSize={0.6} />
                <CodeSymbol text=";" position={[0, -4, -4]} color="#00f0ff" fontSize={1} />
                <CodeSymbol text="git" position={[-2, 4, -6]} color="#7000ff" fontSize={0.6} />
            </Canvas>
            <style>{`
        .scene-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.4;
          pointer-events: none;
        }
      `}</style>
        </div>
    );
};

export default Scene3D;
