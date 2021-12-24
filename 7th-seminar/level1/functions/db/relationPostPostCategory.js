const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getRelationPostPostCategoriesByPostCategoryId = async (client, postCategoryId) => {
  const { rows } = await client.query(
    `
        SELECT * FROM relation_post_post_category
        WHERE post_id = $1
            AND is_deleted = FALSE
        `,
    [postCategoryId],
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getRelationPostPostCategoriesByPostCategoryId };
