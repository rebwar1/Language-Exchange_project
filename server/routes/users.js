// import express from 'express';
// const router = express.Router();

// import {
//   getAllLearner,
//   getLearnersByName,
//   getLearnersByLastName,
//   getLearnersByLanguage,
//   postLearners,
// } from '../models/users.js';

// router.get('/', async (req, res) => {
//   const { first_name, last_name, languages_speak, languages_interested } =
//     req.query;

//   if (first_name) {
//     const searchResults = await getLearnersByName(first_name);
//     res.json({
//       success: true,
//       message: `Searched First name for ${first_name}`,
//       payload: searchResults,
//     });
//     return;
//   }
//   if (last_name) {
//     const searchResults = await getLearnersByLastName(last_name);
//     res.json({
//       success: true,
//       message: `Searched Last name for ${last_name}`,
//       payload: searchResults,
//     });
//     return;
//   }
//   if (languages_speak) {
//     const searchResults = await getLearnersByLanguage(languages_speak);
//     res.json({
//       success: true,
//       message: `Searched Language for ${languages_speak}`,
//       payload: searchResults,
//     });
//     return;
//   }

//   const learners = await getAllLearner();

//   res.json({ success: true, message: `all learner`, payload: learners });
// });

// router.post('/', async (req, res) => {
//   const { first_name, last_name, languages_speak, languages_interested } =
//     req.body;
//   const newLearner = await postLearners(
//     first_name,
//     last_name,
//     languages_speak,
//     languages_interested
//   );
//   res.json({
//     success: true,
//     message: `Added learner ${first_name} ${last_name}`,
//     payload: newLearner,
//   });
// });

// export default router;

import express, { Router } from 'express';
const router = express.Router();

import {
  getAllLearner,
  getLearnersByName,
  getLearnersByLastName,
  getLearnersByLanguage,
  postLearners,
} from '../models/users.js';

router.use(express.json()); // Add this line to parse JSON data in the request body

router.get('/', async (req, res) => {
  const { first_name, last_name, languages_speak, languages_interested } =
    req.query;

  if (first_name) {
    const searchResults = await getLearnersByName(first_name);
    res.json({
      success: true,
      message: `Searched First name for ${first_name}`,
      payload: searchResults,
    });
    return;
  }
  if (last_name) {
    const searchResults = await getLearnersByLastName(last_name);
    res.json({
      success: true,
      message: `Searched Last name for ${last_name}`,
      payload: searchResults,
    });
    return;
  }
  if (languages_speak) {
    const searchResults = await getLearnersByLanguage(languages_speak);
    res.json({
      success: true,
      message: `Searched Language for ${languages_speak}`,
      payload: searchResults,
    });
    return;
  }

  const learners = await getAllLearner();

  res.json({ success: true, message: `all learner`, payload: learners });
});

router.post('/', async (req, res) => {
  const { first_name, last_name, languages_speak, languages_interested } =
    req.body;
  const newLearner = await postLearners(
    first_name,
    last_name,
    languages_speak,
    languages_interested
  );
  res.json({
    success: true,
    message: `Added learner ${first_name} ${last_name}`,
    payload: newLearner,
  });
});

export default router;
