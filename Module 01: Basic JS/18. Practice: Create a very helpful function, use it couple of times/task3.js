const cat = {
    sound: 'meow',
    greet: function() {
        setTimeout(function() {
            console.log(this.sound)
        }.bind(this), 0)
    }
};

cat.greet();
