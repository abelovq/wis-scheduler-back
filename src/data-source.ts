import { DataSourceOptions, DataSource } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres' as const,
  database: 'wisscheduler',
  url: process.env.DATABASE_URL,
  synchronize: process.env.NODE_ENV === 'production' ? false : true,
  entities: ['dist/**/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
