import { NextFunction, Request, Response } from 'express';
const db = require('../models/db.ts');

const apiController: any = {};

// Returns all tasks in database
apiController.getTasks = (req: Request, res: Response, next: NextFunction) => {
  let queryString = `SELECT * FROM public.tasks ORDER BY _id ASC; `;

  db.query(queryString)
    .then((response: any) => {
      res.locals.tasks = response.rows;
      return next();
    })
    .catch((err: string) =>
      next({
        log: 'apiController.getTasks went wrong',
        message: { err: `Error ${JSON.stringify(err)}` },
      })
    );

};

// Posts task to database with name, start time, revisit interval, and user id
apiController.postTask = (req: any, res: Response, next: NextFunction) => {
  const { name, start_time, revisit_interval, users_id } = req.body;
  let queryString = `INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id") VALUES('${name}', ${start_time}, ${revisit_interval}, ${users_id}); SELECT * FROM public.tasks ORDER BY _id ASC; `;

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

};

// Updates task with request body given task id parameter
apiController.updateTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = req.params;
  const { name, start_time, revisit_interval } = req.body;

  let queryString = `UPDATE public.tasks SET name = '${name}', start_time = ${start_time}, revisit_interval = ${revisit_interval} WHERE _id = ${_id}; `;
  db.query(queryString)
    .then((response: any) => {
    })
    .catch((err: string) => {
      next({
        log: 'apiController.updateTask went wrong',
        message: { err: `Error ${JSON.stringify(err)}` },
      });
    });
};

// Deletes task given task id parameter
apiController.deleteTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = req.params;

  let queryString = `DELETE FROM public.tasks WHERE _id = ${_id}; `;

  db.query(queryString)
    .then((response: any) => {
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
