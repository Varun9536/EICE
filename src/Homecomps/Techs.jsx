import React, { useState } from 'react';
import { FaApple, FaAndroid, FaReact } from 'react-icons/fa';
import { IoMdReturnLeft } from 'react-icons/io';
import { SiFlutter, SiIonic, SiSwift, SiKotlin, SiApple, SiJavascript, SiPhp, SiVuedotjs, SiAngular, SiJquery, SiTypescript, SiMysql, SiPostgresql, SiApache, SiOracle, SiDjango, SiMongodb, SiAmazondynamodb, SiNodedotjs, SiRubyonrails, SiLaravel, SiExpress, SiFlask, SiFirebase, SiDocker, SiGit, SiKubernetes, SiJira, SiAnsible, SiAmazonaws, SiMicrosoftazure} from 'react-icons/si';
import { DiDotnet } from "react-icons/di";
import { useHref } from 'react-router-dom';
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';


const categories = [
  { name: "Mobile", id: "mobile" },
  { name: "Front End", id: "frontend" },
  { name: "Database", id: "database" },
  { name: "Backend", id: "backend" },
  { name: "Infra and DevOps", id: "devops" }
];

const iconComponents = {
    "apple-icon": FaApple,
    "android-icon": FaAndroid,
    "react-icon": FaReact,
    "flutter-icon": SiFlutter,
    "ionic-icon": SiIonic,
    "swift-icon": SiSwift,
    "kotlin-icon": SiKotlin,
    "java-icon": SiJavascript,
    "php-icon": SiPhp,
    "objectivec-icon": SiApple,
    "vue-icon": SiVuedotjs,
    "angular-icon": SiAngular,
    "Ionic-icon": SiIonic,
    "jquery-icon": SiJquery,
    "typescript-icon": SiTypescript,
    "mysql-icon": SiMysql,
    "postgresql-icon": SiPostgresql,
    "apache-icon": SiApache,
    "oracle-icon": SiOracle,
    "django-icon": SiDjango,
    "mongodb-icon": SiMongodb,
    "dynamo-icon": SiAmazondynamodb,
    "node-icon": SiNodedotjs,
    "rubyonrails-icon": SiRubyonrails,
    "laravel-icon": SiLaravel,
    "express-icon": SiExpress,
    "aspdotnet-icon": DiDotnet,
    "firebase-icon": SiFirebase,
    "docker-icon": SiDocker,
    "git-icon": SiGit,
    "kubernetes-icon": SiKubernetes,
    "jira-icon": SiJira,
    "ansible-icon": SiAnsible,
    "aws-icon": SiAmazonaws,
    "azure-icon": SiMicrosoftazure, 
  };

const technologies = {
  mobile: [
    { name: "iOS", icon: "apple-icon", link:"services-ios" },
    { name: "Android", icon: "android-icon", link: "services-android" },
    { name: "React Native", icon: "react-icon", link: "services-reactnative" },
    { name: "Flutter", icon: "flutter-icon", link: "services-flutter" },
    { name: "Ionic", icon: "ionic-icon", link: "services-ionic" },
    { name: "Swift", icon: "swift-icon", link: "services-swift" },
    { name: "Kotlin", icon: "kotlin-icon", link: "services-kotlin" },
    { name: "ObjectiveC", icon: "objectivec-icon", link: "services-objectivec" },
    
  ],
  frontend: [
    { name: "Vue", icon: "vue-icon", link: "services-vue" },
    { name: "React", icon: "react-icon", link: "services-react" },
    { name: "Angular", icon: "angular-icon", link: "services-angular" },
    { name: "React Native", icon: "react-icon", link: "services-reactnative" },
    { name: "Ionic", icon: "ionic-icon", link: "services-ionic" },
    { name: "JQuery", icon: "jquery-icon", link: "services-jquery" },
    { name: "TypeScript", icon: "typescript-icon", link: "services-typescript" },
    { name: "PHP", icon: "php-icon", link: "services-php" },
  ],
  database: [
    { name: "MySQL", icon: "mysql-icon", link: "services-mysql" },
    { name: "PostgreSQL", icon: "postgresql-icon", link: "services-postgresql" },
    { name: "MongoDB", icon: "mongodb-icon", link: "services-mongodb" },
    { name: "Django", icon: "django-icon", link: "services-django" },
    { name: "Apache", icon: "apache-icon", link: "services-apache" },
    { name: "Oracle", icon: "oracle-icon", link: "services-oracle" },
    { name: "DynamoDB", icon: "dynamo-icon", link: "services-dynamo" },
  ],
  backend: [
    { name: "PHP", icon: "php-icon", link: "services-php" },
    { name: "Ruby On Rails", icon: "rubyonrails-icon", link: "services-rubyonrails" },
    { name: "ASP.NET", icon: "aspdotnet-icon", link: "services-aspdotnet" },
    { name: "Express", icon: "express-icon", link: "services-express" },
    { name: "Laravel", icon: "laravel-icon", link: "services-laravel" },
    { name: "Docker", icon: "docker-icon", link: "services-docker" },
    { name: "Firebase", icon: "firebase-icon", link: "services-firebase" },
    { name: "NodeJs", icon: "node-icon", link: "services-nodejs" },

  ],
  devops: [
    { name: "Git", icon: "git-icon", link: "services-git" },
    { name: "Docker", icon: "docker-icon", link: "services-docker" },
    { name: "Kubernetes", icon: "kubernetes-icon", link: "services-kubernetes" },
    { name: "Jira", icon: "jira-icon", link: "services-jira" },
    { name: "AWS", icon: "aws-icon", link: "services-aws" },
    { name: "Azure", icon: "azure-icon", link: "services-azure" },
    { name: "Ansible", icon: "ansible-icon", link: "services-ansible" },
  ]
};



const Technology = ({ name, icon, link }) => {
  const IconComponent = iconComponents[icon];

  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="group  cursor-pointer overflow-hidden flex flex-col gap-2 items-center p-3">
        <Link to={link} className=" mb-2">
          <IconComponent size={60} className="text-blackk group-hover:text-bloo transition duration-300"/>
        </Link>
        <span className="group-hover:underline group-hover:text-bloo transition duration-300 text-blackk font-semibold text-sm text-center">{name}</span>
      </div>
    </div>
  );
};

function Techs() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className=''>
<div className="bg-bgplate bg-cover py-12"></div>
    <div className='bg-zinc-50'>
    <div className="container  mx-auto px-4 font-manrope">
      <header className="text-center mb-10">
        <h1 className="text-bloo font-bold text-xl sm:text-xl lg:text-2xl  py-2">Technologies we work with</h1>
        <h1 className="text-blackk  font-bold text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
          Explore our extensive range of cutting-edge tools and platforms
        </h1>
      </header>

      <nav className="mb-12">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <li key={category.id} className=''>
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition ${
                  activeCategory === category.id
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="container mx-auto px-4 pt-4 lg:max-w-7xl w:screen">
        {categories.map((category) => (
          <section
            key={category.id}
            className={`${activeCategory === category.id ? "block" : "hidden"}`}
          >
            <div className="relative ">
              <div className="flex items-center justify-center">
                <div 
                    className="items-center justify-center md:flex md:flex-wrap grid grid-cols-3"
                    // className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    
                  {technologies[category.id].map((tech, index) => (
                    <Technology
                      key={index}
                      name={tech.name}
                      icon={tech.icon}
                      link={tech.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
    </div>
    <div className="bg-bgplate bg-cover py-12 rotate-180"></div>

    </div>
  );
}

export default Techs;