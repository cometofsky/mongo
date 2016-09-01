# mongo
###Learning MongoDB with NodeJS



**/Commands/**
#####Let's assume I have a database named "book" and that database holds a collection named "page"

######to select a database
use book;

####INSERT
######insert single document
db.page.insert({
  "name": "Da Vinci Code",
  "year":1990,
  "chapter": {
    "one": "Chapter One",
    "two": "Chapter Two",
    "three": "Chapter Three"
  },
  "map":{
    "location":{
      "address":"27 Regent Street"
    }
  }
});

######insert multiple document
db.page.insertMany(
[{
  "name": "Da Vinci Code",
  "year":1990,
  "chapter": {
    "one": "Chapter One",
    "two": "Chapter Two",
    "three": "Chapter Three"
  },
  "map":{
    "location":{
      "address":"27 Regent Street"
    }
  }
},
{
  "name": "Da Vinci Code 2",
  "year":1992,
  "chapter": {
    "one": "Chapter One-1",
    "two": "Chapter Two-1",
    "three": "Chapter Three-1"
  },
  "map":{
    "location":{
      "address":"27 Regent Street-1"
    }
  }
}]);

####READ
######find all documents in a collection
db.page.find({});

######get count of a find
db.page.find({}).count();

######see returned command value in a beautiful way
db.page.find({}).pretty();

######find specific document by a value
db.page.find({name: "Da Vinci Code"});

######find exact match in an array where "Writer 1" will be first and then "Writer 2" will be second place as exact and no ######more writers
db.page.find({"writer": ["Writer 1", "Writer 2"]}).pretty();;

######find a value in an array
db.page.find({"writer": "Writer 1"}).pretty();

######find values where a value is at exact position
db.page.find({"writer.0": "Writer 1"}).pretty();

######find a nested object value
db.page.find({"map.location": "Address 1"}).pretty();

####CURSOR
######mongo by default returns data of size within 1MB and 101 documents in one batch. We can go to next batch
var c = db.page.find();
var doc = function() {return c.hasNext() ? c.next() : null;};

######see how many objects left
c.objsLeftInBatch();

####PROJECTIONS | CONDITIONS/LIMIT
#####exclude some columns or include only some, _id is always returned unless explicitly excluded. 0 means exclude
db.page.find({"rated": "3.5"}, {title: 1}).pretty();
db.page.find({"rated": "3.5}, {title: 0, location: 0}).pretty();
