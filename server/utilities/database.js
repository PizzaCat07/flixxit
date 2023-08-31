import { MongoClient, ObjectId } from "mongodb";

//functions to get docs from MongoDb

function getClient() {
  return new MongoClient(process.env.CONNECTION_STRING);
}

//get docs
export function getAllDocuments(collectionName) {
  return getClient()
    .connect()
    .then((connection) => {
      const db = connection.db(process.env.DEFAULT_DATABASE);
      return db.collection(collectionName).find().toArray();
    });
}

//get docs based on query
export function getFilteredDocuments(collectionName, query) {
  return getClient()
    .connect()
    .then((connection) => {
      const db = connection.db(process.env.DEFAULT_DATABASE);
      return db.collection(collectionName).find(query).toArray();
    });
}

//insert new doc
export function insertDocument(collectionName, document) {
  return getClient()
    .connect()
    .then((connection) => {
      const db = connection.db(process.env.DEFAULT_DATABASE);
      return db
        .collection(collectionName)
        .insertOne(document)
        .then((x) => {
          return db.collection(collectionName).find().toArray();
        });
    });
}

//delete doc
export function deleteDocument(collectionName, id) {
  return getClient()
    .connect()
    .then((connection) => {
      const db = connection.db(process.env.DEFAULT_DATABASE);
      return db
        .collection(collectionName)
        .deleteOne({ _id: new ObjectId(id) })
        .then((x) => {
          return db.collection(collectionName).find().toArray();
        });
    });
}

//update doc
export function updateDocumentWithId(collectionName, id, newValues) {
  return getClient()
    .connect()
    .then((connection) => {
      const db = connection.db(process.env.DEFAULT_DATABASE);
      return db
        .collection(collectionName)
        .updateOne({ _id: new ObjectId(id) }, { $set: newValues });
    });
}

export function documentExists(collectionName, query) {
  return getClient()
    .connect()
    .then((connection) => {
      const db = connection.db(process.env.DEFAULT_DATABASE);

      return db.collection(collectionName).countDocuments(query);
    });
}

export function updateRating(collectionName, id, newValues) {
  return getClient()
    .connect()
    .then((connection) => {
      const db = connection.db(process.env.DEFAULT_DATABASE);

      return db.collection(collectionName).updateOne(
        { id, "rating.email": newValues.rating.email },
        {
          $set: {
            "rating.$.vote": newValues.rating.vote,
            upCount: newValues.upCount,
            downCount: newValues.downCount,
          },
        }
      );
    });
}

export function addRating(collectionName, id, newValues) {
  return getClient()
    .connect()
    .then((connection) => {
      const db = connection.db(process.env.DEFAULT_DATABASE);
      return db.collection(collectionName).updateOne(
        { id },
        {
          $push: { rating: newValues.rating },
          $set: { upCount: newValues.upCount },
          $set: { downCount: newValues.downCount },
        }
      );
    });
}

export function getGenres(collectionName, query) {
  return getClient()
    .connect()
    .then((connection) => {
      const db = connection.db(process.env.DEFAULT_DATABASE);
      return db
        .collection(collectionName)
        .aggregate([
          {
            $match: { email: query },
          },
          {
            $unwind: "$genres",
          },
          {
            $group: { _id: "$email", GenreArray: { $addToSet: "$genres" } },
          },
        ])
        .toArray();
    });
}
