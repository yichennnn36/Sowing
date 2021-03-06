import SQL from 'sql-template-strings';
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

  return { affectedRows };
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

async function updateTicketStatus({
  memberId,
  ticketId,
  currentStatus,
  newStatus,
}) {
  logging.debug(`${MODEL_NAME}.updateTicketStatus`, {
    memberId,
    ticketId,
    currentStatus,
    newStatus,
  });

  const { affectedRows = 0 } = await mysqlConnector.query(SQL`
    UPDATE event_ticket
    SET status = ${newStatus}
    WHERE (
      ticket_id,
      member_id,
      status
    ) = (
      ${ticketId},
      ${memberId},
      ${currentStatus}
    )
  `);

  return { affectedRows };
}

async function deleteTicket({ memberId, ticketId }) {
  logging.debug(`${MODEL_NAME}.deleteTicket`, { memberId, ticketId });

  const { affectedRows = 0 } = await mysqlConnector.query(SQL`
    DELETE FROM event_ticket
    WHERE (
      ticket_id,
      member_id
    ) = (
      ${ticketId},
      ${memberId}
    )
  `);

  return { affectedRows };
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
  logging.debug(`${MODEL_NAME}.updateTicketInfo`, {
    memberId,
    ticketId,
    title,
    content,
    location,
    category,
    startDate,
    endDate,
  });

  const stat = SQL`
    UPDATE event_ticket
    SET update_stamp = NOW()
  `;

  if (title !== undefined) { stat.append(SQL`, title = ${title}`); }
  if (content !== undefined) { stat.append(SQL`, content = ${content}`); }
  if (location !== undefined) { stat.append(SQL`, location = ${location}`); }
  if (category !== undefined) { stat.append(SQL`, category = ${category}`); }
  if (startDate !== undefined) { stat.append(SQL`, start_date = ${startDate}`); }
  if (endDate !== undefined) { stat.append(SQL`, end_date = ${endDate}`); }

  stat.append(SQL` WHERE (member_id, ticket_id) = (${memberId}, ${ticketId})`);

  const { affectedRows = 0 } = await mysqlConnector.query(stat);

  return { affectedRows };
}

const sowingModel = {
  createTicket,
  getTickets,
  updateTicketStatus,
  deleteTicket,
  updateTicketInfo,
};

export default sowingModel;
