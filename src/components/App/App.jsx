import { Routes, Route } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import createAsyncView from '../../utils/createAsyncView';
import Layout from 'components/Layout';
import CastView from 'views/CastView';
import ReviewsView from 'views/ReviewsView';

const HomePageView = createAsyncView('HomePageView');
const MoviesPageView = createAsyncView('MoviesPageView');
const MovieDetailsPageView = createAsyncView('MovieDetailsPageView');
const NotFoundView = createAsyncView('NotFoundView');

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePageView />} />
        <Route path="movies" element={<MoviesPageView />} />
        <Route path="movies/:movieId" element={<MovieDetailsPageView />}>
          <Route path="cast" element={<CastView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}
