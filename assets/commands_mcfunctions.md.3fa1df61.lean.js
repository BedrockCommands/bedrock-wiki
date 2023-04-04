import{_ as p,c as d,a as s,w as l,e as o,r as a,o as u,d as e,b as n}from"./404.md.9fe8968d.js";const D="/assets/images/commands/functionFile.png",F="/assets/images/commands/pack_icon.png",y="/assets/images/commands/contentLogToggles.png",h="/assets/images/commands/contentLogHistory.png",j=JSON.parse('{"title":"Functions","description":"","frontmatter":{"title":"Functions","category":"General","mentions":["Bedrock Commands","cda94581","zheaEvyline","jordanparki7"],"nav_order":3,"tags":["info"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Function Pack Folder Structure","slug":"function-pack-folder-structure","link":"#function-pack-folder-structure","children":[]},{"level":2,"title":"Notes For Beginners","slug":"notes-for-beginners","link":"#notes-for-beginners","children":[]},{"level":2,"title":"Creating a Function","slug":"creating-a-function","link":"#creating-a-function","children":[]},{"level":2,"title":"Execution","slug":"execution","link":"#execution","children":[]},{"level":2,"title":"tick.json","slug":"tick-json","link":"#tick-json","children":[]},{"level":2,"title":"Sample Function Pack","slug":"sample-function-pack","link":"#sample-function-pack","children":[]},{"level":2,"title":"Troubleshooting Functions","slug":"troubleshooting-functions","link":"#troubleshooting-functions","children":[]}],"relativePath":"commands/mcfunctions.md"}'),m={name:"commands/mcfunctions.md"},f=o("",5),C=o("",5),g=n("div",{class:"language-json line-numbers-mode"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"json"),n("pre",{class:"shiki"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"    "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#C792EA"}},"format_version"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#F78C6C"}},"2"),n("span",{style:{color:"#89DDFF"}},",")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"    "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#C792EA"}},"header"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"        "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#FFCB6B"}},"description"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#C3E88D"}},"Write Your Pack Description Here"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},",")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"        "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#FFCB6B"}},"name"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#C3E88D"}},"Write Your Pack Name Here"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},",")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"        "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#FFCB6B"}},"uuid"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#C3E88D"}},"00000000-0000-0000-0000-000000000000"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},",")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"        "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#FFCB6B"}},"version"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},"["),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#F78C6C"}},"1"),n("span",{style:{color:"#89DDFF"}},","),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#F78C6C"}},"0"),n("span",{style:{color:"#89DDFF"}},","),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#F78C6C"}},"0"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},"],")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"        "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#FFCB6B"}},"min_engine_version"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},"["),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#F78C6C"}},"1"),n("span",{style:{color:"#89DDFF"}},","),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#F78C6C"}},"19"),n("span",{style:{color:"#89DDFF"}},","),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#F78C6C"}},"73"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},"]")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"    "),n("span",{style:{color:"#89DDFF"}},"},")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"    "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#C792EA"}},"modules"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},"[")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"        "),n("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"            "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#FFCB6B"}},"description"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#C3E88D"}},"\xA7r"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},",")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"            "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#FFCB6B"}},"type"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#C3E88D"}},"data"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},",")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"            "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#FFCB6B"}},"uuid"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#C3E88D"}},"00000000-0000-0000-0000-000000000000"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},",")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"            "),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#FFCB6B"}},"version"),n("span",{style:{color:"#89DDFF"}},'"'),n("span",{style:{color:"#89DDFF"}},":"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},"["),n("span",{style:{color:"#F78C6C"}},"1"),n("span",{style:{color:"#89DDFF"}},","),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#F78C6C"}},"0"),n("span",{style:{color:"#89DDFF"}},","),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#F78C6C"}},"0"),n("span",{style:{color:"#A6ACCD"}}," "),n("span",{style:{color:"#89DDFF"}},"]")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"        "),n("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A6ACCD"}},"    "),n("span",{style:{color:"#89DDFF"}},"]")]),e(`
`),n("span",{class:"line"},[n("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br")])],-1),_=n("p",null,[e("Note that the uuid field needs to be replaced with an actual uuid, and the two generated must be different from one another. You can generate a uuid at "),n("a",{href:"https://uuidgenerator.net/",target:"_blank",rel:"noreferrer"},"https://uuidgenerator.net/")],-1),b=n("p",null,[n("img",{src:F,alt:"pack_icon.png"})],-1),A=o("",7),k=o("",3),w=o("",6);function v(T,B,P,x,S,E){const i=a("FolderView"),t=a("CodeHeader"),c=a("Spoiler"),r=a("CardLink");return u(),d("div",null,[f,s(i,{paths:["BP","BP/functions","BP/functions/thiscode.mcfunction","BP/functions/moreofthiscode.mcfunction","BP/functions/tick.json","BP/functions/nested","BP/functions/nested/thiscodeisnested.mcfunction"]},null,8,["paths"]),C,s(c,{title:"Sample \u{1F4C4} manifest.json"},{default:l(()=>[s(t,null,{default:l(()=>[e("BP/manifest.json")]),_:1}),g,_]),_:1}),s(c,{title:"Sample \u{1F5BC} pack_icon.png"},{default:l(()=>[b]),_:1}),A,s(t,null,{default:l(()=>[e("BP/functions/tick.json")]),_:1}),k,s(r,{imgsrcLight:"assets/images/commands/BClogo.png",title:"Download Sample Function Pack",link:"https://drive.google.com/file/d/13vSN6SROxEvL_haT83QFVZgYQrM2oFhs"}),w])}const V=p(m,[["render",v]]);export{j as __pageData,V as default};
