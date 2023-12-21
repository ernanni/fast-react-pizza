import { Link } from 'react-router-dom';
import { SearchOrder } from '../features/order';

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>

      <SearchOrder />
      <p>Fabio</p>
    </header>
  );
}

export default Header;
