const db = require('./models');

db.Post.create({
    title: 'Test',
    pendingTags: [{
        name: 'tag1'
    }, {
        name: 'tag2'
    }]
}, {
    include: [{
       model: db.Tag,
       as: 'pendingTags'
    }]
})
.then((post) => {
    console.log(post.toJSON());
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
