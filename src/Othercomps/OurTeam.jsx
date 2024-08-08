import React from "react";
import Footer from "./Footer";
import Copyright from "./Copyright";
import "./Styles/OurTeam.css"
import "../fontCss.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import temp from "../assets/Compressed/temp.png";
import teamsbanner from "../assets/Compressed/teamsbanner.png";
import teamsbanner2 from "../assets/Compressed/teamsbanner2.png";
import teamsbanner11 from "../assets/Compressed/teamsbanner11.png";
import teamsbanner12 from "../assets/Compressed/teamsbanner12.png";
import teamsbanner13 from "../assets/Compressed/teamsbanner13.png";
import { Link } from "react-router-dom";

function OurTeam() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 300,
    autoplaySpeed: 0,
    cssEase: "linear",
    prevArrow: <button type="button" className="slick-prev">Previous</button>,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };




  const team = [

    {
      name: "Piyush Pandey",
      education: "B.Tech, M.Tech, Ph. D (IIT Roorkee)",
      experience: "30+ Years",
      skillSet: "GIS, Urban Planning, Civil Engineering",
      certifications: "MS Cybersecurity",

    },
    
    {
      name: "Uma Nath Tripathi",
      education: "MS-Computer Science, MBA (IIT Delhi)",
      experience: "20+ Years",
      skillSet: "Cloud (Azure & AWS), .Net Technologies",
      certifications: "PMP",

    },
    {
      name: "Anupam Shukla",
      education: "Master of Computer Applications (MCA)",
      experience: "20+ Years",
      skillSet: ".Net Technologies, Angular 6+, Python",
      certifications: "Cloud Solutions Architect",

    },
    {
      name: "Mridula Mittal",
      education: "Master of Computer Applications (MCA)",
      experience: "20+ Years",
      skillSet: ".Net Technologies, MFC, C++, VB 6, VBA, Web APIs, WCF, WPF, JavaScript"
    },
    {
      name: "Rajeev Singh Chib",
      education: "Master of Computer Applications (MCA)",
      experience: "12+ Years",
      skillSet: "DevOps Engineer, Cloud (AWS & Azure), .Net Technologies, NOP E-Commerce"
    },
    {
      name: "Shilpy Pandey",
      education: "Master of Computer Applications (MCA)",
      experience: "10+ Years",
      skillSet: "DevOps Engineer, .Net technologies, Highcharts, Test Complete Automation tool"
    },
    {
      name: "Kunal Sagar",
      education: "MCA, MBA (IT & Marketing)",
      experience: "15+ Years",
      skillSet: "Manual/Automation Testing, Postman API, JMeter"
    },
    {
      name: "Rajesh Kumar Tripathi",
      education: "BE (Mechanical Engineering)",
      experience: "17+ Years",
      skillSet: "GIS (OpenSource  GeoServer, ESRI ArcGIS)",
      certifications: "Oracle Associate 11g"
    },
    {
      name: "Vineet Maheshwari",
      education: "Master of Computer Applications (MCA)",
      experience: "9+ Years",
      skillSet: "Angular 6-8, MVC, .Net Technologies, Cross Platform tools (Cordova & Xamarin)"
    },
    {
      name: "Sachin Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "11+ Years",
      skillSet: ".Net Technologies, Angular 8, MVC, Xamarin, Web APIs, WCF, WPF, JavaScript",
      certifications: "Azure Solutions Architect"
    },
    {
      name: "Saurabh Goel",
      education: "Master of Computer Applications (MCA)",
      experience: "12+ Years",
      skillSet: ".Net Technologies, Web Services, Angular8, Knockout JS, Angular JS",
      certifications: "Azure Solutions Architect"
    },
    {
      name: "Namrata Mehra Kukreja",
      education: "Master of Computer Applications (MCA)",
      experience: "13+ Years",
      skillSet: ".Net Technologies, Angular 8, Web APIs, Entity Framework",
      certifications: "Certified Scrum Master"
    },
    {
      name: "Manish Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "13+ Years",
      skillSet: "Manual Testing, Automation Testing, Agile, MTM (Microsoft Test Manager), HP ALM",
      certifications: "Certified Scrum Master"
    },
    {
      name: "Mukesh Nigam",
      education: "Master of Computer Applications (MCA)",
      experience: "17+ Years",
      skillSet: ".Net technologies, Angular, Web APIs, MVC",
      certifications: "Azure Solution Architect"
    },
    {
      name: "Sudeep Nigam",
      education: "Master of Computer Applications (MCA)",
      experience: "15+ Years",
      skillSet: ".Net technologies, Angular JS, Web APIs, Jquery",
      certifications: "MCTS"
    },
    {
      name: "Yashwant Kumar Singh",
      education: "B.Tech(Computer Science)",
      experience: "13+ Years",
      skillSet: "Angular 8-10, Web APIs, .Net Technologies, MVC 5",
      certifications: "MCTS"
    },
    {
      name: "Manpreet Singh",
      education: "Master of Computer Applications (MCA)",
      experience: "14+ Years",
      skillSet: ".Net Technologies, Angular 10, 8, 6, Web APIs, iOS Native App with SWIFT language",
      certifications: "MCTS, MCPD"
    },
    {
      name: "Abhishek Pandey",
      education: "Master of Computer Applications (MCA)",
      experience: "10+ Years",
      skillSet: "Asp.Net MVC 5, Web APIs, WCF, ASP.NET Razor, SignalR, Javascript/JQuery/AJAX",
      certifications: "MCTS, MCPD"
    },
    {
      name: "Mahendra Trivedi",
      education: "Master of Computer Applications (MCA)",
      experience: "14+ Years",
      skillSet: ".Net Technologies, Oracle, Angular 8, Web Services, Xamarin",
      certifications: "MCTS, MCPD"
    },
    {
      name: "Anitesh Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "11+ Years",
      skillSet: "Oracle Database administration, RMAN backup and recovery technique",
      certifications: "Oracle Associate 10g"
    },
    {
      name: "Mithileshwar Sharma",
      education: "M.Sc. (Information Technology)",
      experience: "15+ Years",
      skillSet: "Solution Architect, Hadoop, DevOps, Data Modeling, Design decision, Analysis",
      certifications: "AWS Architect, RPA"
    },
    {
      name: "Surinder Kumar Verma",
      education: "Master of Computer Applications (MCA)",
      experience: "7 Years",
      skillSet: "Automation & Manual Testing, Postman API, JMeter, VB Script"
    },
    {
      name: "Paras Sharma",
      education: "Master of Computer Applications (MCA)",
      experience: "7+ Years",
      skillSet: "C# .Net Core, MVC, Web APIs, Sql Server, DevOps Engineer, Kubernetes/Docker"
    },
    {
      name: "Balram Nikam",
      education: "Master of Computer Applications (MCA)",
      experience: "3+ Years",
      skillSet: "Asp.Net, MVC, Xamarin.Forms, .Net Core 3.1, Telerik Grid"
    },
    {
      name: "Sunny Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "8+ Years",
      skillSet: "NodeJS, MongoDB, Manual Testing, API Testing, Postman-API, SQL Server"
    },
    {
      name: "Abhishek Mishra",
      education: "Master of Computer Applications (MCA)",
      experience: "3+ Years",
      skillSet: "ASP.Net, MVC, .Net Core, Frontend UI/UX, HTML, CSS, JavaScript, Xamarin.Forms, Cordova"
    },
    {
      name: "Ankush Jaral",
      education: "Master of Computer Applications (MCA)",
      experience: "4+ Years",
      skillSet: "DevOps Engineer, .NET Technologies, Android, Frontend UI/UX, JavaScript"
    },
    {
      name: "Isha Chib",
      education: "Master of Computer Applications (MCA)",
      experience: "7+ Years",
      skillSet: "DevOps Engineer, .Net Technologies, MVC Core, Rest Services, Azure Cloud"
    },
    {
      name: "Ojas Kulkarni",
      education: "Master of Computer Applications (MCA)",
      experience: "3+ Years",
      skillSet: "ASP.Net, MVC, .Net Core, Frontend UI/UX, HTML, CSS, JavaScript, Xamarin.Forms, Cordova"
    },
    {
      name: "Rajesh Singh",
      education: "Master of Computer Applications (MCA)",
      experience: "9+ Years",
      skillSet: "Core Java, JDBC, JSP, Servlets, Struts2, JSF/EJB, Spring-Hibernate"
    },
    {
      name: "Sandeep Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "8+ Years",
      skillSet: "Core Java, Camunda, Multithreading, Hibernate, SpringMVC, Spring Boot, Maven, AWS"
    },
    {
      name: "Anurag Nigam",
      education: "Master of Computer Applications (MCA)",
      experience: "10 Years",
      skillSet: "Core Java, Microservices, Spring Boot, JMS, Elasticsearch, Struts 2.0, MAVEN"
    },
    {
      name: "Jai Singh",
      education: "Master of Computer Applications (MCA)",
      experience: "6 Years",
      skillSet: "Java, Spring Framework, RDBMS and NoSql databases, SiteMesh, ANT"
    },
    {
      name: "Shiv Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "9 Years",
      skillSet: "WebLogic Portal, Spring MVC, Hibernate, JSP, JQuery, AngularJS, DB2, maven"
    },
    {
      name: "Amit Mishra",
      education: "Master of Computer Applications (MCA)",
      experience: "12 Years",
      skillSet: "Hibernate-Framework, Spring-Framework, Restful, Struts-Framework, J2EE Design-Patterns"
    },
    {
      name: "Amit Bhatt",
      education: "Master of Computer Applications (MCA)",
      experience: "10 Years",
      skillSet: "Selenium, Katalon Studio, QTP/UFT, Mainframe Automation using TE add-ins"
    },
    {
      name: "Abhay Kumar Singh",
      education: "Master of Computer Applications (MCA)",
      experience: "12 Years",
      skillSet: "Big data frameworks, HDFS, Hive, Sqoop, Spark, Scala, Kudu, AWS, Informatica Power Center 9.5, Oracle, PL/SQL, Teradata, Shell-Scripting"
    },
    {
      name: "Utsav Mishra",
      education: "Master of Computer Applications (MCA)",
      experience: "11 Years",
      skillSet: "NLP frameworks, NLTK, Spacey, Stanford NLP, BERT, RASA, Sci-kit, Tensorflow, pytorch, R, Python"
    },
    {
      name: "Hemant Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "9+ Years",
      skillSet: "DevOps (Jenkins, TeamCity, Docker, Ansible, Kubernetes), UFT/QTP, ALM, API Testing (Rest Assured, Postman), Cucumber"
    },
    {
      name: "Sonal Srivastava",
      education: "Master of Computer Applications (MCA)",
      experience: "10+ Years",
      skillSet: "Selenium WebDriver, Cucumber, TestNG, Eclipse IDE, TESTCOMPLETE, PLC, SCADA, Appium"
    },
    {
      name: "Amit Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "11 Years",
      skillSet: "Selenium/Appium, Postman, Cucumber Framework, Jmeter, Maven, Jenkins, PageFactory"
    },
    {
      name: "Raghvendra Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "10+ Years",
      skillSet: "Selenium, TestNG, Maven, Test management (HPQC), defect tracking (Bugzilla)"
    },
    {
      name: "Piyush Kumar Singh",
      education: "Master of Computer Applications (MCA)",
      experience: "10+ Years",
      skillSet: "Developer Platform I, App Builder, Administrator, Sales Cloud, Platform Developer II, Service Cloud, FSL certified"
    },
    {
      name: "Shivani Rathod",
      education: "Bachelor of Engineering in Computer Engineering",
      experience: "6+ Years",
      skillSet: "Salesforce/APTTUS Certified Developer, Data loader SOQL, Lightning Component Ant migration, Data structure Apex"
    },
    {
      name: "Vishnu Kumar",
      education: "Master of Computer Applications (MCA)",
      experience: "5+ Years",
      skillSet: "End to End IoT Devices Lifecycle Using Azure IoT/AWS IoT, IoT protocols, Kubernetes clustering, Functional programming"
    },
    {
      name: "Ramesh Gupta",
      education: "Master of Computer Applications (MCA)",
      experience: "6+ Years",
      skillSet: "End to End IoT Devices Lifecycle Using Azure IoT, IoT with DPS, Azure Service Bus Topic, Queue, Relay"
    },
    {
      name: "R. Sathish Babu",
      education: "Bachelor of Engineering (ECE)",
      experience: "5+ Years",
      skillSet: "Certified(SuiteFoundation), NetSuite functional consultant, Administration activities, NetSuite ERP & CRM master"
    },
    {
      name: "Shwati Singh",
      education: "Master of Computer Applications (MCA)",
      experience: "8+ Years",
      skillSet: "Selenium Web Driver, JIRA, QC, Zephyr, ALM, TestNG, Core Java Automation, Postman API, JMeter, VB Script"
    },

    {
      name: "Manish Sharma",
      education: "B.Tech (Computer Science and Engineering)",
      experience: "11 Years",
      skillSet: "Power BI, MS Excel, PowerPoint, Power Apps, Power Automate, Excel, Macro and SharePoint, Azure, OCI, IT Services, SAP, Summit Tool, Managed Engine, ServiceNow, Azure -IAAS, WFM, IT helpdesk, ITIL, RPO, BPO, Asset, Inventory"
    },

    {
      name: "Ashish Goswami",
      education: "M.C.A (Master of Computer Applications)",
      experience: "7+ Years",
      skillSet: "Manual/Automation Testing, API Testing, Amazon AWS, ADO, Selenium, JIRA, Bugzilla, Zoho, Eclipse, TestNG, JMeter, NVDA, MySQL Workbench, Talkback, TestRail, VoiceOver, Screencast, JAWS, DT Screen"
    },
    {
      name: "Nayan Dua",
      education: "M.C.A (Master of Computer Applications)",
      experience: "5+ Years",
      skillSet: "Manual/Automation Testing, Figma, Postman, TestRail, Test Link, Confluence, JMeter, JIRA, Trello, Azure DevOps, ZAP, Burp Suite, Nmap, Nikto, Nessus"
    },
    {
      name: "Ankit Rawat",
      education: "Diploma in Advance 3D Animation, Graphics and VFX",
      experience: "10+ Years",
      skillSet: "UI Design, Wireframing, UX Research, 3D Modelling, User Journey, Prototyping, Figma, Adobe XD, Blender, Photoshop, Illustrator"
    },
    {
      name: "Basant Anand",
      education: "M.C.A (Master of Computer Applications)",
      experience: "3+ Years",
      skillSet: "HTML5, CSS3, Bootstrap, PHP, JavaScript, .NET (MVC), Xamarin, WordPress, WIX, Agile methodologies"
    },
    {
      name: "Shivam Kushwaha",
      education: "B.Tech (Information Technology)",
      experience: "3 Years",
      skillSet: "C#.NET, ASP.NET MVC, ASP.NET Core, HTML5/CSS3/JavaScript, PL/SQL, Microsoft Visual Studio 2019/2022, SQL Server 2008 R2, Object-Oriented Programming (OOP), jQuery, Git (Version Control)"
    },
    {
      name: "Himanshu Vishwakarma",
      education: "B.Tech (Computer Science)",
      experience: "6+ Years",
      skillSet: "C#.NET, MVC, .Net Core, ASP.NET, PHP, HTML, SQL, Oracle, MS Access"
    },
    {
      name: "Vinod Kumar",
      education: "M.C.A (Master of Computer Applications)",
      experience: "3 Years",
      skillSet: "C#, ASP.NET (Core/MVC), jQuery, JavaScript, MS SQL Server, JIRA, Trello, Agile (Scrum), Waterfall"
    },
    {
      name: "Avinash Verma",
      education: "M.C.A (Master of Computer Applications)",
      experience: "3+ Years",
      skillSet: "PHP, WordPress, HTML, CSS, JavaScript, jQuery, C#, ASP.NET Core, MySQL"
    },
    {
      name: "Anmol Singh",
      education: "BCA (Bachelor of Computer Applications)",
      experience: "4 Years",
      skillSet: "Node Js, React Js, Next Js, JavaScript, TypeScript, Mongo DB, SQL, PHP, WordPress, HTML, CSS, Bootstrap, Tailwind CSS"
    },
    {
      name: "Srinivasa Reddy Burri",
      education: "B.Tech",
      experience: "16 Years",
      skillSet: "Windows 95, NT, 2000, UNIX, C, C++, Java, SQL Server 2018, PostgreSQL, IIS-6.0, JRUN 3.0, Apache Web Server, Web Logic 5.1/6.1, JBoss 2.4.3, Orion 1.4.5, ASP .NET, XFORMS, Selenium, TestNG, WinRunner, Borland Silk Performer, Rational Robo, Rational Functional Tester, QTP 9.2, Quality Center 9.0, CVS, Load Runner, VSS"
    },
    {
      name: "Arnab Saikia",
      education: "B.Tech (Chemical Engineering)",
      experience: "12 Years",
      skillSet: "Manual/automation Testing, JIRA, Azure Dev Ops, Bugzilla, Test Rail, PG Admin, MySQL, Cassandra, POSTMAN, SWAGGER, Redash"
    },
    {
      name: "Sudheer Rana",
      education: "MA (Master of Arts)",
      experience: "12+ Years",
      skillSet: "Tableau, Power BI, Qlik Development, SQL, Snowflake, SQL Server Integration, Agile Methodologies, Star Schema, Snowflake Schema"
    },
    {
      name: "Parinita Srivastava",
      education: "MCA (Master of Computer Applications)",
      experience: "13+ Years",
      skillSet: "SPFx Webparts & Extensions, Power Apps & Automate Solutions, Power BI Reports, Custom Web Parts (SP 2010/2013), CSOM & SSOM Operations, JavaScript Validation, CAML & LINQ Queries, Microsoft Web Apps, Workflows & Event Receivers, AI Integration"
    },
    {
      name: "Santosh Singh",
      education: "MCA (Master of Computer Applications)",
      experience: "12+ Years",
      skillSet: "Database Migration, Database Assessment & Planning, Data Extraction & Transformation, SQL Scripting, ETL Processes, Database Design, Performance Tuning, Schema Mapping, Data Validation & Testing, Backup & Recovery, Version Control, Tools & Technologies (AWS DMS, Azure Data Factory, Data Migration Assistant, SQL Server, Oracle, MySQL)"
    },
    {
      name: "Harshita Maheshwari",
      education: "B.Tech (Computer Science and Engineering)",
      experience: "7+ Years",
      skillSet: "Figma, Adobe XD, Axure RP, InVision, Miro, MS Office, Mural, UX Audit, User Research, Design/Stakeholder Workshops, Personas, Storyboarding, Journey, Empathy, Affinity Mapping, Card Sorting, Task Flow, Flow Charts, Information Architecture, Wireframes and Prototypes, Usability Testing"
    },
    


  ];


  return (
    <div className="-mt-6">
      <div className="relative w-full 2xl:pt-12 pt-32 pb-12 ">
        <img
          src={teamsbanner}
          alt=""
          className="-z-20 absolute inset-0 w-full h-full object-cover"
        />
        <h1 className="fontsize_1 text-white  text-center  py-16">
          Our Team
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-bloo  text-center  py-2">
          <h1 className="fontsize_2 fontweight_1" >Our Leaders</h1>
          <h2 className=" fontsize_2 text-blackk   text-center  mx-auto   max-w-5xl py-1">
            The driving force behind our innovation and success
          </h2>
          <p className=" fontsize_3  text-justify text-blackk/60  max-w-5xl mx-auto  py-4   leading-snug">
            EICE's leadership team is a dynamic blend of creativity, vision, and
            strategic thinking. They inspire a culture of innovation and
            passion, driving our entire organization towards shared success.
            With a commitment to excellence and a collaborative spirit, our
            leaders foster a vibrant environment that empowers every member of
            the EICE family. Proudly operating from offices in India, the USA,
            and Canada, our team of experts is dedicated to delivering
            exceptional solutions and exceeding client expectations.
          </p>
        </div>


      </div>
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className=" fontsize_2 text-blackk  text-center  l mx-auto  py-1">
            Key Team Leads
          </h2>
          <p className=" fontsize_3  text-justify text-blackk/60  max-w-5xl mx-auto  py-4  ">
            At EICE, our team is the backbone of our success. Our exceptional
            team leaders are the ones who help deliver projects to the best of
            our capability. 
          </p>
        </div>


        <div className=" team_container py-4">

          {/* <Slider className="w-full h-full" {...settings}> */}

          {team.map((item, index) =>
          (

            <div key={index} className="teamBox  flex  py-4 px-4">
              <div className="flex bg-white shadow-lg shadow-blackk/20 p-8 rounded-md flex-col  w-full">


                <h1  className=" fontsize_5  fontweight_1 text-blackk   py-1">
                  {item.name}
                </h1>


                <h2 className="text-bloo  ">
                  {item.education}
                </h2>

                <h3 className="py-1 text-blackk/80 ">
                  <span className="fontweight_2" >Experience :</span>  {item.experience}
                </h3>

                <h3 className="text-blackk/80  py-1">
                  <span className="fontweight_2" >Skill Sets :</span>   {item.skillSet}
                </h3>

                {item.certifications && (<h3 className="text-blackk/80  py-1">
                  <span className="fontweight_2">Professional Certificate :</span>    {item.certifications}
                </h3>)}


              </div>
            </div>

          ))}





          {/* </Slider> */}

        </div>
        <div className="max-w-7xl mx-auto w-full py-20">
          <h2 className="fontsize_2 fontweight_2  text-blackk   text-center  mx-auto  max-w-5xl py-1">
            Teamwork is the only way we work
          </h2>
          <div className="pt-8 flex flex-col gap-8">
            <div className=" px-4">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 border-2 p-4 rounded-md">
                <div className="col-span-2 w-full">
                  <h1 className=" fontweight_2  text-bloo  text-xl  py-1">Innovation at Every Level</h1>
                  <p className="  fontsize_3 lg:text-justify text-left text-blackk/60  max-w-5xl mx-auto  py-1   ">
                    Our employees are innovators at heart. They continually seek out new ideas, technologies, and methodologies to drive our projects forward.
                    This culture of innovation ensures that we stay ahead of our competition and deliver cutting edge solutions to our clients.
                  </p>
                </div>
                <img src={teamsbanner11} alt="" className="lg:order-last order-first" />
              </div>
            </div>
            <div className=" px-4">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 border-2 p-4 rounded-md">
                <div className="col-span-2 w-full">
                  <h1 className="  fontweight_2  text-bloo  text-xl  py-1">Innovation at Every Level</h1>
                  <p className="  fontsize_3 lg:text-justify text-left text-blackk/60  max-w-5xl mx-auto  py-1  ">
                    Our employees are innovators at heart. They continually seek out new ideas, technologies, and methodologies to drive our projects forward.
                    This culture of innovation ensures that we stay ahead of our competition and deliver cutting edge solutions to our clients.
                  </p>
                </div>
                <img src={teamsbanner12} alt="" className="order-first " />
              </div>
            </div>
            <div className=" px-4">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 border-2 p-4 rounded-md">
                <div className="col-span-2 w-full">
                  <h1 className=" fontweight_2  text-bloo text-xl  py-1">Innovation at Every Level</h1>
                  <p className=" fontsize_3 lg:text-justify text-left text-blackk/60  max-w-5xl mx-auto  py-1 ">
                    Our employees are innovators at heart. They continually seek out new ideas, technologies, and methodologies to drive our projects forward.
                    This culture of innovation ensures that we stay ahead of our competition and deliver cutting edge solutions to our clients.
                  </p>
                </div>
                <img src={teamsbanner13} alt="" className="lg:order-last order-first" />
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="relative py-12">
        <img src={teamsbanner2} alt="" className="-z-20 absolute inset-0 h-full w-full object-cover" />
        <div className="max-w-7xl mx-auto w-full h-full px-4 py-12">
          <h2 className=" fontsize_2  text-white   mx-auto   py-1">
            Come and Work with Us
          </h2>
          <p className=" fontsize_3 lg:text-justify text-left text-white mx-auto  py-1  ">Join our dynamic team and contribute to innovative solutions that drive success. At EICE, we value talent, creativity, and a passion for excellence</p>
          <div className="pt-4">
            <Link to="/contact" className="">
              <button className="w-full sm:w-auto py-4 px-24  rounded transition duration-200 border-2 border-bloo bg-bloo text-white hover:bg-bloo/90 ">
                Join Our Team
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default OurTeam;
