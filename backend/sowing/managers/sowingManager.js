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
  startDate,
  endDate,
}) {
  logging.debug(`${MANAGER_NAME}.createTicket`, {
    memberId,
    title,
    content,
    location,
    status,
    category,
    startDate,
    endDate,
  });

  await sowingModel.createTicket({
    memberId,
    title,
    content,
    location,
    status,
    category,
    startDate,
    endDate,
  });
}

const sowingManager = {
  createTicket,
};

export default sowingManager;
