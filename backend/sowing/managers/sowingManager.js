import { logging } from '../../infrastructure';
import { sowingModel } from '../models';

const MANAGER_NAME = 'sowingManager';

async function createTicket({
  memberId,
  title,
  content,
  location,
  status,
  category,
  date,
}) {
  logging.debug(`${MANAGER_NAME}.createTicket`, {
    memberId,
    title,
    content,
    location,
    status,
    category,
    date,
  });

  await sowingModel.createTicket({
    memberId,
    title,
    content,
    location,
    status,
    category,
    date,
  });
}

const sowingManager = {
  createTicket,
};

export default sowingManager;
