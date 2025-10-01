import Dashboard from '../Dashboard';

export default function DashboardExample() {
  return (
    <Dashboard
      userName="Mirian Elizabeth"
      accountNumber="**** 67496"
      balance="0,00"
      onLogout={() => console.log('Logout')}
      onActionClick={(id) => console.log('Action:', id)}
    />
  );
}
