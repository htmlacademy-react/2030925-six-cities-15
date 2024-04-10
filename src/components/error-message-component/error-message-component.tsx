import { useAppSelector } from '../hooks/store';
import './error-message-component.css';

export default function ErrorMessageComponent(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className="error__message">{error}</div>
    : null;
}
