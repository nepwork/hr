<script>
  import Router from 'svelte-spa-router';

  // components for this layout
  import AdminNavbar from '../components/Navbars/AdminNavbar.svelte';
  import Sidebar from '../components/Sidebar/Sidebar.svelte';
  import HeaderStats from '../components/Headers/HeaderStats.svelte';
  import FooterAdmin from '../components/Footers/FooterAdmin.svelte';

  // pages for this layout
  import Dashboard from '../views/admin/Dashboard.svelte';
  import Settings from '../views/admin/Settings.svelte';
  import Tables from '../views/admin/Tables.svelte';
  import Maps from '../views/admin/Maps.svelte';

  export let location;
  export let admin = '';
</script>

<div>
  <Sidebar {location} />
  <div class="relative md:ml-64 bg-blueGray-100">
    <AdminNavbar />
    <HeaderStats />
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <Router url="admin" />
      <FooterAdmin />
    </div>
  </div>
</div>
