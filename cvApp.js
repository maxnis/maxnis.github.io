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
        ]
    };
});