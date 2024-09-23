"use client";
import { cn } from "@/app/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-16",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-40",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-2",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-7",
    },
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-2",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-30",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-9",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-1",
    },
    {
      initialX: 150,
      translateX: 180,
      duration: 6,
      repeatDelay: 8,
      delay: 3,
      className: "h-20",
    },
    {
      initialX: 250,
      translateX: 230,
      duration: 5,
      repeatDelay: 6,
      delay: 1,
      className: "h-5",
    },
    {
      initialX: 350,
      translateX: 400,
      duration: 9,
      repeatDelay: 9,
      delay: 2,
      className: "h-25",
    },
    {
      initialX: 450,
      translateX: 470,
      duration: 4,
      repeatDelay: 3,
      className: "h-8",
    },
    {
      initialX: 550,
      translateX: 530,
      duration: 7,
      repeatDelay: 7,
      delay: 3,
      className: "h-12",
    },
    {
      initialX: 650,
      translateX: 600,
      duration: 8,
      repeatDelay: 5,
      className: "h-15",
    },
    {
      initialX: 150,
      translateX: 180,
      duration: 6,
      repeatDelay: 8,
      delay: 3,
      className: "h-20",
    },
    {
      initialX: 250,
      translateX: 230,
      duration: 5,
      repeatDelay: 6,
      delay: 1,
      className: "h-5",
    },
    {
      initialX: 350,
      translateX: 400,
      duration: 9,
      repeatDelay: 9,
      delay: 2,
      className: "h-25",
    },
    {
      initialX: 450,
      translateX: 470,
      duration: 4,
      repeatDelay: 3,
      className: "h-8",
    },
    {
      initialX: 550,
      translateX: 530,
      duration: 7,
      repeatDelay: 7,
      delay: 3,
      className: "h-12",
    },
    {
      initialX: 650,
      translateX: 600,
      duration: 8,
      repeatDelay: 5,
      className: "h-15",
    },
    {
      initialX: 1300,
      translateX: 1200,
      duration: 6,
      repeatDelay: 2,
      className: "h-10",
    },
    {
      initialX: 50,
      translateX: 70,
      duration: 5,
      repeatDelay: 3,
      className: "h-5",
    },
    {
      initialX: 1400,
      translateX: 1350,
      duration: 10,
      repeatDelay: 5,
      className: "h-18",
    },
    {
      initialX: 1250,
      translateX: 1300,
      duration: 12,
      repeatDelay: 9,
      delay: 1,
      className: "h-7",
    },
    {
      initialX: 1150,
      translateX: 1100,
      duration: 8,
      repeatDelay: 7,
      delay: 2,
      className: "h-14",
    },
    {
      initialX: 1050,
      translateX: 1000,
      duration: 9,
      repeatDelay: 4,
      className: "h-3",
    },
    {
      initialX: 50,
      translateX: 45,
      duration: 6,
      repeatDelay: 6,
      delay: 3,
      className: "h-9",
    },
    {
      initialX: 1500,
      translateX: 1400,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
      className: "h-30",
    },
    {
      initialX: 1600,
      translateX: 1550,
      duration: 10,
      repeatDelay: 5,
      className: "h-35",
    },
    {
      initialX: 1700,
      translateX: 1650,
      duration: 12,
      repeatDelay: 9,
      delay: 1,
      className: "h-4",
    },
    {
      initialX: 50,
      translateX: 100,
      duration: 8,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: 50,
      translateX: 200,
      duration: 9,
      repeatDelay: 5,
      className: "h-8",
    },
    {
      initialX: 1900,
      translateX: 1850,
      duration: 7,
      repeatDelay: 4,
      className: "h-10",
    },
    {
      initialX: 2000,
      translateX: 1950,
      duration: 6,
      repeatDelay: 8,
      className: "h-25",
    },
    {
      initialX: 2100,
      translateX: 2050,
      duration: 7,
      repeatDelay: 4,
      className: "h-12",
    },
    {
      initialX: 2200,
      translateX: 2150,
      duration: 9,
      repeatDelay: 6,
      className: "h-15",
    },
    {
      initialX: 2300,
      translateX: 2250,
      duration: 5,
      repeatDelay: 8,
      className: "h-6",
    },
    {
      initialX: 2400,
      translateX: 2350,
      duration: 11,
      repeatDelay: 7,
      delay: 3,
      className: "h-30",
    },
    {
      initialX: 2500,
      translateX: 2450,
      duration: 10,
      repeatDelay: 5,
      delay: 2,
      className: "h-8",
    },
    {
      initialX: 2600,
      translateX: 2550,
      duration: 6,
      repeatDelay: 4,
      className: "h-20",
    },
    {
      initialX: 2700,
      translateX: 2650,
      duration: 8,
      repeatDelay: 3,
      delay: 1,
      className: "h-25",
    },
    {
      initialX: 2800,
      translateX: 2750,
      duration: 7,
      repeatDelay: 2,
      className: "h-40",
    },
    {
      initialX: 2900,
      translateX: 2850,
      duration: 6,
      repeatDelay: 6,
      delay: 1,
      className: "h-18",
    },
    {
      initialX: 3000,
      translateX: 2950,
      duration: 9,
      repeatDelay: 4,
      className: "h-22",
    },
    {
      initialX: 3100,
      translateX: 3050,
      duration: 7,
      repeatDelay: 7,
      delay: 2,
      className: "h-12",
    },
    {
      initialX: 3200,
      translateX: 3150,
      duration: 11,
      repeatDelay: 6,
      className: "h-5",
    },
    {
      initialX: 3300,
      translateX: 3250,
      duration: 8,
      repeatDelay: 9,
      className: "h-9",
    },
    {
      initialX: 3400,
      translateX: 3350,
      duration: 6,
      repeatDelay: 3,
      delay: 4,
      className: "h-35",
    },
    {
      initialX: 3500,
      translateX: 3450,
      duration: 7,
      repeatDelay: 8,
      className: "h-14",
    },
    {
      initialX: 3600,
      translateX: 3550,
      duration: 5,
      repeatDelay: 5,
      className: "h-17",
    },
    {
      initialX: 3700,
      translateX: 3650,
      duration: 10,
      repeatDelay: 4,
      className: "h-30",
    },
    {
      initialX: 3800,
      translateX: 3750,
      duration: 9,
      repeatDelay: 6,
      delay: 3,
      className: "h-6",
    },
    {
      initialX: 3900,
      translateX: 3850,
      duration: 8,
      repeatDelay: 5,
      delay: 2,
      className: "h-8",
    },
    {
      initialX: 4000,
      translateX: 3950,
      duration: 6,
      repeatDelay: 7,
      className: "h-20",
    },
    {
      initialX: 4100,
      translateX: 4050,
      duration: 7,
      repeatDelay: 9,
      delay: 1,
      className: "h-15",
    },
    {
      initialX: 4200,
      translateX: 4150,
      duration: 11,
      repeatDelay: 8,
      className: "h-10",
    },
    {
      initialX: 4300,
      translateX: 4250,
      duration: 12,
      repeatDelay: 6,
      className: "h-12",
    },
    {
      initialX: 4400,
      translateX: 4350,
      duration: 5,
      repeatDelay: 4,
      className: "h-22",
    },
    {
      initialX: 4500,
      translateX: 4450,
      duration: 9,
      repeatDelay: 3,
      className: "h-7",
    },
    {
      initialX: 4600,
      translateX: 4550,
      duration: 8,
      repeatDelay: 6,
      className: "h-8",
    },
    {
      initialX: 4700,
      translateX: 4650,
      duration: 6,
      repeatDelay: 7,
      className: "h-30",
    },
    {
      initialX: 4800,
      translateX: 4750,
      duration: 7,
      repeatDelay: 9,
      className: "h-25",
    },
    {
      initialX: 4900,
      translateX: 4850,
      duration: 10,
      repeatDelay: 8,
      className: "h-12",
    },
    {
      initialX: 5000,
      translateX: 4950,
      duration: 5,
      repeatDelay: 5,
      className: "h-35",
    },
    {
      initialX: 5100,
      translateX: 5050,
      duration: 9,
      repeatDelay: 4,
      className: "h-14",
    },
    {
      initialX: 5200,
      translateX: 5150,
      duration: 8,
      repeatDelay: 3,
      className: "h-5",
    },
    {
      initialX: 5300,
      translateX: 5250,
      duration: 6,
      repeatDelay: 9,
      className: "h-7",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        " md:h-[49rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-950 relative flex items-center w-full justify-center overflow-hidden ",
        // h-screen if you want bigger
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 0.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};
