import { useRouter } from 'next/router';
import BootstrapTables from '../components/bootstrapTables';
import Buttons from '../components/buttons';
import Forms from '../components/forms';
import Layout from '../components/layout';
import Modals from '../components/Modals';
import Notifications from '../components/notifications';
import Overview from '../components/overview';
import Settings from '../components/settings';
import Transactions from '../components/transactions';
import Typography from '../components/typography';

const PageRouter = () => {
  const router = useRouter();
  const { name } = router.query;

  let content;

  switch (name) {
    case 'transactions':
      content = <Transactions />;
      break;
    case 'settings':
      content = <Settings />;
      break;
    case 'bootstrap-tables':
      content = <BootstrapTables />;
      break;
    case 'buttons':
      content = <Buttons />;
      break;
    case 'notifications':
      content = <Notifications />;
      break;
    case 'forms':
      content = <Forms />;
      break;
    case 'modals':
      content = <Modals />;
      break;
    case 'typography':
      content = <Typography />;
      break;

    default:
      break;
  }

  return (
    <>
      <Layout>{content}</Layout>
    </>
  );
};

export default PageRouter;
