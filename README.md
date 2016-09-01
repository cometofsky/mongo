# mongo
Learning MongoDB with NodeJS



**/Commands/**
#Let's assume I have a database named "book"
#and that database holds a collection named 
#"page"

#to select a database
use book;

#insert single document
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

#insert multiple document
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

