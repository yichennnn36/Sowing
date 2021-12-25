import errorHandling from '../error-handling';
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

  const { affectedRows } = await sowingModel.createTicket({
    memberId,
    title,
    content,
    location,
    status,
    category,
    startDate,
    endDate,
  });
  if (affectedRows <= 0) {
    const httpError = new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_TICKET_NOT_CREATED,
    });
    return { error: httpError };
  }

  return { error: null };
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

  const { affectedRows } = await sowingModel.updateTicketStatus({
    memberId,
    ticketId,
    currentStatus,
    newStatus,
  });
  if (affectedRows <= 0) {
    const httpError = new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_TICKET_NOT_UPDATED,
    });
    return { error: httpError };
  }

  return { error: null };
}

async function deleteTicket({ memberId, ticketId }) {
  logging.debug(`${MANAGER_NAME}.deleteTicket`, { memberId, ticketId });

  const { affectedRows } = await sowingModel.deleteTicket({ memberId, ticketId });
  if (affectedRows <= 0) {
    const httpError = new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_TICKET_NOT_DELETED,
    });
    return { error: httpError };
  }

  return { error: null };
}

async function updateTicketInfo({
  memberId,
  ticketId,
  title,
  content,
  location,
  category,
  startDate,
  endDate,
}) {
  logging.debug(`${MANAGER_NAME}.updateTicketInfo`, {
    memberId,
    ticketId,
    title,
    content,
    location,
    category,
    startDate,
    endDate,
  });

  const { affectedRows } = await sowingModel.updateTicketInfo({
    memberId,
    ticketId,
    title,
    content,
    location,
    category,
    startDate,
    endDate,
  });
  if (affectedRows <= 0) {
    const httpError = new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_TICKET_NOT_UPDATED,
    });
    return { error: httpError };
  }

  return { error: null };
}

const sowingManager = {
  createTicket,
  getTickets,
  updateTicketStatus,
  deleteTicket,
  updateTicketInfo,
};

export default sowingManager;
