if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.eebc8d69.js",revision:null},{url:"assets/404.md.eebc8d69.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.7fddc86f.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.7fddc86f.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.cb7193d5.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.cb7193d5.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.71e4c150.js",revision:null},{url:"assets/animation-controllers_death-commands.md.71e4c150.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.ac35dc9b.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.ac35dc9b.lean.js",revision:null},{url:"assets/animation-controllers_index.md.81a7d731.js",revision:null},{url:"assets/animation-controllers_index.md.81a7d731.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.bb51561d.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.bb51561d.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.a9712c00.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.a9712c00.lean.js",revision:null},{url:"assets/app.40504be5.js",revision:null},{url:"assets/blocks_applying-effects.md.75eed301.js",revision:null},{url:"assets/blocks_applying-effects.md.75eed301.lean.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.260590df.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.260590df.lean.js",revision:null},{url:"assets/blocks_block-components.md.07b5dff7.js",revision:null},{url:"assets/blocks_block-components.md.07b5dff7.lean.js",revision:null},{url:"assets/blocks_block-culling.md.323da2c2.js",revision:null},{url:"assets/blocks_block-culling.md.323da2c2.lean.js",revision:null},{url:"assets/blocks_block-events.md.6a2a1368.js",revision:null},{url:"assets/blocks_block-events.md.6a2a1368.lean.js",revision:null},{url:"assets/blocks_block-models.md.aed90c0e.js",revision:null},{url:"assets/blocks_block-models.md.aed90c0e.lean.js",revision:null},{url:"assets/blocks_block-permutations.md.143ff01b.js",revision:null},{url:"assets/blocks_block-permutations.md.143ff01b.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.6676aa45.js",revision:null},{url:"assets/blocks_block-shapes.md.6676aa45.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.37dbc696.js",revision:null},{url:"assets/blocks_block-sounds.md.37dbc696.lean.js",revision:null},{url:"assets/blocks_block-states.md.0ed0366e.js",revision:null},{url:"assets/blocks_block-states.md.0ed0366e.lean.js",revision:null},{url:"assets/blocks_block-tags.md.a55363e0.js",revision:null},{url:"assets/blocks_block-tags.md.a55363e0.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.518c378e.js",revision:null},{url:"assets/blocks_block-texture-variation.md.518c378e.lean.js",revision:null},{url:"assets/blocks_block-traits.md.50735687.js",revision:null},{url:"assets/blocks_block-traits.md.50735687.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.5d08567b.js",revision:null},{url:"assets/blocks_blocks-intro.md.5d08567b.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.4d5b6016.js",revision:null},{url:"assets/blocks_custom-crops.md.4d5b6016.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.caf35d59.js",revision:null},{url:"assets/blocks_custom-fluids.md.caf35d59.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.753381ce.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.753381ce.lean.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.303e28c0.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.303e28c0.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.d5c1fb5d.js",revision:null},{url:"assets/blocks_custom-slabs.md.d5c1fb5d.lean.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.377e896d.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.377e896d.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.edc7c4fe.js",revision:null},{url:"assets/blocks_custom-trees.md.edc7c4fe.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.66c4b8da.js",revision:null},{url:"assets/blocks_fake-blocks.md.66c4b8da.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.9af9fd5e.js",revision:null},{url:"assets/blocks_flipbook-textures.md.9af9fd5e.lean.js",revision:null},{url:"assets/blocks_index.md.570e3e8a.js",revision:null},{url:"assets/blocks_index.md.570e3e8a.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.b1afe064.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.b1afe064.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.048f1a22.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.048f1a22.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.ebc2aff2.js",revision:null},{url:"assets/blocks_precise-interaction.md.ebc2aff2.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.04607a09.js",revision:null},{url:"assets/blocks_precise-rotation.md.04607a09.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.f205fe13.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.f205fe13.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.e4e9c701.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.e4e9c701.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/6.07d6a5aa.js",revision:null},{url:"assets/chunks/7.caf9e800.js",revision:null},{url:"assets/chunks/AlgoliaSearch.75aa0944.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.ee6b200a.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-entities.md.c0879695.js",revision:null},{url:"assets/commands_block-entities.md.c0879695.lean.js",revision:null},{url:"assets/commands_block-states.md.47cf80ad.js",revision:null},{url:"assets/commands_block-states.md.47cf80ad.lean.js",revision:null},{url:"assets/commands_damage.md.d752000c.js",revision:null},{url:"assets/commands_damage.md.d752000c.lean.js",revision:null},{url:"assets/commands_entity-counter.md.b44f063d.js",revision:null},{url:"assets/commands_entity-counter.md.b44f063d.lean.js",revision:null},{url:"assets/commands_index.md.f650e4fc.js",revision:null},{url:"assets/commands_index.md.f650e4fc.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.4486d353.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.4486d353.lean.js",revision:null},{url:"assets/commands_logic-gates.md.25362827.js",revision:null},{url:"assets/commands_logic-gates.md.25362827.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.7a7301e8.js",revision:null},{url:"assets/commands_mcfunctions.md.7a7301e8.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.b2b74c7b.js",revision:null},{url:"assets/commands_nbt-commands.md.b2b74c7b.lean.js",revision:null},{url:"assets/commands_new-execute.md.54e21b29.js",revision:null},{url:"assets/commands_new-execute.md.54e21b29.lean.js",revision:null},{url:"assets/commands_on-first-join.md.9b43e09b.js",revision:null},{url:"assets/commands_on-first-join.md.9b43e09b.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.af3075f8.js",revision:null},{url:"assets/commands_on-first-world-load.md.af3075f8.lean.js",revision:null},{url:"assets/commands_on-player-death.md.9d0111e7.js",revision:null},{url:"assets/commands_on-player-death.md.9d0111e7.lean.js",revision:null},{url:"assets/commands_on-player-join.md.fe364c6e.js",revision:null},{url:"assets/commands_on-player-join.md.fe364c6e.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.23afc483.js",revision:null},{url:"assets/commands_on-player-leave.md.23afc483.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.e6dcedb2.js",revision:null},{url:"assets/commands_on-player-respawn.md.e6dcedb2.lean.js",revision:null},{url:"assets/commands_orbital-camera.md.3377710a.js",revision:null},{url:"assets/commands_orbital-camera.md.3377710a.lean.js",revision:null},{url:"assets/commands_playsound.md.29dd89d6.js",revision:null},{url:"assets/commands_playsound.md.29dd89d6.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.ce2de58e.js",revision:null},{url:"assets/commands_relative-coordinates.md.ce2de58e.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.fcc72ffc.js",revision:null},{url:"assets/commands_scoreboard-operations.md.fcc72ffc.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.75151867.js",revision:null},{url:"assets/commands_scoreboard-timers.md.75151867.lean.js",revision:null},{url:"assets/commands_selectors.md.39c1debd.js",revision:null},{url:"assets/commands_selectors.md.39c1debd.lean.js",revision:null},{url:"assets/commands_states.md.7fadfd6c.js",revision:null},{url:"assets/commands_states.md.7fadfd6c.lean.js",revision:null},{url:"assets/commands_tellraw.md.af05ce14.js",revision:null},{url:"assets/commands_tellraw.md.af05ce14.lean.js",revision:null},{url:"assets/concepts_contents.md.3c80fe0e.js",revision:null},{url:"assets/concepts_contents.md.3c80fe0e.lean.js",revision:null},{url:"assets/concepts_emojis.md.4ac4437c.js",revision:null},{url:"assets/concepts_emojis.md.4ac4437c.lean.js",revision:null},{url:"assets/concepts_index.md.c200edec.js",revision:null},{url:"assets/concepts_index.md.c200edec.lean.js",revision:null},{url:"assets/concepts_molang.md.a45cf7d4.js",revision:null},{url:"assets/concepts_molang.md.a45cf7d4.lean.js",revision:null},{url:"assets/concepts_namespaces.md.6736a8ba.js",revision:null},{url:"assets/concepts_namespaces.md.6736a8ba.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.45d2f66f.js",revision:null},{url:"assets/concepts_overwriting-assets.md.45d2f66f.lean.js",revision:null},{url:"assets/concepts_shaders.md.16c9e266.js",revision:null},{url:"assets/concepts_shaders.md.16c9e266.lean.js",revision:null},{url:"assets/concepts_sounds.md.04a6f27c.js",revision:null},{url:"assets/concepts_sounds.md.04a6f27c.lean.js",revision:null},{url:"assets/concepts_subpacks.md.25680483.js",revision:null},{url:"assets/concepts_subpacks.md.25680483.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.33172e6b.js",revision:null},{url:"assets/concepts_text-and-translations.md.33172e6b.lean.js",revision:null},{url:"assets/concepts_textures-list.md.5fe1257c.js",revision:null},{url:"assets/concepts_textures-list.md.5fe1257c.lean.js",revision:null},{url:"assets/contribute-how-to.md.96c9ea97.js",revision:null},{url:"assets/contribute-how-to.md.96c9ea97.lean.js",revision:null},{url:"assets/contribute-style.md.51306ac7.js",revision:null},{url:"assets/contribute-style.md.51306ac7.lean.js",revision:null},{url:"assets/contribute.md.4e8b3e19.js",revision:null},{url:"assets/contribute.md.4e8b3e19.lean.js",revision:null},{url:"assets/discord.md.6ff41227.js",revision:null},{url:"assets/discord.md.6ff41227.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.a2094ea6.js",revision:null},{url:"assets/documentation_advanced-molang.md.a2094ea6.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.01ea9898.js",revision:null},{url:"assets/documentation_creative-categories.md.01ea9898.lean.js",revision:null},{url:"assets/documentation_file-types.md.ea0477e7.js",revision:null},{url:"assets/documentation_file-types.md.ea0477e7.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.09f68807.js",revision:null},{url:"assets/documentation_fog-ids.md.09f68807.lean.js",revision:null},{url:"assets/documentation_index.md.7aa31597.js",revision:null},{url:"assets/documentation_index.md.7aa31597.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.4d36f77a.js",revision:null},{url:"assets/documentation_material-config-description.md.4d36f77a.lean.js",revision:null},{url:"assets/documentation_materials.md.9cf8d5cb.js",revision:null},{url:"assets/documentation_materials.md.9cf8d5cb.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.d2e7dd17.js",revision:null},{url:"assets/documentation_pack-structure.md.d2e7dd17.lean.js",revision:null},{url:"assets/documentation_projectiles.md.77a39aff.js",revision:null},{url:"assets/documentation_projectiles.md.77a39aff.lean.js",revision:null},{url:"assets/documentation_queries.md.fa0d0676.js",revision:null},{url:"assets/documentation_queries.md.fa0d0676.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.44877ee2.js",revision:null},{url:"assets/documentation_shared-constructs.md.44877ee2.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.1278555b.js",revision:null},{url:"assets/documentation_sound-definitions.md.1278555b.lean.js",revision:null},{url:"assets/entities_boat-entities.md.071b9aec.js",revision:null},{url:"assets/entities_boat-entities.md.071b9aec.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.ce642dbc.js",revision:null},{url:"assets/entities_detecting-other-entities.md.ce642dbc.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.f2fccc19.js",revision:null},{url:"assets/entities_disabling-team-damage.md.f2fccc19.lean.js",revision:null},{url:"assets/entities_dummy-components.md.2d0f00af.js",revision:null},{url:"assets/entities_dummy-components.md.2d0f00af.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.850afb75.js",revision:null},{url:"assets/entities_dummy-entities.md.850afb75.lean.js",revision:null},{url:"assets/entities_entity-attack.md.788ceb17.js",revision:null},{url:"assets/entities_entity-attack.md.788ceb17.lean.js",revision:null},{url:"assets/entities_entity-events.md.05e881dc.js",revision:null},{url:"assets/entities_entity-events.md.05e881dc.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.18b91aab.js",revision:null},{url:"assets/entities_entity-holds-item.md.18b91aab.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.176557c7.js",revision:null},{url:"assets/entities_entity-intro-bp.md.176557c7.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.234499bc.js",revision:null},{url:"assets/entities_entity-intro-rp.md.234499bc.lean.js",revision:null},{url:"assets/entities_entity-movement.md.85f74a8e.js",revision:null},{url:"assets/entities_entity-movement.md.85f74a8e.lean.js",revision:null},{url:"assets/entities_entity-properties.md.3002ed29.js",revision:null},{url:"assets/entities_entity-properties.md.3002ed29.lean.js",revision:null},{url:"assets/entities_entity-transforms.md.513c5672.js",revision:null},{url:"assets/entities_entity-transforms.md.513c5672.lean.js",revision:null},{url:"assets/entities_flying-entities.md.992a6dda.js",revision:null},{url:"assets/entities_flying-entities.md.992a6dda.lean.js",revision:null},{url:"assets/entities_index.md.01d96ae3.js",revision:null},{url:"assets/entities_index.md.01d96ae3.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.dc5b5f28.js",revision:null},{url:"assets/entities_introduction-to-aec.md.dc5b5f28.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.89c67f95.js",revision:null},{url:"assets/entities_invulnerable-entities.md.89c67f95.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.d3c5bf4b.js",revision:null},{url:"assets/entities_look-at-entity.md.d3c5bf4b.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.79f13e93.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.79f13e93.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.d0338aea.js",revision:null},{url:"assets/entities_npc-dialogs.md.d0338aea.lean.js",revision:null},{url:"assets/entities_render-controllers.md.c7ecc147.js",revision:null},{url:"assets/entities_render-controllers.md.c7ecc147.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.b51f27d2.js",revision:null},{url:"assets/entities_runtime-identifier.md.b51f27d2.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.d14d8d42.js",revision:null},{url:"assets/entities_sleeping-entities.md.d14d8d42.lean.js",revision:null},{url:"assets/entities_solid-entities.md.4bfa3130.js",revision:null},{url:"assets/entities_solid-entities.md.4bfa3130.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.56481301.js",revision:null},{url:"assets/entities_spawn-rules.md.56481301.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.116dcb96.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.116dcb96.lean.js",revision:null},{url:"assets/entities_timers.md.da49b31f.js",revision:null},{url:"assets/entities_timers.md.da49b31f.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.b8e7a0e3.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.b8e7a0e3.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.93d536f2.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.93d536f2.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.5ac343b8.js",revision:null},{url:"assets/entities_village-mechanic.md.5ac343b8.lean.js",revision:null},{url:"assets/entities_vuc-full.md.2ee734e7.lean.js",revision:null},{url:"assets/entities_vusr-full.md.baa1ec6c.js",revision:null},{url:"assets/entities_vusr-full.md.baa1ec6c.lean.js",revision:null},{url:"assets/graph-test.md.4df8d663.js",revision:null},{url:"assets/graph-test.md.4df8d663.lean.js",revision:null},{url:"assets/guide_addons.md.bafb1e4b.js",revision:null},{url:"assets/guide_addons.md.bafb1e4b.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.c9d3927b.js",revision:null},{url:"assets/guide_advancedmanifest.md.c9d3927b.lean.js",revision:null},{url:"assets/guide_blockbench.md.aa7a19be.js",revision:null},{url:"assets/guide_blockbench.md.aa7a19be.lean.js",revision:null},{url:"assets/guide_custom-entity.md.389a1c81.js",revision:null},{url:"assets/guide_custom-entity.md.389a1c81.lean.js",revision:null},{url:"assets/guide_custom-item.md.5b7298b4.js",revision:null},{url:"assets/guide_custom-item.md.5b7298b4.lean.js",revision:null},{url:"assets/guide_download-packs.md.69a97900.js",revision:null},{url:"assets/guide_download-packs.md.69a97900.lean.js",revision:null},{url:"assets/guide_format-version.md.547e7bf4.js",revision:null},{url:"assets/guide_format-version.md.547e7bf4.lean.js",revision:null},{url:"assets/guide_index.md.481c6b57.js",revision:null},{url:"assets/guide_index.md.481c6b57.lean.js",revision:null},{url:"assets/guide_introduction.md.1aa6d89c.js",revision:null},{url:"assets/guide_introduction.md.1aa6d89c.lean.js",revision:null},{url:"assets/guide_loot-table.md.532ec5f3.js",revision:null},{url:"assets/guide_loot-table.md.532ec5f3.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.ab01b60e.js",revision:null},{url:"assets/guide_project-setup-android.md.ab01b60e.lean.js",revision:null},{url:"assets/guide_project-setup.md.2709b559.js",revision:null},{url:"assets/guide_project-setup.md.2709b559.lean.js",revision:null},{url:"assets/guide_software-preparation.md.0db2580d.js",revision:null},{url:"assets/guide_software-preparation.md.0db2580d.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.d7060575.js",revision:null},{url:"assets/guide_troubleshooting.md.d7060575.lean.js",revision:null},{url:"assets/guide_understanding-json.md.8eeeb724.js",revision:null},{url:"assets/guide_understanding-json.md.8eeeb724.lean.js",revision:null},{url:"assets/hacktoberfest.md.d87a9b16.js",revision:null},{url:"assets/hacktoberfest.md.d87a9b16.lean.js",revision:null},{url:"assets/index.md.ddf0cbcf.js",revision:null},{url:"assets/index.md.ddf0cbcf.lean.js",revision:null},{url:"assets/items_attachables.md.9910c85c.js",revision:null},{url:"assets/items_attachables.md.9910c85c.lean.js",revision:null},{url:"assets/items_custom-armor.md.38b1f996.js",revision:null},{url:"assets/items_custom-armor.md.38b1f996.lean.js",revision:null},{url:"assets/items_custom-pottery-sherd.md.49deef6c.js",revision:null},{url:"assets/items_custom-pottery-sherd.md.49deef6c.lean.js",revision:null},{url:"assets/items_custom-weapon.md.8964c174.js",revision:null},{url:"assets/items_custom-weapon.md.8964c174.lean.js",revision:null},{url:"assets/items_enchantments.md.5ffe8146.js",revision:null},{url:"assets/items_enchantments.md.5ffe8146.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.da5bbda1.js",revision:null},{url:"assets/items_equipped-item-commands.md.da5bbda1.lean.js",revision:null},{url:"assets/items_high-resolution-items.md.43912ed1.js",revision:null},{url:"assets/items_high-resolution-items.md.43912ed1.lean.js",revision:null},{url:"assets/items_index.md.cae3df80.js",revision:null},{url:"assets/items_index.md.cae3df80.lean.js",revision:null},{url:"assets/items_item-components.md.c0b8291e.js",revision:null},{url:"assets/items_item-components.md.c0b8291e.lean.js",revision:null},{url:"assets/items_item-identifiers.md.244f9514.js",revision:null},{url:"assets/items_item-identifiers.md.244f9514.lean.js",revision:null},{url:"assets/items_item-tags.md.36cc42a0.js",revision:null},{url:"assets/items_item-tags.md.36cc42a0.lean.js",revision:null},{url:"assets/items_items-intro.md.21a89d42.js",revision:null},{url:"assets/items_items-intro.md.21a89d42.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.42d83044.js",revision:null},{url:"assets/items_numerical-item-ids.md.42d83044.lean.js",revision:null},{url:"assets/items_spawning-items.md.9da3a7a3.js",revision:null},{url:"assets/items_spawning-items.md.9da3a7a3.lean.js",revision:null},{url:"assets/items_spear.md.4e2654df.js",revision:null},{url:"assets/items_spear.md.4e2654df.lean.js",revision:null},{url:"assets/items_throwable.md.05cd9ca5.js",revision:null},{url:"assets/items_throwable.md.05cd9ca5.lean.js",revision:null},{url:"assets/items_tool-durability.md.a98e1c67.js",revision:null},{url:"assets/items_tool-durability.md.a98e1c67.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.f0dcb928.js",revision:null},{url:"assets/items_troubleshooting-items.md.f0dcb928.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.d8562fe0.js",revision:null},{url:"assets/items_vanilla-usage-items.md.d8562fe0.lean.js",revision:null},{url:"assets/items_vui-full.md.0c4ef7b0.js",revision:null},{url:"assets/items_vui-full.md.0c4ef7b0.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.d99ad7ad.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.d99ad7ad.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.cedd1606.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.cedd1606.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.0c558404.js",revision:null},{url:"assets/json-ui_best-practices.md.0c558404.lean.js",revision:null},{url:"assets/json-ui_custom-buttons.md.269bc08c.js",revision:null},{url:"assets/json-ui_custom-buttons.md.269bc08c.lean.js",revision:null},{url:"assets/json-ui_index.md.0dec0f0c.js",revision:null},{url:"assets/json-ui_index.md.0dec0f0c.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.62ef4eba.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.62ef4eba.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.ea946d35.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.ea946d35.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.2e7bf966.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.2e7bf966.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.d4bb2ac2.js",revision:null},{url:"assets/json-ui_string-to-number.md.d4bb2ac2.lean.js",revision:null},{url:"assets/loot_index.md.7f389a86.js",revision:null},{url:"assets/loot_index.md.7f389a86.lean.js",revision:null},{url:"assets/loot_item-functions.md.fa2cfb94.js",revision:null},{url:"assets/loot_item-functions.md.fa2cfb94.lean.js",revision:null},{url:"assets/loot_loot-tables.md.a719b00a.js",revision:null},{url:"assets/loot_loot-tables.md.a719b00a.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.7a711b8d.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.7a711b8d.lean.js",revision:null},{url:"assets/loot_recipes.md.0596e885.js",revision:null},{url:"assets/loot_recipes.md.0596e885.lean.js",revision:null},{url:"assets/loot_trade-tables.md.4b408ec7.js",revision:null},{url:"assets/loot_trade-tables.md.4b408ec7.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.1a9ec826.js",revision:null},{url:"assets/loot_trading-behavior.md.1a9ec826.lean.js",revision:null},{url:"assets/meta_addon-performance.md.ce96f930.js",revision:null},{url:"assets/meta_addon-performance.md.ce96f930.lean.js",revision:null},{url:"assets/meta_index.md.c4ed2012.js",revision:null},{url:"assets/meta_index.md.c4ed2012.lean.js",revision:null},{url:"assets/meta_jq.md.5f819707.js",revision:null},{url:"assets/meta_jq.md.5f819707.lean.js",revision:null},{url:"assets/meta_style-guide.md.e206a955.js",revision:null},{url:"assets/meta_style-guide.md.e206a955.lean.js",revision:null},{url:"assets/meta_useful-links.md.43546283.js",revision:null},{url:"assets/meta_useful-links.md.43546283.lean.js",revision:null},{url:"assets/meta_using-schemas.md.0b923ba6.js",revision:null},{url:"assets/meta_using-schemas.md.0b923ba6.lean.js",revision:null},{url:"assets/meta_version-control.md.77fb2b9b.js",revision:null},{url:"assets/meta_version-control.md.77fb2b9b.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.240832ad.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.240832ad.lean.js",revision:null},{url:"assets/nbt_index.md.de4f903d.js",revision:null},{url:"assets/nbt_index.md.de4f903d.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.87c1bba1.js",revision:null},{url:"assets/nbt_mcstructure.md.87c1bba1.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.bdeebc9a.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.bdeebc9a.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.263bdf2f.js",revision:null},{url:"assets/nbt_step-by-step-example.md.263bdf2f.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.8f757c66.js",revision:null},{url:"assets/nbt_structure-limits.md.8f757c66.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.e4e024bc.js",revision:null},{url:"assets/particles_disabling-particles.md.e4e024bc.lean.js",revision:null},{url:"assets/particles_index.md.80f57a72.js",revision:null},{url:"assets/particles_index.md.80f57a72.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.47b4c84f.js",revision:null},{url:"assets/particles_particles-and-sounds.md.47b4c84f.lean.js",revision:null},{url:"assets/particles_particles.md.dfadc294.js",revision:null},{url:"assets/particles_particles.md.dfadc294.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.223f05c2.js",revision:null},{url:"assets/particles_vanilla-particles.md.223f05c2.lean.js",revision:null},{url:"assets/privacy.md.bca3ff42.js",revision:null},{url:"assets/privacy.md.bca3ff42.lean.js",revision:null},{url:"assets/scripting_api-environment.md.e7bc5f44.js",revision:null},{url:"assets/scripting_api-environment.md.e7bc5f44.lean.js",revision:null},{url:"assets/scripting_custom-command.md.17e8f990.js",revision:null},{url:"assets/scripting_custom-command.md.17e8f990.lean.js",revision:null},{url:"assets/scripting_game-tests.md.eec3148a.js",revision:null},{url:"assets/scripting_game-tests.md.eec3148a.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.00d71cea.js",revision:null},{url:"assets/scripting_gametest-form.md.00d71cea.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.fc01ed71.js",revision:null},{url:"assets/scripting_gametest-qna.md.fc01ed71.lean.js",revision:null},{url:"assets/scripting_index.md.d68a1d1b.js",revision:null},{url:"assets/scripting_index.md.d68a1d1b.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.1dadbd6c.js",revision:null},{url:"assets/scripting_placement-prevention.md.1dadbd6c.lean.js",revision:null},{url:"assets/scripting_resources.md.0886af4c.js",revision:null},{url:"assets/scripting_resources.md.0886af4c.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.72596da6.js",revision:null},{url:"assets/scripting_saving-loading.md.72596da6.lean.js",revision:null},{url:"assets/scripting_script-modules.md.c6a7cf87.js",revision:null},{url:"assets/scripting_script-modules.md.c6a7cf87.lean.js",revision:null},{url:"assets/scripting_script-net.md.aacf6512.js",revision:null},{url:"assets/scripting_script-net.md.aacf6512.lean.js",revision:null},{url:"assets/scripting_script-server.md.50880efa.js",revision:null},{url:"assets/scripting_script-server.md.50880efa.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.7d06ffa5.js",revision:null},{url:"assets/scripting_script-watchdog.md.7d06ffa5.lean.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.462180d2.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.462180d2.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.ee57a9e9.js",revision:null},{url:"assets/scripting_scripting-intro.md.ee57a9e9.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.b243a485.js",revision:null},{url:"assets/scripting_starting-scripts.md.b243a485.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.6625cea6.js",revision:null},{url:"assets/scripting_troubleshooting.md.6625cea6.lean.js",revision:null},{url:"assets/scripting_typescript.md.1ce67fa3.js",revision:null},{url:"assets/scripting_typescript.md.1ce67fa3.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.06aa90ce.js",revision:null},{url:"assets/scripting_what-is-script.md.06aa90ce.lean.js",revision:null},{url:"assets/servers_index.md.3ac60fb4.js",revision:null},{url:"assets/servers_index.md.3ac60fb4.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.1678e549.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.1678e549.lean.js",revision:null},{url:"assets/servers_server-software.md.74c132f3.js",revision:null},{url:"assets/servers_server-software.md.74c132f3.lean.js",revision:null},{url:"assets/style.04663297.css",revision:null},{url:"assets/test.md.d738aac7.js",revision:null},{url:"assets/test.md.d738aac7.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.93dae75f.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.93dae75f.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.2189bce3.js",revision:null},{url:"assets/visuals_animation-effects.md.2189bce3.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.6d5c815b.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.6d5c815b.lean.js",revision:null},{url:"assets/visuals_custom-hurt-animations.md.dc693f56.js",revision:null},{url:"assets/visuals_custom-hurt-animations.md.dc693f56.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.90d0d7d5.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.90d0d7d5.lean.js",revision:null},{url:"assets/visuals_death-animations.md.d5aefc26.js",revision:null},{url:"assets/visuals_death-animations.md.d5aefc26.lean.js",revision:null},{url:"assets/visuals_deferred-qna.md.a7e27c80.js",revision:null},{url:"assets/visuals_deferred-qna.md.a7e27c80.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.60a044f1.js",revision:null},{url:"assets/visuals_glowing-texture.md.60a044f1.lean.js",revision:null},{url:"assets/visuals_index.md.2c843fbe.js",revision:null},{url:"assets/visuals_index.md.2c843fbe.lean.js",revision:null},{url:"assets/visuals_introduction.md.4189a135.js",revision:null},{url:"assets/visuals_introduction.md.4189a135.lean.js",revision:null},{url:"assets/visuals_leash-position.md.3fd28b19.js",revision:null},{url:"assets/visuals_leash-position.md.3fd28b19.lean.js",revision:null},{url:"assets/visuals_material-creations.md.4a3745be.js",revision:null},{url:"assets/visuals_material-creations.md.4a3745be.lean.js",revision:null},{url:"assets/visuals_materials.md.7a853b07.js",revision:null},{url:"assets/visuals_materials.md.7a853b07.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.618583d7.js",revision:null},{url:"assets/visuals_math-based-animations.md.618583d7.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.631fbea3.js",revision:null},{url:"assets/visuals_player-geometry.md.631fbea3.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.de205953.js",revision:null},{url:"assets/visuals_remove-shadows.md.de205953.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.eeae520b.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.eeae520b.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.e2bc4200.js",revision:null},{url:"assets/visuals_structure-presentation.md.e2bc4200.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.c268ea60.js",revision:null},{url:"assets/vr_editing-your-first-model.md.c268ea60.lean.js",revision:null},{url:"assets/vr_index.md.06fc6f91.js",revision:null},{url:"assets/vr_index.md.06fc6f91.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.cabce4cb.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.cabce4cb.lean.js",revision:null},{url:"assets/vr_pack_setup.md.3791a23a.js",revision:null},{url:"assets/vr_pack_setup.md.3791a23a.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.46f97b8f.js",revision:null},{url:"assets/world-generation_biome-tags.md.46f97b8f.lean.js",revision:null},{url:"assets/world-generation_biomes.md.7fc62a00.js",revision:null},{url:"assets/world-generation_biomes.md.7fc62a00.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.8aa4e0c5.js",revision:null},{url:"assets/world-generation_custom-ores.md.8aa4e0c5.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.82df5831.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.82df5831.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.b599968f.js",revision:null},{url:"assets/world-generation_feature-types.md.b599968f.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.757aa14c.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.757aa14c.lean.js",revision:null},{url:"assets/world-generation_index.md.fe713582.js",revision:null},{url:"assets/world-generation_index.md.fe713582.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.8957c352.js",revision:null},{url:"assets/world-generation_structure-features.md.8957c352.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.880349d8.js",revision:null},{url:"assets/world-generation_surface-builder.md.880349d8.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.62c23b67.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.62c23b67.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
