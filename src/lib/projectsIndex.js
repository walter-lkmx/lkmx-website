export default function getProjectsIndexed(locale) {
    const projectsEs = [
        {
            title: ['Subastas de vinos', 'en tus manos'],
            services: ["Discovery", "Agile Development"],
            route: "/work/spectrum-wine",
            thumbnail: "spectrum-thumbnail",
            catchphrase: "Experimenta el mundo de la subastas de vino, en todo lugar."
        
        },
        {
            title: ["E-commerce y análisis", "de datos para Will Smith"],
            services: ["Discovery", "Agile Development"],
            route: "/work/e-commerce-ws",
            thumbnail: "ws-thumbnail",
            catchphrase: "El Príncipe de Bel-Air toma el mundo del comercio electrónico por asalto."
        
        },
        {
            title: ["Administrador de", "casos legales"],
            services: ["Discovery", "Agile Development"],
            route: "/work/legal-case-manager",
            thumbnail: "legal-thumbnail",
            catchphrase: "Unificando operaciones legales y de salud a través de una mejor conectividad."
        
        },
        {
            title: ["CRM de bienes Raíces"],
            services: ["Discovery", "Agile Development"],
            route: "/work/real-state-crm",
            thumbnail: "avittat-thumbnail",
            catchphrase: "Mejorando operaciones de venta de bienes raíces con un CRM a medida."
        
        },
        {
            title: ["Campamento y parque", "acuático"],
            services: ["Discovery", "Agile Development"],
            route: "/work/water-park",
            thumbnail: "canadas-thumbnail",
            catchphrase: "Descubre la mejor experiencia en parques acuáticos con una gestión optimizada"
        
        },
        {
            title: ["Nueva experiencia de", "privacidad en blockchain"],
            services: ["Discovery", "Agile Development", "Agile Maintenance"],
            route: "/work/secret-network",
            thumbnail: "secret-thumbnail",
            catchphrase: "Asegura tu privacidad con Secret Network: rediseño de sitio web con tecnología Jamstack y el debut de nuestro sistema de diseño Flare."
        
        },
        {
            title: ["Plataforma innovadora para", "la producción de prendas únicas"],
            services: ["Discovery", "Agile Development", "Agile Maintenance"],
            route: "/work/skyou",
            thumbnail: "skyou-thumbnail",
            catchphrase: "La libertad de elegir, la facilidad de imprimir, moda personalizada al alcance de tus manos."
        
        },
        {
            title: ["NFT Marketplace"],
            services: ["Discovery", "Agile Development"],
            route: "/work/emprops",
            thumbnail: "emprops-thumbnail",
            catchphrase: "Explora el futuro del arte generativo e inteligencia artificial con EMPROPS."
        
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
            catchphrase: "Experience the world of wine auctions, anytime, anywhere."
        
        },
        {
            title: ["E-commerce and data", "analysis for will smith"],
            services: ["Discovery", "Agile Development"],
            route: "/work/e-commerce-ws",
            thumbnail: "ws-thumbnail",
            catchphrase: "The Fresh Prince of Bel-Air takes the e-commerce world by storm"
        
        },
        {
            title: ["Legal case manager"],
            services: ["Discovery", "Agile Development"],
            route: "/work/legal-case-manager",
            thumbnail: "legal-thumbnail",
            catchphrase: "Unifying legal and healthcare operations through improved connectivity"
        
        },
        {
            title: ["Real state CRM"],
            services: ["Discovery", "Agile Development"],
            route: "/work/real-state-crm",
            thumbnail: "avittat-thumbnail",
            catchphrase: "Enhancing real estate sales operations with a tailored CRM"
        
        },
        {
            title: ["Campsite and water", "park"],
            services: ["Discovery", "Agile Development"],
            route: "/work/water-park",
            thumbnail: "canadas-thumbnail",
            catchphrase: "Discover the ultimate water park experience with streamlined management"
        
        },
        {
            title: ["New experience of", "blockchain privacy"],
            services: ["Discovery", "Agile Development", "Agile Maintenance"],
            route: "/work/secret-network",
            thumbnail: "secret-thumbnail",
            catchphrase: "Secure your privacy with Secret Network: website redesign powered by Jamstack and the debut of our Flare design system."
        
        },
        {
            title: ["innovative platform for", "the production of unique garments"],
            services: ["Discovery", "Agile Development", "Agile Maintenance"],
            route: "/work/skyou",
            thumbnail: "skyou-thumbnail",
            catchphrase: "The freedom to choose, the ease of printing, personalized fashion at your fingertips."
        
        },
        {
            title: ["NFT Marketplace"],
            services: ["Discovery", "Agile Development"],
            route: "/work/emprops",
            thumbnail: "emprops-thumbnail",
            catchphrase: "Explore the future of generative art and artificial intelligence with EMPROPS."
        
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