"use strict";

const { createLogger, transports, format } = require("winston");
const { combine, timestamp, simple, colorize, printf, label } = format;


const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
})

const printLogFormat = {
  file: combine(
    label({
      label: "winston 연습",
    }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
  ),
  console: combine(
    colorize(),
    simple()
  )
}

// 파일에 저장 or 콘솔에 출력
const opts = {
  file: new transports.File({
    filename: "access.log",
    dirname: "./logs",
    level: "info",
    format: printLogFormat.file,
  }),

  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
}

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}

module.exports = logger;