var cvApp = angular.module("cvApp", []);

cvApp.controller("cvController", function ($scope) {
    $scope.cv = {
        name: "Maxim Nisenbaum",
        city: "Richmond Hill",
        province: "ON",
        country: "ca",
        phone: "+1-416-856-9515",
        email: "maxnis@gmail.com",
        summary: {
            title: "Software engineer with more than 10 years of experience in systems development.",
            description: "Technically sophisticated and highly accomplished .NET developer with a successful track record in systems analysis, design, and business process modelling. Skilled at providing specialized workflow solutions and technical support. Extensive experience of extending enterprise applications to support product profitability and customer retention. Passionate about producing reliable and maintainable code.",
            short: "Software Development / Front-End & Back-End Development / Web & Mobile Applications / Windows and Web Services / Unit tests / Windows Server / SQL Server / IIS"
        },
        techskills: [
            { title: "Languages", icon: "file code", text: "C, C++, C#, VB.NET, T-SQL, LINQ, JavaScript, PowerShell, TypeScript, Rust." },
            { title: "Dev Tools", icon: "wrench", text: "MS Visual Studio, VS-Code, JetBrains Rider, JMeter, Postman." },
            { title: "Frameworks", icon: "code", text: ".NET 2.0 - 4.8, WCF, Nancy Fx, EF, NServiceBus."},
            { title: "Web", icon: "globe", text: "ASP.NET, ASP.NET.MVC, Web API, HTML5, CSS, jQuery, jQueryMobile, Knockout JS, Angular, Bootstrap, Telerik KendoUI." },
            { title: "Source control", icon: "git", text: "TFS, Git, GitHub." },
            { title: "Tests", icon: "chart bar", text: "MS Test, xUnit, Moq, Jasmine" },
            { title: "Databases", icon: "database", text: "MS SQL Server, SQLite, MongoDB." },
            { title: "DevOps", icon: "server", text: "Jenkins, Sonar Qube, Azure DevOps, GitHub Actions."},
            { title: "Technology", icon: "cloud upload", text: "AWS, Azure." }
        ],
        employment: [
            {
                company: "Upstream Works Ltd.", address: "Vaughan, ON", country: "Canada", show: true,
                description: "Software solutions for contact centers",
                url: "https://www.upstreamworks.com",
                positions: [
                    { 
                        title: "Senior Software Developer", period: "2016 - present",
                        dolist: [
                            "Code development and maintenance.",
                            "Build, tests and deployment automation.",
                            "Load tests maintenance, execution and analysis."
                        ]
                    }
                ]
            },
            { 
                company: "Jonas Software", address: "Markham, ON", country: "Canada", show: true,
                description: "Jonas Software is a leading provider of enterprise software for Club Management and Construction and Service industries", 
                url: "http://www.jonasconstruction.com", 
                positions:
                [
                    { 
                        title: "Senior Software Developer", period: "2008 - 2016", 
                        dolist: [
                        "Led hybrid mobile HTML5 project using AngularJS and Kendo UI for the front-end and NancyFx to implement RESTful api as a back-end.", 
                        "Managed successful migration of web-hosted solutions to a new environment, ensuring that no data loss occurred in the process. Project involved both system and SQL Server version upgrade and required transferring of hundreds of websites and databases. Created automation tools to simplify the process of new releases and updates. Developed, automated and documented procedure of creating infrastructure for new customers including web sites and databases.",
                        "Headed development of multi-tier software containing cross-platform HTML5 mobile responsive web application having implemented offline functionality using websqldb and application cache.",
                        "Designed multi-tenant architecture for data-driven hosted web products, which reduced maintenance costs.",
                        "Initiated and completed an internal web based admin dashboard tool used by professional services and technical support. The tool provided features to register and configure customers in the hosting environment, test their working modules remotely replacing previous manual procedures thus reducing support time and simplifying problem identification.",
                        "Collaborated with teams to improve performance of various systems including websites, web services, windows services, and desktop applications."
                    ]}
                ] 
            },
            {
                company: "BSM Wireless", address: "Woodbridge, ON", country: "Canada", show: true,
                description: "BSM Wireless Inc. designs, manufactures and markets a comprehensive line of Automatic Vehicle Security and Location solutions", 
                url: "http://www.bsmwireless.com", 
                positions: 
                [
                    { 
                        title: "Software Developer", period: "2006 - 2008", 
                        dolist: [
                            "Maintained in-house device diagnostics and provisioning software tools.",
                            "Developed modules and features for the customer's web portal solution.",
                            "Accomplished various SQL Server development projects as well as development and maintenance of different modules for real-time fleet management web portal."
                    ]}
                ]
            },
            {
                company: "Emka Group Inc.", address: "Ad Halom Ind. zone", country: "Israel", show: true,
                description: "Emka Group is a direct mail provider and manufacturer of printing paper, envelopes, magnetic cards, etc.",
                url: "http://www.emka.co.il/en",
                positions:
                [
                    {
                        title: "Software Engineer", period: "1997 - 2005",
                        dolist: [
                            "Developed numerous data processing projects like merging, sorting, translation and more according to requirements which saved mailing costs and often helped the company to win a tender.",
                            "Built modules for creating Postscript files of variable data for digital printer using Printsoft. Wrote printer side scripts to combine master graphics and data files which minimized significantly RIP time and size of created files.",
                            "Designed and implemented indexing system which replaced existing sorting routine of large data files and saved processing time on x386 computers from hours to minutes allowing to complete and submit projects in time."
                        ]
                    }
                ]
            }
        ],
        education: {
            univ: [
                { title: "M. Eng. in Electrical Engineering", country: "Russia", period: "1982 - 1987", description: "Perm State Technical University, Perm", url: "https://pstu.ru/en/" },
                { title: "Software Engineering", country: "Israel", period: "1997", description: "Tel-Aviv University", url: "https://english.tau.ac.il/" }
            ],
            courses: [
                { title: "MongoDB for .NET", period: "2018", description: "MongoDB University", url: "https://university.mongodb.com/" },
                { title: "Advanced T-SQL for SQL Server 08/12", period: "2014", description: "SolidQ", url: "https://www.solidq.com/us/" },
                { title: "Intro to ASP.NET MVC", period: "2011", description: "Learning Tree, Toronto", url: "https://www.learningtree.ca/" }
            ],
            cert: [
                { title: "MCAD", period: "2022/01/27", description: "Microsoft Certified: Azure Developer Associate", url: "https://www.credly.com/badges/a6ed597f-ecbb-4e59-82b8-cdd2878f2d44"},
                { title: "MCSD", period: "2020/12", description: "Microsoft Certified Solutions Developer: App Builder", url: "#" },
                { title: "MCSA", period: "2020/03", description: "Microsoft Certified Solutions Associate: Web Applications", url: "#" },
                { title: "MCTS", period: "2011/03", description: "Windows Mobile 6.5, Application Development", url: "#" }
            ]
        },
        hobbies: [
            { description: "Tennis" },
            { description: "Piano" },
            { description: "Ping-pong" },
            { description: "Chess" }
        ]
    };

});
