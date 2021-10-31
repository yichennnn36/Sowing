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

async function getTickets({ memberId }) {
  logging.debug(`${MANAGER_NAME}.getTickets`, { memberId });

  return sowingModel.getTickets({ memberId });
}

async function updateTicketStatus({
  memberId,
  ticketId,
  currentStatus,
  newStatus,
}) {
  logging.debug(`${MANAGER_NAME}.updateTicketStatus`, {
    memberId,
    ticketId,
    currentStatus,
    newStatus,
  });

  if (currentStatus === newStatus) return;

  await sowingModel.updateTicketStatus({
    memberId,
    ticketId,
    currentStatus,
    newStatus,
  });
}

async function deleteTicket({ memberId, ticketId }) {
  logging.debug(`${MANAGER_NAME}.deleteTicket`, { memberId, ticketId });

  await sowingModel.deleteTicket({ memberId, ticketId });
}

const sowingManager = {
  createTicket,
  getTickets,
  updateTicketStatus,
  deleteTicket,
};

export default sowingManager;
