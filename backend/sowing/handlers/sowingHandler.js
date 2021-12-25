import errorHandling from '../error-handling';
import { logging, requestHandling } from '../../infrastructure';
import { sowingManager } from '../managers';

const HANDLER_NAME = 'sowingHandler';

async function createTicket(req, res) {
  logging.debug(`${HANDLER_NAME}.createTicket`, req);

  const { memberId } = req.user;

  const {
    title,
    content,
    location,
    status,
    category,
    start_date: startDate,
    end_date: endDate,
  } = req.body;

  const { error } = await sowingManager.createTicket({
    memberId,
    title,
    content,
    location,
    status,
    category,
    startDate,
    endDate,
  });
  if (error) {
    const httpError = errorHandling.createHttpError(error);
    res.status(httpError.status).json(httpError);
    return;
  }

  res.status(requestHandling.HttpStatus.NO_CONTENT);

  return;
}

async function getTickets(req, res) {
  logging.debug(`${HANDLER_NAME}.getTickets`, req);

  const { memberId } = req.user;

  const tickets = await sowingManager.getTickets({ memberId });

  res.status(requestHandling.HttpStatus.OK).json({ tickets });

  return;
}

async function updateTicketStatus(req, res) {
  logging.debug(`${HANDLER_NAME}.updateTicketStatus`, req);

  const { memberId } = req.user;
  const { ticket_id: ticketId } = req.params;
  const {
    current_status: currentStatus,
    new_status: newStatus,
  } = req.body;

  const { error } = await sowingManager.updateTicketStatus({
    memberId,
    ticketId,
    currentStatus,
    newStatus,
  });
  if (error) {
    const httpError = errorHandling.createHttpError(error);
    res.status(httpError.status).json(httpError);
    return;
  }

  res.status(requestHandling.HttpStatus.NO_CONTENT);

  return;
}

async function deleteTicket(req, res) {
  logging.debug(`${HANDLER_NAME}.deleteTicket`, req);

  const { memberId } = req.user;
  const { ticket_id: ticketId } = req.params;

  const { error } = await sowingManager.deleteTicket({ memberId, ticketId });
  if (error) {
    const httpError = errorHandling.createHttpError(error);
    res.status(httpError.status).json(httpError);
    return;
  }

  res.status(requestHandling.HttpStatus.NO_CONTENT);

  return;
}

async function updateTicketInfo(req, res) {
  logging.debug(`${HANDLER_NAME}.updateTicketInfo`, req);

  const { memberId } = req.user;
  const { ticket_id: ticketId } = req.params;
  const {
    title,
    content,
    location,
    category,
    start_date: startDate,
    end_date: endDate,
  } = req.body;

  const { error } = await sowingManager.updateTicketInfo({
    memberId,
    ticketId,
    title,
    content,
    location,
    category,
    startDate,
    endDate,
  });
  if (error) {
    const httpError = errorHandling.createHttpError(error);
    res.status(httpError.status).json(httpError);
    return;
  }

  res.status(requestHandling.HttpStatus.NO_CONTENT);

  return;
}

const sowingHandler = {
  createTicket,
  getTickets,
  updateTicketStatus,
  deleteTicket,
  updateTicketInfo,
};

export default sowingHandler;
