
import SearchHome from '../../components/cms/search-home.js';
import StudentCard from '../../components/cms/student-card.js';
// eu coloquei header, navbar e footer no app.js e ai tirei das outras paginas pra nao duplicar ;)
export default function HomeLogado() {
  return (
    <>
      <main>
        <SearchHome />
        <StudentCard />
      </main>
    </>
  );
}