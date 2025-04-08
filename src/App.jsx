import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Login from './components/forms/Login';
import AddPost from './components/posts/AddPost';
import PostList from './components/posts/PostList';
import SearchBar from './components/posts/SearchBar';
import Modal from './components/modal/Modal';
import EditForm from './components/posts/EditForm';
const App = () => {
  // 1. Створили стейт для юзера
  // 2. Додали форму логінізації
  // 3. Додали умовний рендер в залежності від залогіненого юзера
  // 4. Додали компонент addPost
  // 5. Реалізували вихід з аккаунту передавши пропс скидання стану юзера
  // 6. Реалізували логіку додавання поста через відправку handleAddPost до нашої форми. Збираємо там данні, віддаємо у компонент App і розширюємо ці данні айді та автором.
  // 7. Зберегли юзера в локал сторедж
  // 8. Створили компонент для постів. А також для одного поста.
  // 9. Зберегти пости в лс
  // 10. Перевірка можливості видалення та редагування в залежності від співпадіння автора та залогіненого користувача
  // 11. Видалення поста
  // 12. Додати логіку пошуку
  // 13. Edit
  // 14. Modal with element
  // Edit logic:
  // 1. Створити стан для модального вікна
  // 2. Створили функції закриття та відкриття
  // 3. Передали пропсом функції відкриття до компонента PostItem
  // 4. Навісили на кнопку едіт відкриття модалки
  // 5. Перевірили в App, що модалка відкрилась . Умовно відмалювали модальне вікно
  // 6. Час відмальовки інтерфейсу редагування
  // 7. Створили форму редагування
  // 8. Поставили форму як чілдрен до модального вікна
  // 9. Створили тимчасове сховище для елемента який я буду міняти. Потрібно для того, щоб заповнити форму редагування і не втратити елемент який я редагую
  // 10. Передати елемент в моменті відкритті модального вікна
  // 11. Передаємо content як initialValues для форміка. Формік роспилить початкові значення і відмалює їх в інпутах.
  // 12. Створюємо функцію handleEditPost -> передаємо її до форми редагування
  // 13. Знаходимо елемент по айді і міняємо його на новий( розсипаємо те, що прийде з модалки + додаємо існуючого автора і айді )
  // 14. Загриваємо по handleSubmit модальне вікно
  // 15. Насолоджуємось процессом відредагованого елемнета
  const [user, setUser] = useState(() => localStorage.getItem('user-auth') ?? '');
  const [posts, setPosts] = useState(() => JSON.parse(localStorage.getItem('users-posts')) ?? []);
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const handleOpen = item => {
    setIsOpen(true);
    setContent(item);
  };
  const handleClose = () => setIsOpen(false);

  const handleAddPost = post => {
    const newPost = { ...post, id: crypto.randomUUID(), author: user };
    setPosts([...posts, newPost]);
  };

  const handleDeletePost = id => {
    setPosts(posts.filter(item => item.id !== id));
  };

  const handleChangeSearch = e => {
    setSearchValue(e.target.value);
  };

  const handleEditPost = postData => {
    setPosts(posts.map(item => (item.id === content.id ? { ...postData, author: content.author, id: content.id } : item)));
    handleClose();
  };

  const filteredData = posts.filter(
    item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.body.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('user-auth', user);
  }, [user]);

  useEffect(() => {
    localStorage.setItem('users-posts', JSON.stringify(posts));
  }, [posts]);

  const handleLogin = username => {
    setUser(username);
  };

  if (!user) {
    return (
      <section>
        <Login handleLogin={handleLogin} />
      </section>
    );
  }

  return (
    <div>
      <Header logout={() => setUser('')} />
      {user && <h2>Welcome, {user}</h2>}
      <AddPost handleAddPost={handleAddPost} author={user} />
      <SearchBar handleChangeSearch={handleChangeSearch} />
      <PostList data={filteredData} author={user} handleDeletePost={handleDeletePost} handleOpen={handleOpen} handleClose={handleClose} />
      {isOpen && (
        <Modal closeModal={handleClose} title={content.title}>
          <EditForm initialValues={content} handleEditPost={handleEditPost} />
        </Modal>
      )}
    </div>
  );
};
export default App;
