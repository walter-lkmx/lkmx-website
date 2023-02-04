export default function getProjectsIndexed(locale) {
    const projectsEs = [
        {
            title: ["spectrum wine"],
            services: ["Discovery", "Agile Development"],
            route: "/work/spectrum-wine",
            thumbnail: "spectrum-thumbnail"
        
        },
        {
            title: ["E-commerce y análisis", "de datos para Will Smith"],
            services: ["Discovery", "Agile Development"],
            route: "/work/e-commerce-ws",
            thumbnail: "ws-thumbnail"
        
        },
        {
            title: ["Administrador de", "casos legales"],
            services: ["Discovery", "Agile Development"],
            route: "/work/legal-case-manager",
            thumbnail: "legal-thumbnail"
        
        },
        {
            title: ["CRM de bienes Raíces"],
            services: ["Discovery", "Agile Development"],
            route: "/work/real-state-crm",
            thumbnail: "avittat-thumbnail"
        
        },
        {
            title: ["Campamento y parque", "acuático"],
            services: ["Discovery", "Agile Development"],
            route: "/work/water-park",
            thumbnail: "canadas-thumbnail"
        
        }
    ];
    const projectsEn = [
        {
            title: ["spectrum wine"],
            services: ["Discovery", "Agile Development"],
            route: "/work/spectrum-wine",
            thumbnail: "spectrum-thumbnail"
        
        },
        {
            title: ["E-commerce and data", "analysis for will smith"],
            services: ["Discovery", "Agile Development"],
            route: "/work/e-commerce-ws",
            thumbnail: "ws-thumbnail"
        
        },
        {
            title: ["Legal case manager"],
            services: ["Discovery", "Agile Development"],
            route: "/work/legal-case-manager",
            thumbnail: "legal-thumbnail"
        
        },
        {
            title: ["Real state CRM"],
            services: ["Discovery", "Agile Development"],
            route: "/work/real-state-crm",
            thumbnail: "avittat-thumbnail"
        
        },
        {
            title: ["Campsite and water", "park"],
            services: ["Discovery", "Agile Development"],
            route: "/work/water-park",
            thumbnail: "canadas-thumbnail"
        
        }
    ];
    if(locale == "es")
        return projectsEs;
    else
        return projectsEn;
}