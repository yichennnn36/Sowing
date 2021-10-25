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
      date,
    } = req.body;

    await sowingManager.createTicket({
      memberId,
      title,
      content,
      location,
      status,
      category,
      date,
    });

    res.status(requestHandling.HttpStatus.NO_CONTENT);
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

const sowingHandler = {
  createTicket,
};

export default sowingHandler;
