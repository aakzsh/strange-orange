// // export ASTRA_DB_ID=1466b5b4-236f-4a60-a769-5cda3fcae5bf
// // export ASTRA_DB_REGION=us-west1
// // export ASTRA_DB_APPLICATION_TOKEN=AstraCS:iHFJRACILnyTWyBKMKPzPSqj:b20386447970318dfb91d9ef96a86301c12fde2c328430103678731bbd90c950
 
// const { createClient } = require("@astrajs/rest");

// // create an Astra DB client
// const astraClient = await createClient({
//   astraDatabaseId: process.env.ASTRA_DB_ID,
//   astraDatabaseRegion: process.env.ASTRA_DB_REGION,
//   applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
// });

// const basePath = "/api/rest/v2/namespaces/app/collections/users";

// // // get a single user by document id
// // const { data, status } = await astraClient.get(`${basePath}/cliff@wicklow.com`);

// // // get a subdocument by path
// // const { data, status } = await astraClient.get(
// //   `${basePath}/cliff@wicklow.com/blog/comments`
// // );

// // search a collection of documents
// // const { data, status } = await astraClient.get(basePath, {
// //   params: {
// //     where: {
// //       name: { $eq: "Cliff" },
// //     },
// //   },
// // });

// // create a new user without a document id
// // const { data, status } = await astraClient.post(basePath, {
// //   name: "cliff",
// // });

// // create a new user with a document id
// const { data, status } = await astraClient.put(
//   `${basePath}/cliff@wicklow.com`,
//   {
//     name: name,
//     score: score,
//   }
// );

// // create a user subdocument
// // const { data, status } = await astraClient.put(
// //   `${basePath}/cliff@wicklow.com/blog`,
// //   {
// //     title: "new blog",
// //   }
// // );

// // // partially update user
// // const { data, status } = await astraClient.patch(
// //   `${basePath}/cliff@wicklow.com`,
// //   {
// //     name: "cliff",
// //   }
// // );

// // // delete a user
// // // const { data, status } = await astraClient.delete(
// // //   `${basePath}/cliff@wicklow.com`
// // // );





// function update(score, name){
//     const { data, status } = await astraClient.put(
//         `${basePath}/cliff@wicklow.com`,
//         {
//           name: name,
//           score: score,
//         }
//       );
// }