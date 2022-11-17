// regarding transactional DDL, not all dialects support it,
// so use it as you may.
// see https://github.com/sequelize/sequelize/issues/7902

module.exports = {
  up: async ({ query, t }: any) => {
    await query.createTable(
      'Users',
      t.build(
        t.intPK('id'),
        t.uniqueString('pid'),
        t.uniqueString('username'),
        t.nonNullString('password'),
        t.nonNullString('firstName'),
        t.nonNullString('lastName'),
        t.string('resetToken'),
        t.date('resetSentAt'),
        t.int('currentTeamId'),
        t.json('settings'),
        t.timestamps()
      )
    )
  },
  down: async ({ query }: any) => {
    await query.dropTable('Users')
  },
}
