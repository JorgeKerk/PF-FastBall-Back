const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue : UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input the user's name",
          },
          notEmpty: {
            args: true,
            msg: "Please don't input an empty string",
          },
          len: {
            args: [2, 255],
            msg: "Please use more than one character",
          },
        },
      },
      lastName : {
        type: DataTypes.STRING
      },
      profilePic: {
        type: DataTypes.TEXT,
        defaultValue : null,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please don't input an empty string",
          },
          isUrl: {
            args: true,
            msg: "Please input a valid url format",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true
      },
      contry : {
        type : DataTypes.STRING,
        allowNull : false
      },
      city : {
        type : DataTypes.STRING,
        allowNull : false
      },
      address: {
        type : DataTypes.STRING,
        allowNull : false
      },
      password : {
        type : DataTypes.STRING
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      createdAt: true,
    }
  );
};