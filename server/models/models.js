const sequelize = require('../db')
const {DataTypes} = require('sequelize')

// Define User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('non-admin', 'admin'),
        allowNull: false,
        defaultValue: 'non-admin',
    },
    language: {
        type: DataTypes.ENUM('english', 'russian'),
        allowNull: false,
        defaultValue: 'russian',
    },
    theme: {
        type: DataTypes.ENUM('light', 'dark'),
        allowNull: false,
        defaultValue: 'light',
    },
},{
        timestamps: false,
        tableName: 'user',
});

// Define Theme model
const Theme = sequelize.define('theme', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'theme',
});

// Define Collection model
const Collection = sequelize.define('Collection', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING(255),
    },
    optional_params: {
        type: DataTypes.JSON,
    },
},{
    timestamps: false,
    tableName: 'collection',
});

// Define Item model
const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    tags: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING(255),
    },
},{
    timestamps: false,
    tableName: 'item',
});

// Define Likes model
const Likes = sequelize.define('Likes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
},{
    timestamps: false,
    tableName: 'likes',
});

// Define Comment model
const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('now'),
    },
},{
    timestamps: false,
    tableName: 'comment',
});

// Define associations between models
User.hasMany(Collection, { foreignKey: 'user_id' });
Collection.belongsTo(User, { foreignKey: 'user_id' });

Theme.hasMany(Collection, { foreignKey: 'theme_id' });
Collection.belongsTo(Theme, { foreignKey: 'theme_id' });

User.hasMany(Likes);
Likes.belongsTo(User);

Item.hasMany(Likes);
Likes.belongsTo(Item);

User.hasMany(Comment);
Comment.belongsTo(User);

Item.hasMany(Comment);
Comment.belongsTo(Item);


module.exports = {
    sequelize,
    User,
    Theme,
    Collection,
    Item,
    Likes,
    Comment,
};