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
  startDate,
  endDate,
}) {
  logging.debug(`${MODEL_NAME}.createTicket`, {
    memberId,
    title,
    content,
    location,
    status,
    category,
    startDate,
    endDate,
  });

  const { affectedRows = 0 } = await mysqlConnector.query(SQL`
    INSERT INTO event_ticket (
      member_id,
      title,
      content,
      location,
      status,
      category,
      start_date,
      end_date
    ) VALUES (
      ${memberId},
      ${title},
      ${content},
      ${location},
      ${status},
      ${category},
      ${startDate},
      ${endDate}
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
