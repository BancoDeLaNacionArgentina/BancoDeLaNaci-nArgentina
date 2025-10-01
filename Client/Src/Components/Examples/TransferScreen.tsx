import TransferScreen from '../TransferScreen';

export default function TransferScreenExample() {
  return (
    <TransferScreen
      onBack={() => console.log('Back')}
      onTransfer={(r, a) => console.log('Transfer:', r, a)}
    />
  );
}
