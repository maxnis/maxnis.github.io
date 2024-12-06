var cvApp = angular.module("cvApp", []);

cvApp.controller("cvController", function ($scope) {
    $scope.cv = {
        name: "Maxim Nisenbaum",
        city: "Richmond Hill",
        province: "ON",
        country: "ca",
        email: "maxnis@gmail.com",
        summary: {
            title: "Software engineer with more than 10 years of experience in systems development.",
            description: "Technically sophisticated and highly accomplished software engineer with a successful track record in systems analysis, design, and business process modelling. Skilled at providing specialized workflow solutions and technical support. Extensive experience of extending enterprise applications to support product profitability and customer retention. Passionate about producing reliable and maintainable code.",
            short: "Software & Web Development / Front-End & Back-End / Microservices / Unit testing / Databases"
        },
        techskills: [
            { title: "Languages", icon: "file code", text: "C, C++, C#, VB.NET, Python, SQL, TypeScript, JavaScript, PowerShell, Groovy." },
            { title: "Dev Tools", icon: "wrench", text: "MS Visual Studio, VS-Code, JetBrains Rider, PyCharm, Postman." },
            { title: "Frameworks", icon: "code", text: ".NET Core, .NET, WCF, Nancy Fx, EF."},
            { title: "Web", icon: "globe", text: "ASP.NET, HTML5, CSS, Angular, jQuery, jQueryMobile, KnockoutJS, Bootstrap, Telerik KendoUI." },
            { title: "Source control", icon: "git", text: "Git, GitHub, Gitlab." },
            { title: "Tests", icon: "chart bar", text: "MS Test, xUnit, NUnit, Moq, Jasmine, Jest, JMeter." },
            { title: "Databases", icon: "database", text: "BigQuery, MSSQL Server, MySQL, MongoDB." },
            { title: "Automation", icon: "server", text: "Apache Airflow, Jenkins CI, SonarQube, Azure DevOps, GitHub Actions."},
            { title: "Technology", icon: "cloud upload", text: "GCP, AWS, Azure." }
        ],
        employment: [
            {
                company: "Questrade Inc.", address: "North York, ON", country: "Canada", show: true,
                description: "Canada's largest independent online brokerage",
                url: "https://www.questrade.com",
                positions: [
                    {
                        title: "Senior Software Engineer", period: "04/2022 - present",
                        dolist: [
                            "BigQuery - DDL, DML, stored procedures, functions.",
                            "ETL - Python, CloudSQL (MySQL), BigQuery, GCS.",
                            "Microservices - (Node.js/TypeScript, Python, .NET Core) - architecture, GKE, Pubsub, GCS, QuickFIX, WebSphere MQ.",
                            "Apache Airflow - integration, complex workflows."
                        ]
                    }
                ]
            },
            {
                company: "Upstream Works Ltd.", address: "Vaughan, ON", country: "Canada", show: true,
                description: "Software solutions for contact centers",
                url: "https://www.upstreamworks.com",
                positions: [
                    { 
                        title: "Senior Software Engineer", period: "2016 - 04/2022",
                        dolist: [
                            "Web sites, Windows services, IIS, MS SQL.",
                            "Build server (Jenkins CI), AWS S3, tests and deployment automation.",
                            "Load tests - maintenance, execution and analysis."
                        ]
                    }
                ]
            },
            { 
                company: "Jonas Construction Software", address: "Markham, ON", country: "Canada", show: true,
                description: "Jonas Construction Software is a leading provider of enterprise software for Construction and Service industries", 
                url: "http://www.jonasconstruction.com", 
                positions:
                [
                    { 
                        title: "Senior Software Developer", period: "2008 - 2016", 
                        dolist: [
                            "Web services, Web sites, Windows services, SQL Server",
                            "Hosting management, IIS, Provisioning.",
                            "JavaScript - jQuery, jQueryMobile, KnockoutJS, AngularJS, Telerik Kendo UI."
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
                            "In-house device diagnostics and provisioning tools.",
                            "Web portal solution, Windows services.",
                            "MS SQL Server."
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
                            "Merging, sorting, translation and more, C, C++.",
                            "Printsoft, Postscript, RIP.",
                            "Indexing system, various APIs, C, C++."
                        ]
                    }
                ]
            }
        ],
        education: {
            univ: [
                { title: "Software Engineering", country: "Israel", period: "1997", description: "Tel-Aviv University", url: "https://english.tau.ac.il/" },
                { title: "M. Eng. in Electrical Engineering", country: "Russia", period: "1982 - 1987", description: "Perm State Technical University, Perm", url: "https://pstu.ru/en/" },
            ],
            courses: [
                { title: "Azure Functions and Logic Apps", period: "2020", description: "Udemy", url: "https://www.udemy.com/"},
                { title: "MongoDB for .NET", period: "2017", description: "MongoDB University", url: "https://university.mongodb.com/" },
                { title: "Advanced T-SQL for SQL Server 08/12", period: "2014", description: "SolidQ", url: "https://www.solidq.com/us/" },
                { title: "Intro to ASP.NET MVC", period: "2011", description: "Learning Tree, Toronto", url: "https://www.learningtree.ca/" }
            ],
            cert: [
                { title: "MCAD", period: "2022/01/27", description: "Microsoft Certified: Azure Developer Associate", url: "https://www.credly.com/badges/a6ed597f-ecbb-4e59-82b8-cdd2878f2d44"},
                { title: "MCSD", period: "2020/12", description: "Microsoft Certified Solutions Developer: App Builder", url: "https://www.credly.com/badges/18f083ce-7369-4ee1-a282-028cdb241b7b" },
                { title: "MCSA", period: "2020/03", description: "Microsoft Certified Solutions Associate: Web Applications", url: "https://www.credly.com/badges/98f6433c-660a-4fa2-83cf-f16c36d44d49" }
            ]
        },
        hobbies: [
            { description: "Tennis" },
            { description: "Ping-pong" },
            { description: "Chess" },
            { description: "WingChun"}
        ]
    };

});
