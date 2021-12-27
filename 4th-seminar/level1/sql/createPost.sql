create table post
(
    id         serial
        constraint post_pk
            primary key,
    user_id    integer not null,
    title      varchar(100),
    content    text,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    is_deleted boolean   default false,
    image_urls varchar(300)[]
);