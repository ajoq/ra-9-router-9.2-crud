import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import PostsProvider from './components/PostsProvider';
import MainPage from './components/MainPage';
import AddPost from './components/AddPost';
import PostDetail from './components/PostDetail';

function App() {
    return (
        <PostsProvider>
            <Container className="mt-4">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<MainPage />} />
                        <Route exact path="/posts/new/" element={<AddPost />} />
                        <Route
                            exact
                            path="/posts/:postId"
                            element={<PostDetail />}
                        />
                    </Routes>
                </BrowserRouter>
            </Container>
        </PostsProvider>
    );
}

export default App;
