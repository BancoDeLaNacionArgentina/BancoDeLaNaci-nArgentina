import QuickActions from '../QuickActions';

export default function QuickActionsExample() {
  return <QuickActions onActionClick={(id) => console.log('Action:', id)} />;
}
