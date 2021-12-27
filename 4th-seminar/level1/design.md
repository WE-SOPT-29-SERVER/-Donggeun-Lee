![image](https://user-images.githubusercontent.com/68222629/147210769-bbd7c55f-33b0-4ef7-8685-71255f1c81c4.png)

<br>

- `user` table

|  field   |    datatype    |              option              |
| :------: | :------------: | :------------------------------: |
|    id    |     `int`      | `PK`, auto inc, unique, not null |
|  email   | `varchar(100)` |         unique, not null         |
|   name   | `varchar(10)`  |             not null             |
| password | `varchar(20)`  |             not null             |

<br>

- `article` table

|   field   |    datatype     |              option              |
| :-------: | :-------------: | :------------------------------: |
|    id     |      `int`      | `PK`, auto inc, unique, not null |
| author_id |      `int`      |          `FK`, not null          |
|   title   |  `varchar(50)`  |             not null             |
|  content  | `varchar(1000)` |             not null             |
| comments  |    `int []`     |                                  |
|   likes   |    `int []`     |                                  |

<br>

- `comment` table

|   field    |    datatype    |              option              |
| :--------: | :------------: | :------------------------------: |
|     id     |     `int`      | `PK`, auto inc, unique, not null |
| author_id  |     `int`      |          `FK`, not null          |
|  content   | `varchar(100)` |             not null             |
| article_id |     `int`      |          `FK`, not null          |

<br>

- `like` table

|   field    | datatype |              option              |
| :--------: | :------: | :------------------------------: |
|     id     |  `int`   | `PK`, auto inc, unique, not null |
|  user_id   |  `int`   |          `FK`, not null          |
| article_id |  `int`   |          `FK`, not null          |

