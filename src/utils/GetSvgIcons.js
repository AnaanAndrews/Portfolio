
import JavaScriptIcon from "../Assets/svg/Skills/javascript.svg";
import CssIcon from "../Assets/svg/Skills/css3.svg";
import TSIcon from "../Assets/svg/Skills/typescript.svg";
import ReactIcon from "../Assets/svg/Skills/react.svg";
import NextJsIcon from "../Assets/svg/Skills/next-js.svg";
import VueIcon from "../Assets/svg/Skills/vue-js.svg";
import ThreeJs from "../Assets/svg/Skills/Three.js_Icon.svg";
import MUIIcon from "../Assets/svg/Skills/MUI.svg";
import BootstrapIcon from "../Assets/svg/Skills/bootstrap.svg";
import VeutifyIcon from "../Assets/svg/Skills/vuetify.svg";
import HtmlIcon from "../Assets/svg/Skills/html-5.svg";
import scssIcon from "../Assets/svg/Skills/scss.svg";





import SqlIcon from "../Assets/svg/Skills/sql.svg";
import SqlIconLite from "../Assets/svg/Skills/sqllite.svg";
import Csharp from "../Assets/svg/Skills/c-sharp-c.svg";
import netCoreIcon from "../Assets/svg/Skills/netCore.svg";
import uwp from "../Assets/svg/Skills/uwp.svg";
import Java from "../Assets/svg/Skills/java.svg";
import linux from "../Assets/svg/Skills/linux.svg";
import nodejs from "../Assets/svg/Skills/nodejs.svg";
import yarn from "../Assets/svg/Skills/yarn.svg";
import asp from "../Assets/svg/Skills/asp.svg";


import github from "../Assets/svg/Skills/githubIcon.svg";
import inkscape from "../Assets/svg/Skills/inkscapeIcon.svg";
import powerbi from "../Assets/svg/Skills/powerbi.svg";
import android from "../Assets/svg/Skills/android-studio.svg"; 
import affinity from "../Assets/svg/Skills/affinity.svg";
import blender from "../Assets/svg/Skills/blendericon.svg";
import substance from "../Assets/svg/Skills/substance.svg";

import vscode from "../Assets/svg/Skills/vscode.svg";

export function getSvgIconSet (type){



    if(type === "tools"){
        return  [
            {
                icon: vscode,
                title: "vs code",
                ep: "pa8", 
            },
            {
                icon: github,
                title: "Github",
                ep: "pa8", 
            },
            {
                icon: blender,
                title: "Blender",
                ep: "", 
            },
            {
                icon: substance,
                title: "Substance Painter",
                ep: "pa8", 
            },
    
   
            {
                icon: android,
                title: "Android Studio",
                ep: "pa8", 
            },
            {
                icon: powerbi,
                title: "Power BI",
                ep: "pa8", 
            },
            {
                icon: affinity, 
                title: "Affinity",
                ep: "pa8", 
            },
            {
                icon: inkscape, 
                title: "Inkscape",
                ep: "pa8", 
            },
       
     
     
            

        ];


    }

    if(type === "back"){
        return  [
            {
                icon: Csharp,
                title: "C#",
                ep: "pa8", 
            },
            {
                icon: netCoreIcon,
                title: ".Net Core",
                ep: "", 
            },
            {
                icon: asp,
                title: "ASP",
                ep: "", 
            },
            {
                icon: Java,
                title: "Java",
                ep: "pa8", 
            },
    
   
            {
                icon: uwp,
                title: "UWP",
                ep: "pa8", 
            },
            {
                icon: SqlIcon, 
                title: "SQL",
                ep: "pa8", 
            },
            {
                icon: SqlIconLite, 
                title: "SQL Lite",
                ep: "pa8", 
            },
            {
                icon: linux,
                title: "Linux",
                ep: "pa8", 
            },
            {
                icon: nodejs,
                title: "Node.js",
                ep: "pa8", 
            },
            {
                icon: yarn,
                title: "yarn",
                ep: "pa8", 
            },
            

        ];


    }

    if(type === "front"){
        return  [
            {
                icon: HtmlIcon,
                title: "HTML",
                ep: "", 
            },
            {
                icon: CssIcon,
                title: "CSS",
                ep: "", 
            },
    
            {
                icon: JavaScriptIcon,
                title: "JavaScript",
                ep: "", 
            },
            {
                icon: TSIcon, 
                title: "TypeScript",
                ep: "", 
            },
            {
                icon: ThreeJs, 
                title: "three.js",
                ep: "", 
            },
            {
                icon: VueIcon,
                title: "Vue.js",
                ep: "", 
            },
            {
                icon: ReactIcon,
                title: "React.js",
                ep: "pa8", 
            },
            {
                icon: NextJsIcon,
                title: "Next.Js",
                ep: "pa8", 
            },
            
            {
                icon: VeutifyIcon,
                title: "Veutify",
                ep: "pa8", 
            },
            {
                icon: MUIIcon,
                title: "MUI",
                ep: "pa8", 
            },
            {
                icon: BootstrapIcon,
                title: "Bootstrap",
                ep: "",
            },
            {
                icon: scssIcon,
                title: "Sass",
                ep: "",
            },
        ];

    
    }

    if(type === "qq"){

        return  [
            {
                icon: NextJsIcon, 
                alt: "Next.Js Icon",
                ep: "pIcon", 
            },
            {
                icon: TSIcon,
                alt: "TypeScript Icon",
                ep: "", 
            },
    
            {
                icon: MUIIcon,
                alt: "Material UI Icon",
                ep: "pIcon", 
            },
        ];
            
    }
    if(type === "port"){

        return  [
            {
                icon: ReactIcon, 
                alt: "React Icon",
                ep: "", 
            },
            {
                icon: ThreeJs,
                alt: "Three.js Icon",
                ep: "", 
            },
    
            {
                icon: scssIcon,
                alt: "scss Icon",
                ep: "", 
            },
        ];
            
    }
    if(type === "grow"){

        return  [
            {
                icon: asp, 
                alt: "asp Icon",
                ep: "", 
            },
            {
                icon: netCoreIcon,
                alt: "dot net core Icon",
                ep: "", 
            },
    
            {
                icon: BootstrapIcon,
                alt: "bootstrap Icon",
                ep: "", 
            },
        ];
            
    }
    if(type === "rfl"){

        return  [
            {
                icon: VueIcon, 
                alt: "Vue icon",
                ep: "", 
            },
            {
                icon: netCoreIcon,
                alt: "dot net core Icon",
                ep: "", 
            },
    
            {
                icon: SqlIcon,
                alt: "Sql icon",
                ep: "", 
            },
        ];
            
    }


}