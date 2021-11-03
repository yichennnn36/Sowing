import errorHandling from '../error-handling';
import { logging, requestHandling } from '../../infrastructure';
import { sowingManager } from '../managers';

const HANDLER_NAME = 'sowingHandler';

async function createTicket(req, res) {
  try {
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

    await sowingManager.createTicket({
      memberId,
      title,
      content,
      location,
      status,
      category,
      startDate,
      endDate,
    });

    res.status(requestHandling.HttpStatus.NO_CONTENT);
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

async function getTickets(req, res) {
  try {
    logging.debug(`${HANDLER_NAME}.getTickets`, req);

    const { memberId } = req.user;

    const tickets = await sowingManager.getTickets({ memberId });

    res.status(requestHandling.HttpStatus.OK).json({ tickets });
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

async function updateTicketStatus(req, res) {
  try {
    logging.debug(`${HANDLER_NAME}.updateTicketStatus`, req);

    const { memberId } = req.user;
    const { ticket_id: ticketId } = req.params;
    const {
      current_status: currentStatus,
      new_status: newStatus,
    } = req.body;

    await sowingManager.updateTicketStatus({
      memberId,
      ticketId,
      currentStatus,
      newStatus,
    });

    res.status(requestHandling.HttpStatus.NO_CONTENT);
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

async function deleteTicket(req, res) {
  try {
    logging.debug(`${HANDLER_NAME}.deleteTicket`, req);

    const { memberId } = req.user;
    const { ticket_id: ticketId } = req.params;

    await sowingManager.deleteTicket({ memberId, ticketId });

    res.status(requestHandling.HttpStatus.NO_CONTENT);
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

async function updateTicketInfo(req, res) {
  try {
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

    await sowingManager.updateTicketInfo({
      memberId,
      ticketId,
      title,
      content,
      location,
      category,
      startDate,
      endDate,
    });

    res.status(requestHandling.HttpStatus.NO_CONTENT);
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

const sowingHandler = {
  createTicket,
  getTickets,
  updateTicketStatus,
  deleteTicket,
  updateTicketInfo,
};

export default sowingHandler;
