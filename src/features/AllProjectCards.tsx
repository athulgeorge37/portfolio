// hooks
import React from "react";

// components
import type { ProjectCardProps } from "~/features/ProjectCard";
import ProjectCard from "~/features/ProjectCard";

// icons
import { FaceFrownIcon } from "@heroicons/react/24/solid";

// assets
import WyndhamHomeVetImg1 from "@public/images/wyndham-home-vet-homepage.jpg";
import WyndhamHomeVetImg2 from "@public/images/wyndham-home-vet-book-appointment-datetime.jpg";
import WyndhamHomeVetImg3 from "@public/images/wyndham-home-vet-book-admin-view.jpg";

import BreadditImg1 from "@public/images/Breaddit-Image-1.png";
import BreadditImg2 from "@public/images/Breaddit-Image-2.png";
import BreadditImg3 from "@public/images/Breaddit-Image-3.png";

import PathFindingVisualizerImg1 from "@public/images/PathFindingVisualizer-Image-1.png";
import PathFindingVisualizerImg2 from "@public/images/PathFindingVisualizer-Image-2.png";
import PathFindingVisualizerImg3 from "@public/images/PathFindingVisualizer-Image-3.png";

import MinecraftImg1 from "@public/images/Minecraft-Villiage-Generator-Image-1.png";
import MinecraftImg2 from "@public/images/Minecraft-Villiage-Generator-Image-2.png";
import MinecraftImg3 from "@public/images/Minecraft-Villiage-Generator-Image-3.png";

// NOTE: before adding new project images,
// optimize its file size using this tutorial:
// https://www.youtube.com/watch?v=LM8bXzHy1Kw

const AllProjectData: ProjectCardProps[] = [
    {
        id: "wyndham-home-vet",
        title: "Wyndham Home Vet",
        cardNumber: "01",
        description: "Pet appointment booking system & Admin dashboard",
        technologies: [
            "NextJS",
            "Typescript",
            "tRPC",
            "Tanstack Query",
            "OAuth",
            "Tailwind CSS",
            "Radix UI",
            "Drizzle ORM",
            "PostgresSQL",
        ],
        demoLink: "https://www.wyndhamhomevet.com.au/",
        data: [
            {
                id: 1,
                image: WyndhamHomeVetImg1,
                bulletPoints: [
                    "Built for a local business",
                    "Currently in production",
                    "Allows clients to book appointments",
                    "According to the owner's timetable",
                ],
            },
            {
                id: 2,
                image: WyndhamHomeVetImg2,
                bulletPoints: [
                    "View the weekly availability",
                    "Add required pet & client details",
                    "Instructions on next steps",
                    "Receive email confirmation",
                ],
            },
            {
                id: 4,
                image: WyndhamHomeVetImg3,
                bulletPoints: [
                    "Owner can login quickly with google OAuth",
                    "Set their weekly timetable",
                    "Add any availability exceptions",
                    "View booked appointment details",
                ],
            },
        ],
    },
    {
        id: "breaddit",
        title: "Breaddit",
        cardNumber: "02",
        description: "Fullstack Reddit inspired clone",
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
                <FaceFrownIcon className="h-6 w-6 fill-slate-500 dark:fill-slate-300" />
            </div>
        ),
    },
    {
        id: "path-finding-visualizer",
        title: "Path Finding Visualizer",
        cardNumber: "03",
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
        cardNumber: "04",
        description: "Procedurally generates a random Minecraft village",
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
                    data={project.data}
                    extraInformation={project.extraInformation}
                />
            ))}
        </div>
    );
};

export default AllProjectCards;
