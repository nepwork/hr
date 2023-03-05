<script>
  import Router from 'svelte-spa-router';

  // components for this layout
  import FooterAdmin from '../components/Footers/FooterAdmin.svelte';
  import HeaderStats from '../components/Headers/HeaderStats.svelte';
  import AdminNavbar from '../components/Navbars/AdminNavbar.svelte';
  import Sidebar from '../components/Sidebar/Sidebar.svelte';
  // pages for this layout

  export let location;
  export const admin = '';
</script>

<div>
  <Sidebar {location} />
  <div class="relative md:ml-64 bg-slate-100">
    <AdminNavbar />
    <HeaderStats />
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <Router url="admin" />
      <FooterAdmin />
    </div>
  </div>
</div>
