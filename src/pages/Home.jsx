import { Title } from '../components/Title/Title';
import { TitlePicture } from '../components/TitlePicture/TitlePicture';
import phonebook from '../pictures/phonebook.jpg';

const Home = () => {
  return (
    <main>
      <Title>Phonebook</Title>
      <TitlePicture titlePicture={phonebook}></TitlePicture>
    </main>
  );
};

export default Home;
