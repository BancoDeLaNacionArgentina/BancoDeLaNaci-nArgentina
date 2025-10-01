import LoginScreen from '../LoginScreen';

export default function LoginScreenExample() {
  return <LoginScreen onLogin={(u, p) => console.log('Login:', u, p)} />;
}
