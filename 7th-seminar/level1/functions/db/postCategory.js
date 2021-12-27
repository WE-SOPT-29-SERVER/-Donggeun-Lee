const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllPostCategories = async (client) => {
  const { rows } = await client.query(
    `
        SELECT * from "post_category"
        `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const getPostCategoryById = async (client, postCategoryId) => {
  const { rows } = await client.query(
    `
        SELECT * from "post_category"
        WHERE id = $1
        `,
    [postCategoryId],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllPostCategories, getPostCategoryById };
