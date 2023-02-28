export default function getProjectsIndexed(locale) {
    const projectsEs = [
        {
            title: ['Subastas de vinos', 'en tus manos'],
            services: ["Discovery", "Agile Development"],
            route: "/work/spectrum-wine",
            thumbnail: "spectrum-thumbnail",
            catchphrase: "sss"
        
        },
        {
            title: ["E-commerce y análisis", "de datos para Will Smith"],
            services: ["Discovery", "Agile Development"],
            route: "/work/e-commerce-ws",
            thumbnail: "ws-thumbnail",
            catchphrase: "sss"
        
        },
        {
            title: ["Administrador de", "casos legales"],
            services: ["Discovery", "Agile Development"],
            route: "/work/legal-case-manager",
            thumbnail: "legal-thumbnail",
            catchphrase: "sss"
        
        },
        {
            title: ["CRM de bienes Raíces"],
            services: ["Discovery", "Agile Development"],
            route: "/work/real-state-crm",
            thumbnail: "avittat-thumbnail",
            catchphrase: "sss"
        
        },
        {
            title: ["Campamento y parque", "acuático"],
            services: ["Discovery", "Agile Development"],
            route: "/work/water-park",
            thumbnail: "canadas-thumbnail",
            catchphrase: "sss"
        
        },
        {
            title: ["Nueva experiencia de", "privacidad en blockchain"],
            services: ["Discovery", "Agile Development", "Agile Maintenance"],
            route: "/work/secret-network",
            thumbnail: "secret-thumbnail",
            catchphrase: "sss"
        
        },
        {
            title: ["Plataforma innovadora para", "la producción de prendas únicas"],
            services: ["Discovery", "Agile Development", "Agile Maintenance"],
            route: "/work/skyou",
            thumbnail: "skyou-thumbnail",
            catchphrase: "sss"
        
        },
        {
            title: ["NFT Marketplace"],
            services: ["Discovery", "Agile Development"],
            route: "/work/emprops",
            thumbnail: "emprops-thumbnail",
            catchphrase: "sss"
        
        }//,
        // {
        //     title: ["Sistema nacional de hospitales"],
        //     services: ["Discovery", "Agile Development", "Agile Maintenance"],
        //     route: "/work/national-hospital-system",
        //     thumbnail: "hospitals-thumbnail"
        
        // },
        // {
        //     title: ["Sistema de análisis de", "datos para farmacéuticas"],
        //     services: ["Discovery", "Agile Development", "Agile Maintenance"],
        //     route: "/work/pharma-analytics",
        //     thumbnail: "pharma-thumbnail"
        
        // }
    ];
    const projectsEn = [
        {
            title: ["Wine auctions at", "your fingertips"],
            services: ["Discovery", "Agile Development"],
            route: "/work/spectrum-wine",
            thumbnail: "spectrum-thumbnail",
            catchphrase: ""
        
        },
        {
            title: ["E-commerce and data", "analysis for will smith"],
            services: ["Discovery", "Agile Development"],
            route: "/work/e-commerce-ws",
            thumbnail: "ws-thumbnail",
            catchphrase: ""
        
        },
        {
            title: ["Legal case manager"],
            services: ["Discovery", "Agile Development"],
            route: "/work/legal-case-manager",
            thumbnail: "legal-thumbnail",
            catchphrase: ""
        
        },
        {
            title: ["Real state CRM"],
            services: ["Discovery", "Agile Development"],
            route: "/work/real-state-crm",
            thumbnail: "avittat-thumbnail",
            catchphrase: ""
        
        },
        {
            title: ["Campsite and water", "park"],
            services: ["Discovery", "Agile Development"],
            route: "/work/water-park",
            thumbnail: "canadas-thumbnail",
            catchphrase: ""
        
        },
        {
            title: ["New experience of", "blockchain privacy"],
            services: ["Discovery", "Agile Development", "Agile Maintenance"],
            route: "/work/secret-network",
            thumbnail: "secret-thumbnail",
            catchphrase: ""
        
        },
        {
            title: ["innovative platform for", "the production of unique garments"],
            services: ["Discovery", "Agile Development", "Agile Maintenance"],
            route: "/work/skyou",
            thumbnail: "skyou-thumbnail",
            catchphrase: ""
        
        },
        {
            title: ["NFT Marketplace"],
            services: ["Discovery", "Agile Development"],
            route: "/work/emprops",
            thumbnail: "emprops-thumbnail",
            catchphrase: "sss"
        
        }//,
        // {
        //     title: ["National hospital system"],
        //     services: ["Discovery", "Agile Development", "Agile Maintenance"],
        //     route: "/work/national-hospital-system",
        //     thumbnail: "hospitals-thumbnail"
        
        // },
        // {
        //     title: ["Data Analysis System for", "Pharmaceuticals"],
        //     services: ["Discovery", "Agile Development", "Agile Maintenance"],
        //     route: "/work/pharma-analytics",
        //     thumbnail: "pharma-thumbnail"
        
        // }
    ];
    if(locale == "es")
        return projectsEs;
    else
        return projectsEn;
}