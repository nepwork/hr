<script>
  import Router from 'svelte-spa-router';

  // components for this layout
  import FooterSmall from '../components/Footers/FooterSmall.svelte';
  import AuthNavbar from '../components/Navbars/AuthNavbar.svelte';
  // pages for this layout

  const registerBg2 = '../assets/img/register_bg_2.png';
  export const location = '';
  export const auth = '';
</script>

<div>
  <AuthNavbar />
  <main>
    <section class="relative w-full h-full py-40 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
        style="background-image: url({registerBg2});"
      />
      <Router url="auth" />
      <FooterSmall absolute={true} />
    </section>
  </main>
</div>
