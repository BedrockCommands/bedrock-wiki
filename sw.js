if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.9fe8968d.js",revision:null},{url:"assets/404.md.9fe8968d.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.2cd31fe9.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.2cd31fe9.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.498cd99a.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.498cd99a.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.0da647dd.js",revision:null},{url:"assets/animation-controllers_death-commands.md.0da647dd.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.3bf5b849.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.3bf5b849.lean.js",revision:null},{url:"assets/animation-controllers_index.md.09db6a70.js",revision:null},{url:"assets/animation-controllers_index.md.09db6a70.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.937b2141.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.937b2141.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.7e1d341c.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.7e1d341c.lean.js",revision:null},{url:"assets/app.74f25cc5.js",revision:null},{url:"assets/blocks_applying-effects.md.606c711c.js",revision:null},{url:"assets/blocks_applying-effects.md.606c711c.lean.js",revision:null},{url:"assets/blocks_block-materials.md.15b19546.js",revision:null},{url:"assets/blocks_block-materials.md.15b19546.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.03afe048.js",revision:null},{url:"assets/blocks_block-shapes.md.03afe048.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.de815c7d.js",revision:null},{url:"assets/blocks_block-sounds.md.de815c7d.lean.js",revision:null},{url:"assets/blocks_block-tags.md.9e141a2a.js",revision:null},{url:"assets/blocks_block-tags.md.9e141a2a.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.e4a1b7d8.js",revision:null},{url:"assets/blocks_block-texture-variation.md.e4a1b7d8.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.b61e662f.js",revision:null},{url:"assets/blocks_blocks-16.md.b61e662f.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.dbc4cfd9.js",revision:null},{url:"assets/blocks_blocks-intro.md.dbc4cfd9.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.d38e8415.js",revision:null},{url:"assets/blocks_custom-crops.md.d38e8415.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.de48512c.js",revision:null},{url:"assets/blocks_custom-fluids.md.de48512c.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.679fa9f5.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.679fa9f5.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.9c87c073.js",revision:null},{url:"assets/blocks_custom-tree.md.9c87c073.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.b722f798.js",revision:null},{url:"assets/blocks_fake-blocks.md.b722f798.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.f62ac0e6.js",revision:null},{url:"assets/blocks_flipbook-textures.md.f62ac0e6.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.9de4cc23.js",revision:null},{url:"assets/blocks_head-like-rotation.md.9de4cc23.lean.js",revision:null},{url:"assets/blocks_index.md.7768d012.js",revision:null},{url:"assets/blocks_index.md.7768d012.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.a68ac05d.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.a68ac05d.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.94b56645.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.94b56645.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.c1554930.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.c1554930.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.6359a7dc.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.6359a7dc.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.b751cf7d.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.a60f98af.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.84bf91b0.js",revision:null},{url:"assets/commands_block-states.md.84bf91b0.lean.js",revision:null},{url:"assets/commands_entity-counter.md.25447b2d.js",revision:null},{url:"assets/commands_entity-counter.md.25447b2d.lean.js",revision:null},{url:"assets/commands_index.md.62ed0ec5.js",revision:null},{url:"assets/commands_index.md.62ed0ec5.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.f84b8477.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.f84b8477.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.3fa1df61.js",revision:null},{url:"assets/commands_mcfunctions.md.3fa1df61.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.eecd90e7.js",revision:null},{url:"assets/commands_nbt-commands.md.eecd90e7.lean.js",revision:null},{url:"assets/commands_new-execute.md.ab87b207.js",revision:null},{url:"assets/commands_new-execute.md.ab87b207.lean.js",revision:null},{url:"assets/commands_on-first-join.md.03ab5660.js",revision:null},{url:"assets/commands_on-first-join.md.03ab5660.lean.js",revision:null},{url:"assets/commands_on-player-death.md.5571be1a.js",revision:null},{url:"assets/commands_on-player-death.md.5571be1a.lean.js",revision:null},{url:"assets/commands_on-player-join.md.5d20288d.js",revision:null},{url:"assets/commands_on-player-join.md.5d20288d.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.3bc83fbb.js",revision:null},{url:"assets/commands_on-player-leave.md.3bc83fbb.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.86639157.js",revision:null},{url:"assets/commands_on-player-respawn.md.86639157.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.d007f3a7.js",revision:null},{url:"assets/commands_relative-coordinates.md.d007f3a7.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.63939181.js",revision:null},{url:"assets/commands_scoreboard-operations.md.63939181.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.7ff4af89.js",revision:null},{url:"assets/commands_scoreboard-timers.md.7ff4af89.lean.js",revision:null},{url:"assets/commands_selectors.md.f685156e.js",revision:null},{url:"assets/commands_selectors.md.f685156e.lean.js",revision:null},{url:"assets/commands_tellraw.md.487f78dc.js",revision:null},{url:"assets/commands_tellraw.md.487f78dc.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.2b9058ae.js",revision:null},{url:"assets/commands_tick_json-creations.md.2b9058ae.lean.js",revision:null},{url:"assets/commands_timers.md.d6c3502c.js",revision:null},{url:"assets/commands_timers.md.d6c3502c.lean.js",revision:null},{url:"assets/concepts_contents.md.4a7df0f5.js",revision:null},{url:"assets/concepts_contents.md.4a7df0f5.lean.js",revision:null},{url:"assets/concepts_emojis.md.29040edd.js",revision:null},{url:"assets/concepts_emojis.md.29040edd.lean.js",revision:null},{url:"assets/concepts_index.md.0d28da18.js",revision:null},{url:"assets/concepts_index.md.0d28da18.lean.js",revision:null},{url:"assets/concepts_molang.md.a1a763b6.js",revision:null},{url:"assets/concepts_molang.md.a1a763b6.lean.js",revision:null},{url:"assets/concepts_namespaces.md.cf523211.js",revision:null},{url:"assets/concepts_namespaces.md.cf523211.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.d29f6272.js",revision:null},{url:"assets/concepts_overwriting-assets.md.d29f6272.lean.js",revision:null},{url:"assets/concepts_shaders.md.9088f687.js",revision:null},{url:"assets/concepts_shaders.md.9088f687.lean.js",revision:null},{url:"assets/concepts_sounds.md.ef733576.js",revision:null},{url:"assets/concepts_sounds.md.ef733576.lean.js",revision:null},{url:"assets/concepts_subpacks.md.f8f42372.js",revision:null},{url:"assets/concepts_subpacks.md.f8f42372.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.2b816c55.js",revision:null},{url:"assets/concepts_text-and-translations.md.2b816c55.lean.js",revision:null},{url:"assets/concepts_textures-list.md.9263dbea.js",revision:null},{url:"assets/concepts_textures-list.md.9263dbea.lean.js",revision:null},{url:"assets/contribute-how-to.md.b69d85f1.js",revision:null},{url:"assets/contribute-how-to.md.b69d85f1.lean.js",revision:null},{url:"assets/contribute-style.md.8b14a57d.js",revision:null},{url:"assets/contribute-style.md.8b14a57d.lean.js",revision:null},{url:"assets/contribute.md.d8d8b91b.js",revision:null},{url:"assets/contribute.md.d8d8b91b.lean.js",revision:null},{url:"assets/discord.md.858e0b41.js",revision:null},{url:"assets/discord.md.858e0b41.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.512e5350.js",revision:null},{url:"assets/documentation_advanced-molang.md.512e5350.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.461d5c8e.js",revision:null},{url:"assets/documentation_creative-categories.md.461d5c8e.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.297526b1.js",revision:null},{url:"assets/documentation_fog-ids.md.297526b1.lean.js",revision:null},{url:"assets/documentation_index.md.6f132a6c.js",revision:null},{url:"assets/documentation_index.md.6f132a6c.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.a096c85d.js",revision:null},{url:"assets/documentation_material-config-description.md.a096c85d.lean.js",revision:null},{url:"assets/documentation_materials.md.7130da88.js",revision:null},{url:"assets/documentation_materials.md.7130da88.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.6da73045.js",revision:null},{url:"assets/documentation_pack-structure.md.6da73045.lean.js",revision:null},{url:"assets/documentation_projectiles.md.e18179b8.js",revision:null},{url:"assets/documentation_projectiles.md.e18179b8.lean.js",revision:null},{url:"assets/documentation_queries.md.0963982b.js",revision:null},{url:"assets/documentation_queries.md.0963982b.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.cb066206.js",revision:null},{url:"assets/documentation_shared-constructs.md.cb066206.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.bcf956ce.js",revision:null},{url:"assets/documentation_sound-definitions.md.bcf956ce.lean.js",revision:null},{url:"assets/entities_boat-entities.md.316c7ebe.js",revision:null},{url:"assets/entities_boat-entities.md.316c7ebe.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.115b7153.js",revision:null},{url:"assets/entities_detecting-other-entities.md.115b7153.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.aacdaa51.js",revision:null},{url:"assets/entities_disabling-team-damage.md.aacdaa51.lean.js",revision:null},{url:"assets/entities_dummy-components.md.b9c85ad9.js",revision:null},{url:"assets/entities_dummy-components.md.b9c85ad9.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.1b52b5b3.js",revision:null},{url:"assets/entities_dummy-entities.md.1b52b5b3.lean.js",revision:null},{url:"assets/entities_entity-attack.md.c54d6221.js",revision:null},{url:"assets/entities_entity-attack.md.c54d6221.lean.js",revision:null},{url:"assets/entities_entity-events.md.c2d08e4e.js",revision:null},{url:"assets/entities_entity-events.md.c2d08e4e.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.d18d9f5c.js",revision:null},{url:"assets/entities_entity-holds-item.md.d18d9f5c.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.9ea9a935.js",revision:null},{url:"assets/entities_entity-intro-bp.md.9ea9a935.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.64896fe9.js",revision:null},{url:"assets/entities_entity-intro-rp.md.64896fe9.lean.js",revision:null},{url:"assets/entities_entity-movement.md.fd2c3985.js",revision:null},{url:"assets/entities_entity-movement.md.fd2c3985.lean.js",revision:null},{url:"assets/entities_entity-properties.md.fbb3b069.js",revision:null},{url:"assets/entities_entity-properties.md.fbb3b069.lean.js",revision:null},{url:"assets/entities_flying-entities.md.f8dfd9d5.js",revision:null},{url:"assets/entities_flying-entities.md.f8dfd9d5.lean.js",revision:null},{url:"assets/entities_index.md.86dd1dfa.js",revision:null},{url:"assets/entities_index.md.86dd1dfa.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.548d89fd.js",revision:null},{url:"assets/entities_introduction-to-aec.md.548d89fd.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.3aa17c2f.js",revision:null},{url:"assets/entities_invulnerable-entities.md.3aa17c2f.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.803dba6c.js",revision:null},{url:"assets/entities_look-at-entity.md.803dba6c.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.cef1bfa9.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.cef1bfa9.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.60d6f35f.js",revision:null},{url:"assets/entities_npc-dialogs.md.60d6f35f.lean.js",revision:null},{url:"assets/entities_render-controllers.md.979b043d.js",revision:null},{url:"assets/entities_render-controllers.md.979b043d.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.8457b572.js",revision:null},{url:"assets/entities_runtime-identifier.md.8457b572.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.3ae9f461.js",revision:null},{url:"assets/entities_sleeping-entities.md.3ae9f461.lean.js",revision:null},{url:"assets/entities_solid-entities.md.43bccbfd.js",revision:null},{url:"assets/entities_solid-entities.md.43bccbfd.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.21b75faa.js",revision:null},{url:"assets/entities_spawn-rules.md.21b75faa.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.9981be15.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.9981be15.lean.js",revision:null},{url:"assets/entities_timers.md.b3da9251.js",revision:null},{url:"assets/entities_timers.md.b3da9251.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.95784e54.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.95784e54.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.397f242f.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.397f242f.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.833d4ba2.js",revision:null},{url:"assets/entities_village-mechanic.md.833d4ba2.lean.js",revision:null},{url:"assets/entities_vuc-full.md.df499481.lean.js",revision:null},{url:"assets/entities_vusr-full.md.211e969f.js",revision:null},{url:"assets/entities_vusr-full.md.211e969f.lean.js",revision:null},{url:"assets/graph-test.md.aab84942.js",revision:null},{url:"assets/graph-test.md.aab84942.lean.js",revision:null},{url:"assets/guide_addons.md.38f365bb.js",revision:null},{url:"assets/guide_addons.md.38f365bb.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.5a802962.js",revision:null},{url:"assets/guide_advancedmanifest.md.5a802962.lean.js",revision:null},{url:"assets/guide_blockbench.md.a5371728.js",revision:null},{url:"assets/guide_blockbench.md.a5371728.lean.js",revision:null},{url:"assets/guide_custom-entity.md.6d07e767.js",revision:null},{url:"assets/guide_custom-entity.md.6d07e767.lean.js",revision:null},{url:"assets/guide_custom-item.md.2ff4622b.js",revision:null},{url:"assets/guide_custom-item.md.2ff4622b.lean.js",revision:null},{url:"assets/guide_download-packs.md.88e90303.js",revision:null},{url:"assets/guide_download-packs.md.88e90303.lean.js",revision:null},{url:"assets/guide_format-version.md.cb287ab1.js",revision:null},{url:"assets/guide_format-version.md.cb287ab1.lean.js",revision:null},{url:"assets/guide_index.md.d9ccd52b.js",revision:null},{url:"assets/guide_index.md.d9ccd52b.lean.js",revision:null},{url:"assets/guide_introduction.md.84da11b3.js",revision:null},{url:"assets/guide_introduction.md.84da11b3.lean.js",revision:null},{url:"assets/guide_loot-table.md.ad23d72b.js",revision:null},{url:"assets/guide_loot-table.md.ad23d72b.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.2e35c06b.js",revision:null},{url:"assets/guide_project-setup-android.md.2e35c06b.lean.js",revision:null},{url:"assets/guide_project-setup.md.fb104789.js",revision:null},{url:"assets/guide_project-setup.md.fb104789.lean.js",revision:null},{url:"assets/guide_software-preparation.md.2496ba07.js",revision:null},{url:"assets/guide_software-preparation.md.2496ba07.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.063f648f.js",revision:null},{url:"assets/guide_troubleshooting.md.063f648f.lean.js",revision:null},{url:"assets/guide_understanding-json.md.de6321d5.js",revision:null},{url:"assets/guide_understanding-json.md.de6321d5.lean.js",revision:null},{url:"assets/hacktoberfest.md.0ad4853f.js",revision:null},{url:"assets/hacktoberfest.md.0ad4853f.lean.js",revision:null},{url:"assets/index.md.ccf7f1ec.js",revision:null},{url:"assets/index.md.ccf7f1ec.lean.js",revision:null},{url:"assets/items_attachables.md.f34ed4d6.js",revision:null},{url:"assets/items_attachables.md.f34ed4d6.lean.js",revision:null},{url:"assets/items_custom-armor.md.d7d44597.js",revision:null},{url:"assets/items_custom-armor.md.d7d44597.lean.js",revision:null},{url:"assets/items_custom-weapon.md.dd9b3cc2.js",revision:null},{url:"assets/items_custom-weapon.md.dd9b3cc2.lean.js",revision:null},{url:"assets/items_enchantments.md.44e7d216.js",revision:null},{url:"assets/items_enchantments.md.44e7d216.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.860114e7.js",revision:null},{url:"assets/items_equipped-item-commands.md.860114e7.lean.js",revision:null},{url:"assets/items_index.md.985b3061.js",revision:null},{url:"assets/items_index.md.985b3061.lean.js",revision:null},{url:"assets/items_item-identifiers.md.dc81d5c5.js",revision:null},{url:"assets/items_item-identifiers.md.dc81d5c5.lean.js",revision:null},{url:"assets/items_items-16.md.dd9d5f49.js",revision:null},{url:"assets/items_items-16.md.dd9d5f49.lean.js",revision:null},{url:"assets/items_items-intro.md.a3a7e02c.js",revision:null},{url:"assets/items_items-intro.md.a3a7e02c.lean.js",revision:null},{url:"assets/items_spawning-items.md.3e470853.js",revision:null},{url:"assets/items_spawning-items.md.3e470853.lean.js",revision:null},{url:"assets/items_spear.md.3d9aa2f8.js",revision:null},{url:"assets/items_spear.md.3d9aa2f8.lean.js",revision:null},{url:"assets/items_throwable.md.708451ff.js",revision:null},{url:"assets/items_throwable.md.708451ff.lean.js",revision:null},{url:"assets/items_tool-durability.md.9c6d942d.js",revision:null},{url:"assets/items_tool-durability.md.9c6d942d.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.8b596348.js",revision:null},{url:"assets/items_troubleshooting-items.md.8b596348.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.d641e69c.js",revision:null},{url:"assets/items_vanilla-usage-items.md.d641e69c.lean.js",revision:null},{url:"assets/items_vui-full.md.0a47cf73.js",revision:null},{url:"assets/items_vui-full.md.0a47cf73.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.4c5218bf.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.4c5218bf.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.afb8a44a.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.afb8a44a.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.e2aaba43.js",revision:null},{url:"assets/json-ui_best-practices.md.e2aaba43.lean.js",revision:null},{url:"assets/json-ui_index.md.e7452e43.js",revision:null},{url:"assets/json-ui_index.md.e7452e43.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.9a1d8af8.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.9a1d8af8.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.b850acbb.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.b850acbb.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.16193a45.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.16193a45.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.1cd882c6.js",revision:null},{url:"assets/json-ui_string-to-number.md.1cd882c6.lean.js",revision:null},{url:"assets/loot_index.md.d3b8f232.js",revision:null},{url:"assets/loot_index.md.d3b8f232.lean.js",revision:null},{url:"assets/loot_item-functions.md.98b699d7.js",revision:null},{url:"assets/loot_item-functions.md.98b699d7.lean.js",revision:null},{url:"assets/loot_loot-tables.md.e9ffd620.js",revision:null},{url:"assets/loot_loot-tables.md.e9ffd620.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.eaae188a.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.eaae188a.lean.js",revision:null},{url:"assets/loot_recipes.md.598b299d.js",revision:null},{url:"assets/loot_recipes.md.598b299d.lean.js",revision:null},{url:"assets/loot_trade-tables.md.2fa1051b.js",revision:null},{url:"assets/loot_trade-tables.md.2fa1051b.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.eb445c92.js",revision:null},{url:"assets/loot_trading-behavior.md.eb445c92.lean.js",revision:null},{url:"assets/meta_addon-performance.md.c864fd6b.js",revision:null},{url:"assets/meta_addon-performance.md.c864fd6b.lean.js",revision:null},{url:"assets/meta_index.md.ea71a320.js",revision:null},{url:"assets/meta_index.md.ea71a320.lean.js",revision:null},{url:"assets/meta_jq.md.9caa7c15.js",revision:null},{url:"assets/meta_jq.md.9caa7c15.lean.js",revision:null},{url:"assets/meta_style-guide.md.92374cf9.js",revision:null},{url:"assets/meta_style-guide.md.92374cf9.lean.js",revision:null},{url:"assets/meta_useful-links.md.0a0f776b.js",revision:null},{url:"assets/meta_useful-links.md.0a0f776b.lean.js",revision:null},{url:"assets/meta_using-schemas.md.a243aaea.js",revision:null},{url:"assets/meta_using-schemas.md.a243aaea.lean.js",revision:null},{url:"assets/meta_version-control.md.95e5f388.js",revision:null},{url:"assets/meta_version-control.md.95e5f388.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.6034a12c.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.6034a12c.lean.js",revision:null},{url:"assets/nbt_index.md.eac722e5.js",revision:null},{url:"assets/nbt_index.md.eac722e5.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.b23fca9c.js",revision:null},{url:"assets/nbt_mcstructure.md.b23fca9c.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.ccd71328.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.ccd71328.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.80e305c4.js",revision:null},{url:"assets/nbt_step-by-step-example.md.80e305c4.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.2ef047ec.js",revision:null},{url:"assets/nbt_structure-limits.md.2ef047ec.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.f1b6f28e.js",revision:null},{url:"assets/particles_disabling-particles.md.f1b6f28e.lean.js",revision:null},{url:"assets/particles_index.md.58442dfc.js",revision:null},{url:"assets/particles_index.md.58442dfc.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.8191af0a.js",revision:null},{url:"assets/particles_particles-and-sounds.md.8191af0a.lean.js",revision:null},{url:"assets/particles_particles.md.f931bb15.js",revision:null},{url:"assets/particles_particles.md.f931bb15.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.061ba325.js",revision:null},{url:"assets/particles_vanilla-particles.md.061ba325.lean.js",revision:null},{url:"assets/privacy.md.174dba1e.js",revision:null},{url:"assets/privacy.md.174dba1e.lean.js",revision:null},{url:"assets/scripting_api-environment.md.067aacb9.js",revision:null},{url:"assets/scripting_api-environment.md.067aacb9.lean.js",revision:null},{url:"assets/scripting_custom-command.md.03b0315c.js",revision:null},{url:"assets/scripting_custom-command.md.03b0315c.lean.js",revision:null},{url:"assets/scripting_game-tests.md.1d3172e5.js",revision:null},{url:"assets/scripting_game-tests.md.1d3172e5.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.273f7c1a.js",revision:null},{url:"assets/scripting_gametest-form.md.273f7c1a.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.0caafd78.js",revision:null},{url:"assets/scripting_gametest-qna.md.0caafd78.lean.js",revision:null},{url:"assets/scripting_index.md.a3c23a55.js",revision:null},{url:"assets/scripting_index.md.a3c23a55.lean.js",revision:null},{url:"assets/scripting_resources.md.c6579b03.js",revision:null},{url:"assets/scripting_resources.md.c6579b03.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.a31db496.js",revision:null},{url:"assets/scripting_saving-loading.md.a31db496.lean.js",revision:null},{url:"assets/scripting_script-net.md.4bc7a111.js",revision:null},{url:"assets/scripting_script-net.md.4bc7a111.lean.js",revision:null},{url:"assets/scripting_script-server.md.dd4e4844.js",revision:null},{url:"assets/scripting_script-server.md.dd4e4844.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.79fe09f4.js",revision:null},{url:"assets/scripting_script-watchdog.md.79fe09f4.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.d2a6b9fc.js",revision:null},{url:"assets/scripting_scripting-intro.md.d2a6b9fc.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.e59bd1e6.js",revision:null},{url:"assets/scripting_starting-scripts.md.e59bd1e6.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.7ecab9b6.js",revision:null},{url:"assets/scripting_troubleshooting.md.7ecab9b6.lean.js",revision:null},{url:"assets/scripting_typescript.md.e72e520c.js",revision:null},{url:"assets/scripting_typescript.md.e72e520c.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.0212173a.js",revision:null},{url:"assets/scripting_what-is-script.md.0212173a.lean.js",revision:null},{url:"assets/servers_index.md.da58d1da.js",revision:null},{url:"assets/servers_index.md.da58d1da.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.a94f81e3.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.a94f81e3.lean.js",revision:null},{url:"assets/servers_server-software.md.0cb5a5c7.js",revision:null},{url:"assets/servers_server-software.md.0cb5a5c7.lean.js",revision:null},{url:"assets/style.1c46c954.css",revision:null},{url:"assets/test.md.3f5f6a9e.js",revision:null},{url:"assets/test.md.3f5f6a9e.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.e6a2c348.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.e6a2c348.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.1d2718a6.js",revision:null},{url:"assets/visuals_animation-effects.md.1d2718a6.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.6906df6c.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.6906df6c.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.8b035626.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.8b035626.lean.js",revision:null},{url:"assets/visuals_death-animations.md.7fa65a0c.js",revision:null},{url:"assets/visuals_death-animations.md.7fa65a0c.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.549bbe00.js",revision:null},{url:"assets/visuals_glowing-texture.md.549bbe00.lean.js",revision:null},{url:"assets/visuals_index.md.851a1c66.js",revision:null},{url:"assets/visuals_index.md.851a1c66.lean.js",revision:null},{url:"assets/visuals_introduction.md.414d299b.js",revision:null},{url:"assets/visuals_introduction.md.414d299b.lean.js",revision:null},{url:"assets/visuals_leash-position.md.c936d756.js",revision:null},{url:"assets/visuals_leash-position.md.c936d756.lean.js",revision:null},{url:"assets/visuals_materials.md.953daceb.js",revision:null},{url:"assets/visuals_materials.md.953daceb.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.c0c7ffc6.js",revision:null},{url:"assets/visuals_math-based-animations.md.c0c7ffc6.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.092b8c3b.js",revision:null},{url:"assets/visuals_player-geometry.md.092b8c3b.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.2a849dda.js",revision:null},{url:"assets/visuals_remove-shadows.md.2a849dda.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.74f46b02.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.74f46b02.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.d7a7dedb.js",revision:null},{url:"assets/visuals_structure-presentation.md.d7a7dedb.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.ad13070c.js",revision:null},{url:"assets/vr_editing-your-first-model.md.ad13070c.lean.js",revision:null},{url:"assets/vr_index.md.d2f60884.js",revision:null},{url:"assets/vr_index.md.d2f60884.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.d7722a41.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.d7722a41.lean.js",revision:null},{url:"assets/vr_pack_setup.md.09575fb8.js",revision:null},{url:"assets/vr_pack_setup.md.09575fb8.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.8914a31d.js",revision:null},{url:"assets/world-generation_biome-tags.md.8914a31d.lean.js",revision:null},{url:"assets/world-generation_biomes.md.ad04a668.js",revision:null},{url:"assets/world-generation_biomes.md.ad04a668.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.541202a1.js",revision:null},{url:"assets/world-generation_custom-ores.md.541202a1.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.568cea04.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.568cea04.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.d6582cae.js",revision:null},{url:"assets/world-generation_feature-types.md.d6582cae.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.18cccfa1.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.18cccfa1.lean.js",revision:null},{url:"assets/world-generation_index.md.b255cebe.js",revision:null},{url:"assets/world-generation_index.md.b255cebe.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.b2051908.js",revision:null},{url:"assets/world-generation_structure-features.md.b2051908.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.3c86b374.js",revision:null},{url:"assets/world-generation_surface-builder.md.3c86b374.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.76c01391.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.76c01391.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
