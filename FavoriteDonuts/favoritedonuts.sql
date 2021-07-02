create database favoritedonuts;
use favoritedonuts;

create table favorite (
    id int not null auto_increment primary key,
    username varchar(30),
    donut int,
    donutname varchar(50)
);
