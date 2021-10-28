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

async function getTickets({ memberId }) {
  logging.debug(`${MODEL_NAME}.getTickets`, { memberId });

  const tickets = await mysqlConnector.query(SQL`
    SELECT
      ticket_id,
      title,
      content,
      location,
      status,
      category,
      start_date,
      end_date
    FROM event_ticket
    WHERE member_id = ${memberId}
    ORDER BY ticket_id
  `);

  return tickets || [];
}

const sowingModel = {
  createTicket,
  getTickets,
};

export default sowingModel;
