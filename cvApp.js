var cvApp = angular.module("cvApp", []);

cvApp.controller("cvController", function cvController($scope) {
    $scope.cv = {
        name: "Maxim Nisenbaum",
        address: "122 Lowther Ave.",
        city: "Richmond Hill",
        province: "ON",
        phone: "416-856-9515",
        email: "maxnis@gmail.com",
        objective: "Experienced software engineer with more than 10 years of experience in systems development.",
        summary: [
            "Broad knowledge of Microsoft .NET: Windows services, Web services, Web applications, Windows Forms applications, WCF, Setup projects.",
            "Hands-on knowledge of MS SQL Server 2014/2012/2008 including stored procedures, functions, integrated CLR assemblies and administration.",
            "Working knowledge of Windows Server 2012 R2/2008 R2 and IIS 8.5/7.5.",
            "Passionate about producing a reliable and maintainable codebase in order to reduce errors and increase readability."
        ],
        techskills: [
            { title: "Languages", text: "C#, Visual Basic, T-SQL, LINQ, JavaScript." },
            { title: "Tools", text: "MS Visual Studio 2008 - 2013, VS-Code, .NET frameworks 4.5-2.0, Nancy Fx, EF." },
            { title: "Databases", text: "MS SQL Server 2005 - 2014, SQLite." },
            { title: "Web development", text: "ASP.NET, ASP.NET.MVC, HTML5, CSS, jQuery, jQueryMobile, Knockout JS, AngularJS, Bootstrap, Telerik Kendo UI." },
            { title: "Source control", text: "TFS, Git, Git Extensions, GitHub." },
            { title: "Exposure to", text: "AWS, MongoDB, NserviceBus, NodeJS." }
        ],
        employment: [
            { 
                company: "Jonas Software", address: "Markham, ON, Canada", 
                description: "Jonas Software is a leading provider of enterprise software for the Club Management and Construction and Service industries", 
                url: "http://www.jonasconstruction.com", 
                positions:
                [
                    { title: "Software Developer", period: "2008 - 2016", text: "" }
                ] 
            },
            {
                company: "BSM Wireless", address: "Woodbridge, ON, Canada", 
                description: "BSM Wireless Inc. designs, manufactures and markets a comprehensive line of Automatic Vehicle Security and Location solutions", 
                url: "http://www.bsmwireless.com", 
                positions: 
                [
                    { title: "Software Developer", period: "2006 - 2008", text: "" }
                ]
            }
        ],
        education: [
            { title: "Advanced T-SQL for SQL Server 08/12", period: "2014", description: "SolidQ, Markham office, online" },
            { title: "Software Development Course", period: "1997", description: "Tel-Aviv University, Israel" },
            { title: "M. Eng. in Electrical Engineering", period: "1987", description: "Perm State Technical University, Perm, Russia" }
        ]
    };
});