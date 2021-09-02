const User = require("../models/user");
const Post = require("../models/post");
const Comments = require("../models/comments");

User.hasMany(Post, {
    foreignKey: {
        allowNull: false
    }
});
Post.belongsTo(User);

User.hasMany(Comments, {
    foreignKey: {
        allowNull: false
    }
});
Comments.belongsTo(User);

Post.hasMany(Comments, {
    foreignKey: {
        allowNull: false
    }
});
Comments.belongsTo(Post);
