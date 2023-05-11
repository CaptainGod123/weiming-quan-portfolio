// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

// const ParticlesComonent = () => {
//     const options = useMemo(() => {
//         return {
//             particles: {
//                 color: {
//                     value: "#000000",
//                 },
//                 links: {
//                     enable: true, // make particles link together
//                 },
//                 move: {
//                     enable: true, // make the particles move
//                     speed: { min: 1, max: 10}, // randomize particle speed from 1 to 10
//                 },
//                 opacity: {
//                     value: { min: 0.3, max: 1}, // looks cooler
//                 },
//                 size: {
//                     value: { min: 1, max: 10}, // randomize particle size from 1 to 10
//                 },
//             }
//         };
//     }, []);

//     const particlesInit = useCallback((engine) => {
//         loadSlim(engine);
//     }, []);
    
//     return <Particles init = {particlesInit} options = {options} />;
// };

// export default ParticlesComonent;






import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesComonent = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#0D47A1",
                    },
                    links: {
                        color: "#C7D2C5",
                        enable: true,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: { min: 1, max: 2 },
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: {min: 0.1, max: 0.6},
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesComonent;