import {
  Model,
  FindOptions,
  DataTypes,
  BelongsTo,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  Sequelize,
} from 'sequelize';

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

class User extends Model {

}

User.init({
  title: DataTypes.STRING,
}, {
  sequelize,
});
