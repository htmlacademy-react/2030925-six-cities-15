import { Link } from 'react-router-dom';

export default function ErrorPage(): JSX.Element {
  return(
    <div style={{fontSize: '40px', fontWeight: 'bold', textAlign: 'center'}}>
      <p style={{fontSize: '80px'}}>404</p>
      <p>Congrats! You broke it. Just go <Link to='/' style={{textDecoration: 'underline'}}>back</Link></p>
    </div>
  );
}
