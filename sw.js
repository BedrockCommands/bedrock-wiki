if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.3287a98e.js",revision:null},{url:"assets/404.md.3287a98e.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.07aa551e.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.07aa551e.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.041dced1.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.041dced1.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.80cabbc3.js",revision:null},{url:"assets/animation-controllers_death-commands.md.80cabbc3.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.943399c9.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.943399c9.lean.js",revision:null},{url:"assets/animation-controllers_index.md.c8dd38cb.js",revision:null},{url:"assets/animation-controllers_index.md.c8dd38cb.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.81366473.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.81366473.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.542fb108.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.542fb108.lean.js",revision:null},{url:"assets/app.601d1d95.js",revision:null},{url:"assets/blocks_applying-effects.md.3bffbbc4.js",revision:null},{url:"assets/blocks_applying-effects.md.3bffbbc4.lean.js",revision:null},{url:"assets/blocks_block-materials.md.cf070d70.js",revision:null},{url:"assets/blocks_block-materials.md.cf070d70.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.a82f7484.js",revision:null},{url:"assets/blocks_block-shapes.md.a82f7484.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.bf6bc690.js",revision:null},{url:"assets/blocks_block-sounds.md.bf6bc690.lean.js",revision:null},{url:"assets/blocks_block-tags.md.a1d17146.js",revision:null},{url:"assets/blocks_block-tags.md.a1d17146.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.41f99011.js",revision:null},{url:"assets/blocks_block-texture-variation.md.41f99011.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.590fb299.js",revision:null},{url:"assets/blocks_blocks-16.md.590fb299.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.2cfcd334.js",revision:null},{url:"assets/blocks_blocks-intro.md.2cfcd334.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.c2120aae.js",revision:null},{url:"assets/blocks_custom-crops.md.c2120aae.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.5e858244.js",revision:null},{url:"assets/blocks_custom-fluids.md.5e858244.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.f390e717.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.f390e717.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.cfad08ca.js",revision:null},{url:"assets/blocks_custom-tree.md.cfad08ca.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.2ebfc511.js",revision:null},{url:"assets/blocks_fake-blocks.md.2ebfc511.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.899ed55d.js",revision:null},{url:"assets/blocks_flipbook-textures.md.899ed55d.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.9159280a.js",revision:null},{url:"assets/blocks_head-like-rotation.md.9159280a.lean.js",revision:null},{url:"assets/blocks_index.md.1d5cd28d.js",revision:null},{url:"assets/blocks_index.md.1d5cd28d.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.6cd407ff.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.6cd407ff.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.4e93ca5c.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.4e93ca5c.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.9fea5e52.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.9fea5e52.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.d45db7bf.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.d45db7bf.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.61b6195a.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.5dc11012.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.c430f4e4.js",revision:null},{url:"assets/commands_block-states.md.c430f4e4.lean.js",revision:null},{url:"assets/commands_entity-counter.md.31d6d665.js",revision:null},{url:"assets/commands_entity-counter.md.31d6d665.lean.js",revision:null},{url:"assets/commands_index.md.558f00f3.js",revision:null},{url:"assets/commands_index.md.558f00f3.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.70e4cf2e.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.70e4cf2e.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.97844f11.js",revision:null},{url:"assets/commands_mcfunctions.md.97844f11.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.28a15fd5.js",revision:null},{url:"assets/commands_nbt-commands.md.28a15fd5.lean.js",revision:null},{url:"assets/commands_new-execute.md.4f052952.js",revision:null},{url:"assets/commands_new-execute.md.4f052952.lean.js",revision:null},{url:"assets/commands_on-first-join.md.722cddd6.js",revision:null},{url:"assets/commands_on-first-join.md.722cddd6.lean.js",revision:null},{url:"assets/commands_on-player-death.md.00f76c4b.js",revision:null},{url:"assets/commands_on-player-death.md.00f76c4b.lean.js",revision:null},{url:"assets/commands_on-player-join.md.02f54394.js",revision:null},{url:"assets/commands_on-player-join.md.02f54394.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.77e7afa0.js",revision:null},{url:"assets/commands_on-player-leave.md.77e7afa0.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.6ec18c13.js",revision:null},{url:"assets/commands_on-player-respawn.md.6ec18c13.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.53e3b75f.js",revision:null},{url:"assets/commands_relative-coordinates.md.53e3b75f.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.c4ecbcf4.js",revision:null},{url:"assets/commands_scoreboard-operations.md.c4ecbcf4.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.8cd74714.js",revision:null},{url:"assets/commands_scoreboard-timers.md.8cd74714.lean.js",revision:null},{url:"assets/commands_selectors.md.bb4b0464.js",revision:null},{url:"assets/commands_selectors.md.bb4b0464.lean.js",revision:null},{url:"assets/commands_tellraw.md.5441a90f.js",revision:null},{url:"assets/commands_tellraw.md.5441a90f.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.f809237f.js",revision:null},{url:"assets/commands_tick_json-creations.md.f809237f.lean.js",revision:null},{url:"assets/commands_timers.md.541f779a.js",revision:null},{url:"assets/commands_timers.md.541f779a.lean.js",revision:null},{url:"assets/concepts_contents.md.95704e18.js",revision:null},{url:"assets/concepts_contents.md.95704e18.lean.js",revision:null},{url:"assets/concepts_emojis.md.94d20389.js",revision:null},{url:"assets/concepts_emojis.md.94d20389.lean.js",revision:null},{url:"assets/concepts_index.md.730b74f2.js",revision:null},{url:"assets/concepts_index.md.730b74f2.lean.js",revision:null},{url:"assets/concepts_molang.md.02b1436c.js",revision:null},{url:"assets/concepts_molang.md.02b1436c.lean.js",revision:null},{url:"assets/concepts_namespaces.md.9751abfb.js",revision:null},{url:"assets/concepts_namespaces.md.9751abfb.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.fc48b18e.js",revision:null},{url:"assets/concepts_overwriting-assets.md.fc48b18e.lean.js",revision:null},{url:"assets/concepts_shaders.md.a867503f.js",revision:null},{url:"assets/concepts_shaders.md.a867503f.lean.js",revision:null},{url:"assets/concepts_sounds.md.744d768d.js",revision:null},{url:"assets/concepts_sounds.md.744d768d.lean.js",revision:null},{url:"assets/concepts_subpacks.md.c2ea1b77.js",revision:null},{url:"assets/concepts_subpacks.md.c2ea1b77.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.e6cb16a8.js",revision:null},{url:"assets/concepts_text-and-translations.md.e6cb16a8.lean.js",revision:null},{url:"assets/concepts_textures-list.md.140acfb7.js",revision:null},{url:"assets/concepts_textures-list.md.140acfb7.lean.js",revision:null},{url:"assets/contribute-how-to.md.bbae802c.js",revision:null},{url:"assets/contribute-how-to.md.bbae802c.lean.js",revision:null},{url:"assets/contribute-style.md.fc9fb185.js",revision:null},{url:"assets/contribute-style.md.fc9fb185.lean.js",revision:null},{url:"assets/contribute.md.11eb9ba3.js",revision:null},{url:"assets/contribute.md.11eb9ba3.lean.js",revision:null},{url:"assets/discord.md.c7582248.js",revision:null},{url:"assets/discord.md.c7582248.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.970393ac.js",revision:null},{url:"assets/documentation_advanced-molang.md.970393ac.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.b01d9536.js",revision:null},{url:"assets/documentation_creative-categories.md.b01d9536.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.af84d3a7.js",revision:null},{url:"assets/documentation_fog-ids.md.af84d3a7.lean.js",revision:null},{url:"assets/documentation_index.md.c739e964.js",revision:null},{url:"assets/documentation_index.md.c739e964.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.5f4bba74.js",revision:null},{url:"assets/documentation_material-config-description.md.5f4bba74.lean.js",revision:null},{url:"assets/documentation_materials.md.9eabacd7.js",revision:null},{url:"assets/documentation_materials.md.9eabacd7.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.90a7d349.js",revision:null},{url:"assets/documentation_pack-structure.md.90a7d349.lean.js",revision:null},{url:"assets/documentation_projectiles.md.efa8d036.js",revision:null},{url:"assets/documentation_projectiles.md.efa8d036.lean.js",revision:null},{url:"assets/documentation_queries.md.efaacff4.js",revision:null},{url:"assets/documentation_queries.md.efaacff4.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.4c048e2c.js",revision:null},{url:"assets/documentation_shared-constructs.md.4c048e2c.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.e6937573.js",revision:null},{url:"assets/documentation_sound-definitions.md.e6937573.lean.js",revision:null},{url:"assets/entities_boat-entities.md.2174a911.js",revision:null},{url:"assets/entities_boat-entities.md.2174a911.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.b37f499a.js",revision:null},{url:"assets/entities_detecting-other-entities.md.b37f499a.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.9c81d484.js",revision:null},{url:"assets/entities_disabling-team-damage.md.9c81d484.lean.js",revision:null},{url:"assets/entities_dummy-components.md.bce31742.js",revision:null},{url:"assets/entities_dummy-components.md.bce31742.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.7b406a0f.js",revision:null},{url:"assets/entities_dummy-entities.md.7b406a0f.lean.js",revision:null},{url:"assets/entities_entity-attack.md.b3f2986d.js",revision:null},{url:"assets/entities_entity-attack.md.b3f2986d.lean.js",revision:null},{url:"assets/entities_entity-events.md.f51dbb5f.js",revision:null},{url:"assets/entities_entity-events.md.f51dbb5f.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.18254915.js",revision:null},{url:"assets/entities_entity-holds-item.md.18254915.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.8ced56bf.js",revision:null},{url:"assets/entities_entity-intro-bp.md.8ced56bf.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.303123b0.js",revision:null},{url:"assets/entities_entity-intro-rp.md.303123b0.lean.js",revision:null},{url:"assets/entities_entity-movement.md.b5769695.js",revision:null},{url:"assets/entities_entity-movement.md.b5769695.lean.js",revision:null},{url:"assets/entities_entity-properties.md.c2909c37.js",revision:null},{url:"assets/entities_entity-properties.md.c2909c37.lean.js",revision:null},{url:"assets/entities_flying-entities.md.bee09636.js",revision:null},{url:"assets/entities_flying-entities.md.bee09636.lean.js",revision:null},{url:"assets/entities_index.md.c6022830.js",revision:null},{url:"assets/entities_index.md.c6022830.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.f2e3ac42.js",revision:null},{url:"assets/entities_introduction-to-aec.md.f2e3ac42.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.59bc9147.js",revision:null},{url:"assets/entities_invulnerable-entities.md.59bc9147.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.c717fdfd.js",revision:null},{url:"assets/entities_look-at-entity.md.c717fdfd.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.4f9fa18a.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.4f9fa18a.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.47dd7b41.js",revision:null},{url:"assets/entities_npc-dialogs.md.47dd7b41.lean.js",revision:null},{url:"assets/entities_render-controllers.md.a6731b4c.js",revision:null},{url:"assets/entities_render-controllers.md.a6731b4c.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.7805a94c.js",revision:null},{url:"assets/entities_runtime-identifier.md.7805a94c.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.7405512a.js",revision:null},{url:"assets/entities_sleeping-entities.md.7405512a.lean.js",revision:null},{url:"assets/entities_solid-entities.md.7a5786e0.js",revision:null},{url:"assets/entities_solid-entities.md.7a5786e0.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.659cf367.js",revision:null},{url:"assets/entities_spawn-rules.md.659cf367.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.d95da22c.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.d95da22c.lean.js",revision:null},{url:"assets/entities_timers.md.0df59881.js",revision:null},{url:"assets/entities_timers.md.0df59881.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.86e15652.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.86e15652.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.9c124c8b.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.9c124c8b.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.ec12c0d6.js",revision:null},{url:"assets/entities_village-mechanic.md.ec12c0d6.lean.js",revision:null},{url:"assets/entities_vuc-full.md.f2eef07d.lean.js",revision:null},{url:"assets/entities_vusr-full.md.03ee25e2.js",revision:null},{url:"assets/entities_vusr-full.md.03ee25e2.lean.js",revision:null},{url:"assets/graph-test.md.c5df5a56.js",revision:null},{url:"assets/graph-test.md.c5df5a56.lean.js",revision:null},{url:"assets/guide_addons.md.259219ac.js",revision:null},{url:"assets/guide_addons.md.259219ac.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.372d19bb.js",revision:null},{url:"assets/guide_advancedmanifest.md.372d19bb.lean.js",revision:null},{url:"assets/guide_blockbench.md.fbd939a2.js",revision:null},{url:"assets/guide_blockbench.md.fbd939a2.lean.js",revision:null},{url:"assets/guide_custom-entity.md.fcc9040e.js",revision:null},{url:"assets/guide_custom-entity.md.fcc9040e.lean.js",revision:null},{url:"assets/guide_custom-item.md.ca736528.js",revision:null},{url:"assets/guide_custom-item.md.ca736528.lean.js",revision:null},{url:"assets/guide_download-packs.md.719cecae.js",revision:null},{url:"assets/guide_download-packs.md.719cecae.lean.js",revision:null},{url:"assets/guide_format-version.md.1a79c587.js",revision:null},{url:"assets/guide_format-version.md.1a79c587.lean.js",revision:null},{url:"assets/guide_index.md.da7240ad.js",revision:null},{url:"assets/guide_index.md.da7240ad.lean.js",revision:null},{url:"assets/guide_introduction.md.cb62370a.js",revision:null},{url:"assets/guide_introduction.md.cb62370a.lean.js",revision:null},{url:"assets/guide_loot-table.md.bdaf65bd.js",revision:null},{url:"assets/guide_loot-table.md.bdaf65bd.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.bcddf04f.js",revision:null},{url:"assets/guide_project-setup-android.md.bcddf04f.lean.js",revision:null},{url:"assets/guide_project-setup.md.14f612eb.js",revision:null},{url:"assets/guide_project-setup.md.14f612eb.lean.js",revision:null},{url:"assets/guide_software-preparation.md.313a6fe7.js",revision:null},{url:"assets/guide_software-preparation.md.313a6fe7.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.57b9f10b.js",revision:null},{url:"assets/guide_troubleshooting.md.57b9f10b.lean.js",revision:null},{url:"assets/guide_understanding-json.md.7ece7123.js",revision:null},{url:"assets/guide_understanding-json.md.7ece7123.lean.js",revision:null},{url:"assets/hacktoberfest.md.73011e51.js",revision:null},{url:"assets/hacktoberfest.md.73011e51.lean.js",revision:null},{url:"assets/index.md.481cd31c.js",revision:null},{url:"assets/index.md.481cd31c.lean.js",revision:null},{url:"assets/items_attachables.md.afb1cd13.js",revision:null},{url:"assets/items_attachables.md.afb1cd13.lean.js",revision:null},{url:"assets/items_custom-armor.md.bb291d31.js",revision:null},{url:"assets/items_custom-armor.md.bb291d31.lean.js",revision:null},{url:"assets/items_custom-weapon.md.b15035f5.js",revision:null},{url:"assets/items_custom-weapon.md.b15035f5.lean.js",revision:null},{url:"assets/items_enchantments.md.02fd1989.js",revision:null},{url:"assets/items_enchantments.md.02fd1989.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.fe7d8897.js",revision:null},{url:"assets/items_equipped-item-commands.md.fe7d8897.lean.js",revision:null},{url:"assets/items_index.md.f1ad1d57.js",revision:null},{url:"assets/items_index.md.f1ad1d57.lean.js",revision:null},{url:"assets/items_item-identifiers.md.bb0c1d5a.js",revision:null},{url:"assets/items_item-identifiers.md.bb0c1d5a.lean.js",revision:null},{url:"assets/items_items-16.md.da26d42e.js",revision:null},{url:"assets/items_items-16.md.da26d42e.lean.js",revision:null},{url:"assets/items_items-intro.md.f5464891.js",revision:null},{url:"assets/items_items-intro.md.f5464891.lean.js",revision:null},{url:"assets/items_spawning-items.md.6450d42c.js",revision:null},{url:"assets/items_spawning-items.md.6450d42c.lean.js",revision:null},{url:"assets/items_spear.md.7fbc6cc4.js",revision:null},{url:"assets/items_spear.md.7fbc6cc4.lean.js",revision:null},{url:"assets/items_throwable.md.1578c750.js",revision:null},{url:"assets/items_throwable.md.1578c750.lean.js",revision:null},{url:"assets/items_tool-durability.md.adf997c6.js",revision:null},{url:"assets/items_tool-durability.md.adf997c6.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.1d185e42.js",revision:null},{url:"assets/items_troubleshooting-items.md.1d185e42.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.8b42265e.js",revision:null},{url:"assets/items_vanilla-usage-items.md.8b42265e.lean.js",revision:null},{url:"assets/items_vui-full.md.4b18389e.js",revision:null},{url:"assets/items_vui-full.md.4b18389e.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.396b8c0f.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.396b8c0f.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.60aa754e.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.60aa754e.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.6d160e12.js",revision:null},{url:"assets/json-ui_best-practices.md.6d160e12.lean.js",revision:null},{url:"assets/json-ui_index.md.b7448fb4.js",revision:null},{url:"assets/json-ui_index.md.b7448fb4.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.c52f608a.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.c52f608a.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.1a55d7a6.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.1a55d7a6.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.e9aad7ae.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.e9aad7ae.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.68c2152d.js",revision:null},{url:"assets/json-ui_string-to-number.md.68c2152d.lean.js",revision:null},{url:"assets/loot_index.md.2d2a8ba2.js",revision:null},{url:"assets/loot_index.md.2d2a8ba2.lean.js",revision:null},{url:"assets/loot_item-functions.md.cf820ec8.js",revision:null},{url:"assets/loot_item-functions.md.cf820ec8.lean.js",revision:null},{url:"assets/loot_loot-tables.md.6a83b346.js",revision:null},{url:"assets/loot_loot-tables.md.6a83b346.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.1d3cb3ac.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.1d3cb3ac.lean.js",revision:null},{url:"assets/loot_recipes.md.b04c2944.js",revision:null},{url:"assets/loot_recipes.md.b04c2944.lean.js",revision:null},{url:"assets/loot_trade-tables.md.62c4c48e.js",revision:null},{url:"assets/loot_trade-tables.md.62c4c48e.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.f26015ec.js",revision:null},{url:"assets/loot_trading-behavior.md.f26015ec.lean.js",revision:null},{url:"assets/meta_addon-performance.md.e59afda0.js",revision:null},{url:"assets/meta_addon-performance.md.e59afda0.lean.js",revision:null},{url:"assets/meta_index.md.5b849d96.js",revision:null},{url:"assets/meta_index.md.5b849d96.lean.js",revision:null},{url:"assets/meta_jq.md.7e73d32d.js",revision:null},{url:"assets/meta_jq.md.7e73d32d.lean.js",revision:null},{url:"assets/meta_style-guide.md.12b80a61.js",revision:null},{url:"assets/meta_style-guide.md.12b80a61.lean.js",revision:null},{url:"assets/meta_useful-links.md.b0db9b39.js",revision:null},{url:"assets/meta_useful-links.md.b0db9b39.lean.js",revision:null},{url:"assets/meta_using-schemas.md.3d59ce9b.js",revision:null},{url:"assets/meta_using-schemas.md.3d59ce9b.lean.js",revision:null},{url:"assets/meta_version-control.md.eeca1a70.js",revision:null},{url:"assets/meta_version-control.md.eeca1a70.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.c9319002.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.c9319002.lean.js",revision:null},{url:"assets/nbt_index.md.e6123525.js",revision:null},{url:"assets/nbt_index.md.e6123525.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.3a712bcf.js",revision:null},{url:"assets/nbt_mcstructure.md.3a712bcf.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.48628685.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.48628685.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.cb2e8b3a.js",revision:null},{url:"assets/nbt_step-by-step-example.md.cb2e8b3a.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.92bf0eb5.js",revision:null},{url:"assets/nbt_structure-limits.md.92bf0eb5.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.24e821d6.js",revision:null},{url:"assets/particles_disabling-particles.md.24e821d6.lean.js",revision:null},{url:"assets/particles_index.md.88e3d28e.js",revision:null},{url:"assets/particles_index.md.88e3d28e.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.3881ebd2.js",revision:null},{url:"assets/particles_particles-and-sounds.md.3881ebd2.lean.js",revision:null},{url:"assets/particles_particles.md.28e92d93.js",revision:null},{url:"assets/particles_particles.md.28e92d93.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.9245005b.js",revision:null},{url:"assets/particles_vanilla-particles.md.9245005b.lean.js",revision:null},{url:"assets/privacy.md.21f4a167.js",revision:null},{url:"assets/privacy.md.21f4a167.lean.js",revision:null},{url:"assets/scripting_api-environment.md.e72fbb24.js",revision:null},{url:"assets/scripting_api-environment.md.e72fbb24.lean.js",revision:null},{url:"assets/scripting_custom-command.md.068d547f.js",revision:null},{url:"assets/scripting_custom-command.md.068d547f.lean.js",revision:null},{url:"assets/scripting_game-tests.md.a0bcab13.js",revision:null},{url:"assets/scripting_game-tests.md.a0bcab13.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.bf1c4fbd.js",revision:null},{url:"assets/scripting_gametest-form.md.bf1c4fbd.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.efd6b67d.js",revision:null},{url:"assets/scripting_gametest-qna.md.efd6b67d.lean.js",revision:null},{url:"assets/scripting_index.md.32406b69.js",revision:null},{url:"assets/scripting_index.md.32406b69.lean.js",revision:null},{url:"assets/scripting_resources.md.46774b36.js",revision:null},{url:"assets/scripting_resources.md.46774b36.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.40af2ff9.js",revision:null},{url:"assets/scripting_saving-loading.md.40af2ff9.lean.js",revision:null},{url:"assets/scripting_script-net.md.49e1b235.js",revision:null},{url:"assets/scripting_script-net.md.49e1b235.lean.js",revision:null},{url:"assets/scripting_script-server.md.24e12664.js",revision:null},{url:"assets/scripting_script-server.md.24e12664.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.13022ab5.js",revision:null},{url:"assets/scripting_script-watchdog.md.13022ab5.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.6096d6fe.js",revision:null},{url:"assets/scripting_scripting-intro.md.6096d6fe.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.fd822a3f.js",revision:null},{url:"assets/scripting_starting-scripts.md.fd822a3f.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.44e416b8.js",revision:null},{url:"assets/scripting_troubleshooting.md.44e416b8.lean.js",revision:null},{url:"assets/scripting_typescript.md.01b1f69c.js",revision:null},{url:"assets/scripting_typescript.md.01b1f69c.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.8b0f3aba.js",revision:null},{url:"assets/scripting_what-is-script.md.8b0f3aba.lean.js",revision:null},{url:"assets/servers_index.md.a9377032.js",revision:null},{url:"assets/servers_index.md.a9377032.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.2a62b24d.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.2a62b24d.lean.js",revision:null},{url:"assets/servers_server-software.md.238ed5c2.js",revision:null},{url:"assets/servers_server-software.md.238ed5c2.lean.js",revision:null},{url:"assets/style.1c46c954.css",revision:null},{url:"assets/test.md.17c97192.js",revision:null},{url:"assets/test.md.17c97192.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.1ba41138.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.1ba41138.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.14a126af.js",revision:null},{url:"assets/visuals_animation-effects.md.14a126af.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.1b4e71c3.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.1b4e71c3.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.f79f8294.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.f79f8294.lean.js",revision:null},{url:"assets/visuals_death-animations.md.4a63ebd0.js",revision:null},{url:"assets/visuals_death-animations.md.4a63ebd0.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.03848d0b.js",revision:null},{url:"assets/visuals_glowing-texture.md.03848d0b.lean.js",revision:null},{url:"assets/visuals_index.md.30424a5b.js",revision:null},{url:"assets/visuals_index.md.30424a5b.lean.js",revision:null},{url:"assets/visuals_introduction.md.e149ff35.js",revision:null},{url:"assets/visuals_introduction.md.e149ff35.lean.js",revision:null},{url:"assets/visuals_leash-position.md.89e318c4.js",revision:null},{url:"assets/visuals_leash-position.md.89e318c4.lean.js",revision:null},{url:"assets/visuals_materials.md.f14a7259.js",revision:null},{url:"assets/visuals_materials.md.f14a7259.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.f7d99667.js",revision:null},{url:"assets/visuals_math-based-animations.md.f7d99667.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.90f7567c.js",revision:null},{url:"assets/visuals_player-geometry.md.90f7567c.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.88274cc9.js",revision:null},{url:"assets/visuals_remove-shadows.md.88274cc9.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.a84b67ec.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.a84b67ec.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.252bcc61.js",revision:null},{url:"assets/visuals_structure-presentation.md.252bcc61.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.8b428a0f.js",revision:null},{url:"assets/vr_editing-your-first-model.md.8b428a0f.lean.js",revision:null},{url:"assets/vr_index.md.5e9f9bd6.js",revision:null},{url:"assets/vr_index.md.5e9f9bd6.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.8383d530.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.8383d530.lean.js",revision:null},{url:"assets/vr_pack_setup.md.8391a501.js",revision:null},{url:"assets/vr_pack_setup.md.8391a501.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.92ee5ba4.js",revision:null},{url:"assets/world-generation_biome-tags.md.92ee5ba4.lean.js",revision:null},{url:"assets/world-generation_biomes.md.a2e7ef33.js",revision:null},{url:"assets/world-generation_biomes.md.a2e7ef33.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.720d1714.js",revision:null},{url:"assets/world-generation_custom-ores.md.720d1714.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.01cead06.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.01cead06.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.abb383a8.js",revision:null},{url:"assets/world-generation_feature-types.md.abb383a8.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.b0a24b2b.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.b0a24b2b.lean.js",revision:null},{url:"assets/world-generation_index.md.253c13fd.js",revision:null},{url:"assets/world-generation_index.md.253c13fd.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.e1e025a3.js",revision:null},{url:"assets/world-generation_structure-features.md.e1e025a3.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.98ad2aeb.js",revision:null},{url:"assets/world-generation_surface-builder.md.98ad2aeb.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.9bee8621.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.9bee8621.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
