-- Create table books
CREATE TABLE public.books
(
    id serial,
    title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    published date,
    genre character varying(100),
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.books
    OWNER to postgres;