var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test');

var schema = mongoose.Schema({ name: String })
var Cat = mongoose.model('Cat', schema);

var kitty = new Cat({ name: 'Пушок' });
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Мяу');
    }
});
