// hooks
import React from "react";

// components
import type { ProjectCardProps } from "~/features/ProjectCard";
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
import { FaceFrownIcon } from "@heroicons/react/24/solid";

const AllProjectData: ProjectCardProps[] = [
    {
        id: "breaddit",
        title: "Breaddit",
        cardNumber: "01",
        description: "Full Stack Reddit Clone",
        technologies: [
            "React",
            "Node",
            "MySQL",
            "Sequelize",
            "GraphQL",
            "SASS",
        ],
        codeLink: "https://github.com/athulgeorge37/Breaddit",
        data: [
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
        ],
        extraInformation: (
            <div className="flex items-center gap-2 ">
                <p>PlanetScale removed their free tier, so no more demo </p>
                <FaceFrownIcon className="h-6 w-6" />
            </div>
        ),
    },
    {
        id: "path-finding-visualizer",
        title: "Path Finding Visualizer",
        cardNumber: "02",
        description:
            "Interactive tool for graph traversal & maze generation algorithms",
        technologies: ["React", "Javascript", "CSS"],
        codeLink: "https://github.com/athulgeorge37/Path_Finding_Visualizer",
        demoLink: "https://athulgeorge37.github.io/Path_Finding_Visualizer/",
        data: [
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
        ],
    },
    {
        id: "minecraft-village-generator",
        title: "Minecraft Village Generator",
        cardNumber: "03",
        description: "Procedurally Generates a Random Minecraft Village",
        technologies: ["Python", "mcpi"],
        videoDemoLink: "https://www.youtube.com/watch?v=Eu465Jue3ns",
        data: [
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
        ],
    },
];

const AllProjectCards = () => {
    return (
        <div
            id="AllProjectCards"
            className="flex flex-col gap-32"
        >
            {AllProjectData.map((project) => (
                <ProjectCard
                    key={`project-${project.id}`}
                    id={project.id}
                    title={project.title}
                    cardNumber={project.cardNumber}
                    description={project.description}
                    technologies={project.technologies}
                    codeLink={project.codeLink}
                    demoLink={project.demoLink}
                    videoDemoLink={project.videoDemoLink}
                    extraInformation={project.extraInformation}
                    data={project.data}
                />
            ))}
        </div>
    );
};

export default AllProjectCards;
