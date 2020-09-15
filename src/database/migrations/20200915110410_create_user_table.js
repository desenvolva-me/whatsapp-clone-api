const avatarIcon =
  "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";
exports.up = function ({ schema }) {
  return schema.createTable("User", table => {
    table.increments("id").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("avatar").defaultTo(avatarIcon);

    table.boolean("authorized").defaultTo(false);

    table.timestamp("created_at").defaultTo(new Date().toUTCString());
  });
};

exports.down = function ({ schema }) {
  return schema.dropTable("User");
};
