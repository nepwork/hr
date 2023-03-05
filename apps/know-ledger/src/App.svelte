<!-- App.svelte -->
<script>
  // Admin Layout
  import Admin from './layouts/Admin.svelte';
  // Auth Layout
  import Auth from './layouts/Auth.svelte';

  // No Layout Pages
  import Index from './views/Index.svelte';
  import Landing from './views/Landing.svelte';
  import Profile from './views/Profile.svelte';
  import './views/tailwind.css';

  import Router from 'svelte-spa-router';

  const routes = {
    // Exact path
    '/': Index,

    // Using named parameters, with last being optional
    '/blog/': Landing,

    // Wildcard parameter
    '/profile/*': Profile,

    '/admin': Admin,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': Auth,
  };
</script>

<Router {routes} />
