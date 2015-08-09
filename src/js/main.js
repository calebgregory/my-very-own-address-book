angular
  .module('addressBook', [])

  .controller('Main', function() {
    var main = this;

    main.people = [
      {
        name    : "Alex",
        twitter : "@al",
        phone   : 1234567890
      },
      {
        name    : "Bessa",
        twitter : "@olebess",
        phone   : 3216540987
      },
      {
        name    : "Creotine",
        twitter : "@crawdaddy",
        phone   : 3241560798
      },
      {
        name    : "Dugger",
        twitter : "@duggy",
        phone   : 3124657089
      }
    ];

    main.newEntry = {};

    main.addEntry = function() {
      main.people.push(main.newEntry);
      main.newEntry = {};
      $('#modal').modal('hide');
    };

    main.removeEntry = function(person) {
      main.people.splice(main.people.indexOf(person), 1)
    };
  })
