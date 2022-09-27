DROP TABLE IF EXISTS public.users CASCADE;
DROP TABLE IF EXISTS public.tasks CASCADE;


CREATE TABLE public.users (
  "_id" SERIAL NOT NULL,
  "username" VARCHAR(50) NOT NULL,
  "password" VARCHAR(100) NOT NULL,
  "email" VARCHAR(50),
  -- "tasks_id" BIGINT,
  CONSTRAINT "users_pkey" PRIMARY KEY ("_id")
  -- CONSTRAINT "users_tasks_id_fkey0" FOREIGN KEY (tasks_id) REFERENCES public.tasks() ON
);

CREATE TABLE public.tasks (
  "_id" SERIAL NOT NULL,
  "name" VARCHAR(50),
	"start_time" BIGINT,
  "revisit_interval" BIGINT,
  "users_id" BIGINT NOT NULL,
  CONSTRAINT "tasks_pkey" PRIMARY KEY ("_id"),
	CONSTRAINT "tasks_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES users("_id") 
-- 	ON DELETE CASCADE ON UPDATE CASCADE
);



INSERT INTO public.users("username", "password", "email")
VALUES('admin', 'password', 'johndoe@gmail.com');

INSERT INTO public.users("username", "password", "email")
VALUES('pleb', 'pleb', 'pleb@gmail.com');

INSERT INTO public.users("username", "password", "email")
VALUES('test', 'test', 'test@gmail.com');

INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('play piano', 1664257434069, 1000 * 60 * 60 * 24 * 5, '1');
INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('play guitar', 1664257434069 + 10000, 1000 * 60 * 60 * 24 * 5, '1');
INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('play cello', 1664257434069 + 20000, 1000 * 60 * 60 * 24 * 5, '1');

INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('jg diff', 1664257434069 + 30000, 1000 * 60 * 60 * 24 * 5, '2');
INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('better jg wins', 1664257434069 + 40000, 1000 * 60 * 60 * 24 * 5, '2');
INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('outjungled', 1664257434069 + 50000, 1000 * 60 * 60 * 24 * 5, '2');
INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('gg2ez', 1664257434069 + 50000, 1000 * 60 * 60 * 24 * 5, '2');


INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('breath', 1664257434069 + 30000, 1000 * 60 * 60 * 24 * 5, '3');
INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('drink water', 1664257434069 + 40000, 1000 * 60 * 60 * 24 * 5, '3');
INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('sleep', 1664257434069 + 50000, 1000 * 60 * 60 * 24 * 5, '3');
INSERT INTO public.tasks ("name", "start_time", "revisit_interval", "users_id")
VALUES('eat', 1664257434069 + 50000, 1000 * 60 * 60 * 24 * 5, '3');

