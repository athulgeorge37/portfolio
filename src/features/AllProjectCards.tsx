// "use client";

// hooks
import React from "react";

// components
import ProjectCard from "~/features/ProjectCard";

// assets
import BreadditImg1 from "~/assets/images/Breaddit-Image-1.png";
import BreadditImg2 from "~/assets/images/Breaddit-Image-2.png";
import BreadditImg3 from "~/assets/images/Breaddit-Image-3.png";

import PathFindingVisualizerImg1 from "~/assets/images/PathFindingVisualizer-Image-1.png";
import PathFindingVisualizerImg2 from "~/assets/images/PathFindingVisualizer-Image-2.png";
import PathFindingVisualizerImg3 from "~/assets/images/PathFindingVisualizer-Image-3.png";

import MinecraftImg1 from "~/assets/images/Minecraft-Villiage-Generator-Image-1.png";
import MinecraftImg2 from "~/assets/images/Minecraft-Villiage-Generator-Image-2.png";
import MinecraftImg3 from "~/assets/images/Minecraft-Villiage-Generator-Image-3.png";

// all project card data

const BreadditData = [
    {
        id: 1,
        image: BreadditImg1,
        bulletPoints: [
            "MFA, JWT, Protected Routes, Encryption",
            "Rest API, Protected Endpoints",
            "CRUD Functionality, Filtering",
            "Image & Email handling",
        ],
    },
    {
        id: 2,
        image: BreadditImg2,
        bulletPoints: [
            "Create Threads",
            "Create, Edit, Delete Posts & Comments",
            "Up/Down Vote Posts & Comments",
            "Filter & Search Posts",
        ],
    },
    {
        id: 3,
        image: BreadditImg3,
        bulletPoints: [
            "Edit Profile Picture & Details",
            "Follow Users",
            "See User's Posts, Comments & Replies",
            "Admin Dashboard (Moderate Content)",
        ],
    },
];

const PathFindingVisualizerData = [
    {
        id: 1,
        image: PathFindingVisualizerImg1,
        bulletPoints: [
            "Animate Algorithms",
            "Draw Walls + Weights",
            "Clear Grid Cells",
            "Update Grid Size",
        ],
    },
    {
        id: 2,
        image: PathFindingVisualizerImg3,
        bulletPoints: [
            "A* Algorithm",
            "Dijkstra's Algorithm",
            "Breadth First Search",
            "Greedy Best First Search",
        ],
    },
    {
        id: 3,
        image: PathFindingVisualizerImg2,
        bulletPoints: [
            "Recursive Division",
            "Horizontal Skewed Recursive Division",
            "Vertical Skewed Recursive Division",
            "Scattered Walls + Weights",
        ],
    },
];

const MinecraftVillageGeneratorData = [
    {
        id: 1,
        image: MinecraftImg1,
        bulletPoints: [
            "Object oriented python",
            "Utilises mcpi api for minecraft commands",
            "Works on any minecraft terrain",
            "Group project",
        ],
    },
    {
        id: 2,
        image: MinecraftImg2,
        bulletPoints: [
            "Randomly generates buildings & gardens",
            "Utilises wave function collapse algorithm",
            "Ensures terrain is smoothed around buildings",
            "Ensures buildings dont overlap",
        ],
    },
    {
        id: 3,
        image: MinecraftImg3,
        bulletPoints: [
            "Generates paths with A* algorithm",
            "Paths avoid water & lava",
            "Generates lamps along path",
            "A* works in 3 dimensions",
        ],
    },
];

// interface AllProjectCardsProps {}

const AllProjectCards = () => {
    return (
        <div
            id="AllProjectCards"
            className="flex flex-col gap-32"
        >
            <ProjectCard
                data={BreadditData}
                title="Breaddit"
                cardNumber="01"
                description="Full Stack Reddit Clone"
                id="breaddit"
                technologies={[
                    "React",
                    "Node",
                    "MySQL",
                    "Sequelize",
                    "GraphQL",
                    "SASS",
                ]}
                codeLink="https://github.com/athulgeorge37/Breaddit"
                demoLink="https://breaddit-theta.vercel.app/"
                extraInformation={
                    <div className="flex flex-col justify-between items-center gap-2 sm:flex-row">
                        <span className="text-slate-600 dark:text-slate-400">
                            {"Don't want to create an account?"}
                        </span>
                        <a
                            href="https://breaddit-theta.vercel.app/signin"
                            target="_blank"
                            aria-label="breaddit guest sign in"
                            className="rounded-md px-1 py-0.5 font-semibold 
                                            text-slate-600 underline-offset-4 outline-none hover:text-blue-600 
                                            hover:underline focus-visible:text-blue-600 focus-visible:ring-2 
                                            focus-visible:ring-blue-600 dark:text-slate-400 dark:hover:text-blue-500 
                                            dark:focus-visible:text-blue-500 dark:focus-visible:ring-blue-500"
                            rel="noreferrer"
                        >
                            Sign In As Guest
                        </a>
                    </div>
                }
            />
            <ProjectCard
                data={PathFindingVisualizerData}
                cardNumber="02"
                description="Interactive tool for graph traversal & maze generation algorithms"
                title="Path Finding Visualizer"
                id="path-finding-visualizer"
                technologies={["React", "Javascript", "CSS"]}
                codeLink="https://github.com/athulgeorge37/Path_Finding_Visualizer"
                demoLink="https://athulgeorge37.github.io/Path_Finding_Visualizer/"
            />

            <ProjectCard
                data={MinecraftVillageGeneratorData}
                cardNumber="03"
                description="Procedurally Generates a Random Minecraft Villiage"
                title="Minecraft Village Generator"
                id="minecraft-village-generator"
                technologies={["Python", "mcpi"]}
                videoDemoLink="https://www.youtube.com/watch?v=Eu465Jue3ns"
            />
        </div>
    );
};

export default AllProjectCards;
