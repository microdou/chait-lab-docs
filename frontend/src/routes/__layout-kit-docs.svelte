<script context="module">
  export const prerender = true;

  export const load = createKitDocsLoader({
    sidebar: {
      "/": null,
      "/protocols": "/protocols",
      "/tutorials": "/tutorials",
    },
  });
</script>

<script>
  import "@svelteness/kit-docs/client/polyfills/index.js";
  import "@svelteness/kit-docs/client/styles/normalize.css";
  import "@svelteness/kit-docs/client/styles/fonts.css";
  import "@svelteness/kit-docs/client/styles/theme.css";
  import "@svelteness/kit-docs/client/styles/vars.css";
  import "../app.css";

  import LogoButton from "./_components/logoButton.svelte";

  import { Button, KitDocs, KitDocsLayout, createKitDocsLoader, createSidebarContext } from "@svelteness/kit-docs";

  /** @type {import('@svelteness/kit-docs').MarkdownMeta | null} */
  export let meta = null;

  /** @type {import('@svelteness/kit-docs').ResolvedSidebarConfig | null} */
  export let sidebar = null;

  /** @type {import('@svelteness/kit-docs').NavbarConfig} */
  const navbar = {
    links: [
      { title: "Protocols", slug: "/protocols", match: /\/protocols/ },
      { title: "Tutorials", slug: "/tutorials", match: /\/tutorials/ },
    ],
  };

  const { activeCategory } = createSidebarContext(sidebar);
</script>

<svelte:head>
  {#if meta?.title}
    <title>{$activeCategory ? `${$activeCategory}: ` : ""}{meta.title} | Chait Lab Docs</title>
  {/if}
  {#if meta?.description}
    <meta name="description" content={meta.description} />
  {/if}
</svelte:head>

<KitDocs {meta}>
  <KitDocsLayout {navbar} {sidebar}>
    <div class="logo" slot="navbar-left">
      <LogoButton />
    </div>

    <slot />
  </KitDocsLayout>
</KitDocs>

<style>
  :global(:root) {
    --kd-color-brand-rgb: 233, 127, 6;
  }

  :global(:root.dark) {
    --kd-color-brand-rgb: 213, 149, 76;
  }

  .logo :global(a) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo :global(svg) {
    height: 36px;
    overflow: hidden;
  }
</style>
