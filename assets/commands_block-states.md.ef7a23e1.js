import{_ as i,c as r,a as t,w as o,e as a,b as n,d as e,r as l,o as d}from"./404.md.d1fc7343.js";const S=JSON.parse('{"title":"Block States","description":"","frontmatter":{"title":"Block States","category":"General","mention":["BedrockCommands","EziGotFliped"],"tags":["info"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Block States List","slug":"block-states-list","link":"#block-states-list","children":[]},{"level":2,"title":"Converting Aux Values to Block States","slug":"converting-aux-values-to-block-states","link":"#converting-aux-values-to-block-states","children":[]},{"level":2,"title":"Block State Examples","slug":"block-state-examples","link":"#block-state-examples","children":[]}],"relativePath":"commands/block-states.md"}'),u={name:"commands/block-states.md"},p=a('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced by Bedrock Commands Community Discord</a></p><p>Block States or Block Properties are additonal data that defines how the block appears or behaves. Such as the direction it is facing, it&#39;s color, it&#39;s variant, whether it is powered or unpowered and so on.</p><p>This is used in a multitude of commands such as <code>/clone</code>, <code>/execute</code>, <code>/fill</code>, <code>/setblock</code> and <code>/testforblock</code></p><p>In Bedrock Edition we used Aux values (also known as Metadata) to define a block. However; as of 1.19.70 and beyond this is no longer supported and have been fully replaced with Block States instead.</p>',5),b=a(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#Aux Value Example:</span></span>
<span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wool 1</span></span>
<span class="line"><span style="color:#676E95;">#It&#39;s Block State equivelant:</span></span>
<span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wool [&quot;color&quot;:&quot;orange&quot;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>Any command block using aux values will continue to function as it is however block states will need to be adopted when updating them.</li><li>Similarly any commands using aux values in behaviour or function packs with <code>min_engine_version</code> 1.19.63 or below will also continue to function however block states must be adopted if the <code>min_engine_version</code> is updated to 1.19.70 or above.</li></ul><h2 id="block-states-list" tabindex="-1">Block States List <a class="header-anchor" href="#block-states-list" aria-hidden="true">#</a></h2><p>A list of all the block states currently available within Bedrock can be found at: <a href="https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockstateslist" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockstateslist</a></p><h2 id="converting-aux-values-to-block-states" tabindex="-1">Converting Aux Values to Block States <a class="header-anchor" href="#converting-aux-values-to-block-states" aria-hidden="true">#</a></h2><p>For your convenience; download the excel sheet below to find the full list of aux values and their equivelant block states in Bedrock. <em>Shared by kayla@Mojang</em></p>`,6),h=n("h2",{id:"block-state-examples",tabindex:"-1"},[e("Block State Examples "),n("a",{class:"header-anchor",href:"#block-state-examples","aria-hidden":"true"},"#")],-1),m=a(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wool [&quot;color&quot;:&quot;white&quot;]</span></span>
<span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wheat [&quot;growth&quot;:0]</span></span>
<span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wood [&quot;wood_type&quot;:&quot;brich&quot;,&quot;stripped_bit&quot;:true]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>Block states are enclosed in sqaure brackets <code>[ ]</code></li><li>When specifying multiple block states a comma <code>,</code> is used to separate them.</li><li>Quotation marks <code>&quot; &quot;</code> are used around strings such as <code>&quot;birch&quot;, &quot;spruce&quot; etc..</code></li><li>Integer values <code>0, 1, 2..</code> and boolean values <code>true/false</code> do not use quotation marks.</li></ul>`,2);function _(k,f,v,g,x,w){const s=l("CodeHeader"),c=l("BButton");return d(),r("div",null,[p,t(s,null,{default:o(()=>[e("example")]),_:1}),b,t(c,{link:"https://github.com/BedrockCommands/bedrockcommands.github.io/files/10987839/Aux-Value_to_Block-States_Map.xlsx",color:"white"},{default:o(()=>[e("Download")]),_:1}),h,t(s,null,{default:o(()=>[e("Examples")]),_:1}),m])}const B=i(u,[["render",_]]);export{S as __pageData,B as default};
