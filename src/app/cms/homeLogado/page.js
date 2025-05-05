import Welcome from '../../../components/cms/welcome.js';
import IndexOptions from '../../../components/cms/index-options.js';
import { UserProvider } from '../../../context/userContext'; // 👈 importar o provider

export default function HomeLogado() {
  return (
    <UserProvider>
      <main>
        <Welcome />
        <IndexOptions />
      </main>
    </UserProvider>
  );
}
