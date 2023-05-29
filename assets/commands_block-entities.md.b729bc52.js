import{_ as a}from"./chunks/3.035a77e6.js";import{_ as n,c as o,a as s,w as l,e,r,o as i,d as c}from"./404.md.00e4f861.js";const x=JSON.parse(`{"title":"MBE - Max's Block Entity","description":"","frontmatter":{"title":"MBE - Max's Block Entity","category":"Techniques","mention":["BedrockCommands","zheaEvyline"],"tags":["method"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[{"level":3,"title":"Points to Note","slug":"points-to-note","link":"#points-to-note","children":[]}]},{"level":2,"title":"Video Demonstration","slug":"video-demonstration","link":"#video-demonstration","children":[]},{"level":2,"title":"Setup","slug":"setup","link":"#setup","children":[]},{"level":2,"title":"System","slug":"system","link":"#system","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]}],"relativePath":"commands/block-entities.md"}`),d={name:"commands/block-entities.md"},m=e('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>This method, developed by Reddit user u/MaxedOut10 allows you to create near-perfect entity replications of any Minecraft block using armour stands and some sequential <code>/playanimation</code> commands.</p><p>To preserve credits to the creator, the community termed this method as &quot;Max&#39;s Block Entity&quot; or MBE for short.</p><h3 id="points-to-note" tabindex="-1">Points to Note <a class="header-anchor" href="#points-to-note" aria-hidden="true">#</a></h3><ol><li>This method uses 1 armour stand per block entity. Therefore, too many armour stands (like any entity) can contribute to server lag.</li><li>Players will still be able to pass through them as well as interact with them if not restricted.</li><li>While the block entity may appear in one spot, it&#39;s actual hitbox will have a slight offset.</li></ol><h2 id="video-demonstration" tabindex="-1">Video Demonstration <a class="header-anchor" href="#video-demonstration" aria-hidden="true">#</a></h2><p><a href="https://github.com/BedrockCommands/bedrockcommands.github.io/assets/99989764/369c7430-9905-49de-b00e-cbb180a8a73d" target="_blank" rel="noreferrer">https://github.com/BedrockCommands/bedrockcommands.github.io/assets/99989764/369c7430-9905-49de-b00e-cbb180a8a73d</a></p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><p><em>To be typed in chat:</em></p><ul><li><code>/summon armor_stand Grumm</code><ul><li>It is necessary to name it &#39;Grumm&#39; to avoid inverted Block Textures.</li></ul></li><li><code>/execute as @e [type= armor_stand, name= &quot;Grumm&quot;, c=1] at @s run tp @s ~~~ ~260</code><ul><li>This will align the block entity to the normal Minecraft block grid.</li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>Crouch &amp; right-click (on mcpe: long press) the armor stand 6 times to place it in Pose 7. <ul><li><strong>only do this if you wish to reduce \xD71 command from the command system.</strong></li><li>doing this will negate the need for the 2nd command in the system.</li></ul></li></ul></div><h2 id="system" tabindex="-1">System <a class="header-anchor" href="#system" aria-hidden="true">#</a></h2>',13),p=e(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">/scoreboard players set onlinePlayers total 0</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @e [type=player] run scoreboard players add onlinePlayers total 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (examples)</span></span>
<span class="line"><span style="color:#C3E88D;">/execute if score onlinePlayers total matches 4.. run title @a actionbar Enough players to start game.</span></span>
<span class="line"><span style="color:#C3E88D;">/execute if score onlinePlayers total matches ..3 run title @a actionbar Not enough players.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="`+a+'" alt="commandBlockChain3"></p><p>Here we have used a FakePlayer name <code>onlinePlayers</code> and targeting <code>@e [type=player]</code> to track how many players are currently on the world. However you may use any FakePlayer name and target any entity you might need. Such as <code>@e [type=creeper]</code></p><p>Similarly we&#39;re running a <code>/title</code> command as an example;</p><ul><li>a) when there are 4 or more players <code>4..</code></li><li>b) when there are 3 players or less <code>..3</code></li></ul><p>You can edit this as well to suit your need.</p><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-hidden="true">#</a></h2><ul><li>The first two commands in the system sets the FakePlayer name&#39;s score to 0 (here <code>onlinePlayers</code>) and from each loaded entity we want to track (here <code>type=player</code>) it will add a score to the specified FakePlayer name (here <code>onlinePlayers</code>)</li></ul><p>Now based on the values obtained we can use the <code>/execute if score</code> command to run our desired commands when certain values are met.</p><ul><li><strong><code>n</code></strong> any number n</li><li><strong><code>n..</code></strong> any number n and above</li><li><strong><code>..n</code></strong> any number n and below</li><li><strong><code>n1..n2</code></strong> any number n1 to any number n2.</li></ul>',10);function u(h,y,b,g,_,k){const t=r("CodeHeader");return i(),o("div",null,[m,s(t,null,{default:l(()=>[c("mcfunction")]),_:1}),p])}const w=n(d,[["render",u]]);export{x as __pageData,w as default};
