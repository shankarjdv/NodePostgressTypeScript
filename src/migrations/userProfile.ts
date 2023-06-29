// migrations/20230601120000_create_users_table.ts

 

import { MigrationBuilder } from 'node-pg-migrate';

 

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable('users', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
    name: { type: 'varchar(100)', notNull: true },
    email: { type: 'varchar(100)', notNull: true, unique: true },
    created_at: { type: 'timestamptz', notNull: true, default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamptz', notNull: true, default: pgm.func('current_timestamp') },
    // Add other columns as needed
  });
};

 

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable('users');
};