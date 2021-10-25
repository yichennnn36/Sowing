import SQL from 'sql-template-strings';
import errorHandling from '../error-handling';
import { mysqlConnector, logging } from '../../infrastructure';
import { TicketStatus } from '../common';

const MODEL_NAME = 'sowingModel';

async function createTicket({
  memberId,
  title,
  content,
  location,
  status = TicketStatus.SOWING,
  category,
  date,
}) {
  logging.debug(`${MODEL_NAME}.createTicket`, {
    memberId,
    title,
    content,
    location,
    status,
    category,
    date,
  });

  const { affectedRows = 0 } = await mysqlConnector.query(SQL`
    INSERT INTO event_ticket (
      member_id,
      title,
      content,
      location,
      status,
      category,
      date
    ) VALUES (
      ${memberId},
      ${title},
      ${content},
      ${location},
      ${status},
      ${category},
      ${date}
    )
  `);

  if (affectedRows <= 0) {
    throw new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_TICKET_NOT_CREATED,
    });
  }
}

const sowingModel = {
  createTicket,
};

export default sowingModel;
