import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default Alert;
