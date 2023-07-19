import { Link } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesUrl },
];

export function ErrorBoundary() {
  return <div className='error-container'>I did a whoopsies.</div>;
}

export default function JokesIndexRoute() {
  return (
    <div className='container'>
      <div className='content'>
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='jokes'>Read Jokes</Link>
            </li>
            <li>
              <Link reloadDocument to='/jokes.rss'>
                RSS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
