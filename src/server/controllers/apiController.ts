const { query } = require('express');
import { NextFunction, Request, Response, response } from 'express';
const db = require('../models/db.ts');

const apiController: any = {};

apiController.getTask = (req: Request, res: Response, next: NextFunction) => {
  // const { username } = req.params;

  // let queryString =
  //   `SELECT "users_id", "name", "start_time", "revisit_interval" FROM users INNER JOIN tasks on tasks.users_id = users._id WHERE username = '${username}'; `;

  // let queryString =
  //   `SELECT "users_id", "name", "start_time", "revisit_interval" FROM users INNER JOIN tasks on tasks.users_id = users._id; `;
  let queryString = `SELECT * FROM public.tasks ORDER BY _id ASC; `;

  db.query(queryString)
    .then((response: any) => {
      res.locals.tasks = response.rows;
      return next();
    })
    .catch((err: string) =>
      next({
        log: 'apiController.getTask went wrong',
        message: { err: `Error ${JSON.stringify(err)}` },
      })
    );

  //   SELECT "users_id", "name", "start_time", "revisit_interval"
  // FROM users
  // INNER JOIN tasks on tasks.users_id = users._id
  // WHERE username = 'pleb';
};

apiController.postTask = (req: any, res: Response, next: NextFunction) => {
  const { username, taskName, startTime, revisit, users_id } = req.body;

  // let queryString =
  //   `INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id") VALUES('${taskName}', ${startTime}, ${revisit}, ${users_id}); SELECT "users_id", "name", "start_time", "revisit_interval" FROM users INNER JOIN tasks on tasks.users_id = users._id WHERE username = '${username}'; `;
  let queryString = `INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id") VALUES('${taskName}', ${startTime}, ${revisit}, ${users_id}); SELECT * FROM public.tasks ORDER BY _id ASC; `;

  db.query(queryString)
    .then((response: any) => {
      res.locals.tasks = response[1].rows;
      return next();
    })
    .catch((err: string) =>
      next({
        log: 'apiController.postTask went wrong',
        message: { err: `Error ${JSON.stringify(err)}` },
      })
    );

  // INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
  // VALUES('eat', 1664257434069 + 50000, 1000 * 60 * 60 * 24 * 5, '3');
};

apiController.updateTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // body
  const { _id, taskName, startTime, revisit } = req.body;
  /*
  UPDATE public.tasks
  SET name = 'cooking234',
  start_time = 23423423, revisit_interval = 234234234,
  users_id = 1
  WHERE _id = 14;
  */

  // ! users_id ???
  // let queryString =
  //   `UPDATE public.tasks SET name = ${taskName} start_time = ${startTime} revisit_interval = ${revisit}  WHERE _id = ${_id}; SELECT "users_id", "name", "start_time", "revisit_interval" FROM users INNER JOIN tasks on tasks.users_id = users._id WHERE username = '${username}'; `;
  // let queryString =
  // `UPDATE public.tasks SET name = '${taskName}', start_time = ${startTime}, revisit_interval = ${revisit}  WHERE _id = ${_id}; SELECT "users_id", "name", "start_time", "revisit_interval" FROM users INNER JOIN tasks on tasks.users_id = users._id; `;

  /*
UPDATE public.tasks SET name = 'flying6000',
start_time = 723423, revisit_interval = 12312
WHERE _id = 14; select * from public.tasks ORDER BY _id ASC;
  */
  let queryString = `UPDATE public.tasks SET name = '${taskName}', start_time = ${startTime}, revisit_interval = ${revisit} WHERE _id = ${_id}; SELECT * FROM public.tasks ORDER BY _id ASC; `;

  db.query(queryString)
    .then((response: any) => {
      // res.locals.tasks = response.rows;

      res.locals.tasks = response[1].rows;
      return next();
    })
    .catch((err: string) => {
      next({
        log: 'apiController.updateTask went wrong',
        message: { err: `Error ${JSON.stringify(err)}` },
      });
    });
};

apiController.deleteTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // // params
  const { _id } = req.params;
  console.log('_ID', _id);

  // let queryString =
  //   `DELETE FROM public.tasks WHERE _id = ${_id}; SELECT "users_id", "name", "start_time", "revisit_interval" FROM users INNER JOIN tasks on tasks.users_id = users._id WHERE username = '${username}'; `;
  let queryString = `DELETE FROM public.tasks WHERE _id = ${_id}; `;

  db.query(queryString)
    .then((response: any) => {
      // res.locals.tasks = response.rows;
      return next();
    })
    .catch((err: string) =>
      next({
        log: 'apiController.deleteTask went wrong',
        message: { err: `Error ${JSON.stringify(err)}` },
      })
    );
};

module.exports = apiController;
