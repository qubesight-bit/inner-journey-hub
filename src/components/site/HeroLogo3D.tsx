import { Suspense, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

type Vec2 = { x: number; y: number };

function LogoMark({
  reduceMotion,
  pointer,
}: {
  reduceMotion: boolean;
  pointer: RefObject<Vec2>;
}) {
  const group = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);

  const navy = useMemo(() => new THREE.Color("#1e2a44"), []);
  const slate = useMemo(() => new THREE.Color("#4a6d8c"), []);
  const mist = useMemo(() => new THREE.Color("#c5d4e0"), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (!group.current) return;

    const px = pointer.current?.x ?? 0;
    const py = pointer.current?.y ?? 0;
    const targetX = reduceMotion ? 0.18 : 0.22 + py * 0.35;
    const targetY = reduceMotion ? -0.35 : -0.4 + px * 0.45;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, delta);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta);

    if (!reduceMotion) {
      group.current.rotation.z = Math.sin(t * 0.22) * 0.06;
      if (ringA.current) ringA.current.rotation.x += delta * 0.35;
      if (ringB.current) ringB.current.rotation.y += delta * 0.28;
      if (core.current) {
        const s = 1 + Math.sin(t * 1.4) * 0.06;
        core.current.scale.setScalar(s);
      }
      if (halo.current) {
        halo.current.rotation.z -= delta * 0.2;
        const hs = 1 + Math.sin(t * 0.9) * 0.04;
        halo.current.scale.setScalar(hs);
      }
    }
  });

  return (
    <group ref={group} position={[0, 0.12, 0]} scale={1.15}>
      <mesh ref={ringA} rotation={[Math.PI / 2.15, 0.15, 0]}>
        <torusGeometry args={[1.15, 0.045, 32, 128]} />
        <meshStandardMaterial
          color={navy}
          metalness={0.55}
          roughness={0.28}
          envMapIntensity={0.9}
        />
      </mesh>

      <mesh ref={ringB} rotation={[Math.PI / 2.4, Math.PI / 2.05, 0.2]}>
        <torusGeometry args={[1.15, 0.045, 32, 128]} />
        <meshStandardMaterial
          color={slate}
          metalness={0.45}
          roughness={0.35}
          envMapIntensity={0.85}
          transparent
          opacity={0.92}
        />
      </mesh>

      <mesh ref={halo} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.42, 0.012, 16, 64]} />
        <meshStandardMaterial
          color={mist}
          metalness={0.2}
          roughness={0.4}
          transparent
          opacity={0.55}
        />
      </mesh>

      <mesh ref={core}>
        <sphereGeometry args={[0.16, 48, 48]} />
        <meshStandardMaterial
          color={mist}
          emissive={slate}
          emissiveIntensity={0.22}
          metalness={0.35}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[-0.55, 0, -0.05]} rotation={[0, 0.4, 0]}>
        <circleGeometry args={[0.95, 64]} />
        <meshStandardMaterial
          color={navy}
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0.55, 0, 0.05]} rotation={[0, -0.4, 0]}>
        <circleGeometry args={[0.95, 64]} />
        <meshStandardMaterial
          color={slate}
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Scene({
  reduceMotion,
  pointer,
}: {
  reduceMotion: boolean;
  pointer: RefObject<Vec2>;
}) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.15} color="#f7f4ee" />
      <directionalLight position={[-4, 2, -2]} intensity={0.45} color="#4a6d8c" />
      <pointLight position={[0, 0, 2.5]} intensity={0.35} color="#c5d4e0" />

      <Float
        speed={reduceMotion ? 0 : 1.2}
        rotationIntensity={reduceMotion ? 0 : 0.25}
        floatIntensity={reduceMotion ? 0 : 0.45}
      >
        <LogoMark reduceMotion={reduceMotion} pointer={pointer} />
      </Float>

      <ContactShadows
        position={[0, -1.45, 0]}
        opacity={0.28}
        scale={8}
        blur={2.6}
        far={4}
        color="#1e2a44"
      />
      <Environment preset="city" environmentIntensity={0.35} />
    </>
  );
}

function FallbackMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-[70%] w-[70%] animate-soft-float text-primary/70">
        <circle
          cx="78"
          cy="100"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.85"
        />
        <circle
          cx="122"
          cy="100"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.45"
        />
        <circle cx="100" cy="100" r="7" fill="#4a6d8c" />
        <circle
          cx="100"
          cy="100"
          r="18"
          fill="none"
          stroke="#4a6d8c"
          strokeWidth="1.5"
          opacity="0.35"
          className="animate-soft-pulse origin-center"
        />
      </svg>
    </div>
  );
}

export function HeroLogo3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const pointer = useRef<Vec2>({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!mounted || reduceMotion) return;
    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      pointer.current.x = THREE.MathUtils.clamp(x, -1, 1);
      pointer.current.y = THREE.MathUtils.clamp(y, -1, 1);
    };

    const onLeave = () => {
      pointer.current.x = 0;
      pointer.current.y = 0;
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [mounted, reduceMotion]);

  return (
    <div ref={wrapRef} className={cn("relative isolate", className)} aria-hidden="true">
      <div
        className="pointer-events-none absolute inset-[12%] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--cream) 80%, transparent), transparent 70%)",
        }}
      />
      {!mounted ? (
        <FallbackMark className="h-full w-full" />
      ) : (
        <Suspense fallback={<FallbackMark className="h-full w-full" />}>
          <Canvas
            className="h-full w-full touch-none"
            dpr={[1, 1.75]}
            camera={{ position: [0, 0.15, 4.2], fov: 38 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            style={{ background: "transparent" }}
          >
            <Scene reduceMotion={reduceMotion} pointer={pointer} />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
}
