
function info(title, message) { console.log(`[info] ${title}:`, message); }
function debug(title, message) { console.log(`[debug] ${title}:`, message); }
function warn(title, message) { console.log(`[warn] ${title}:`, message); }
function error(title, message) { console.log(`[error] ${title}:`, message); }

const logging = {
  info,
  debug,
  warn,
  error,
};

export default logging;
