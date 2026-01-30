const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/moon/start', (req, res) => {
  res.render('moon/start')
})

router.post('/moon/start', (req, res) => {
  res.redirect('/moon/eligibility')
})

router.get('/moon/eligibility', (req, res) => {
  res.render('moon/eligibility')
})

router.post('/moon/eligibility', (req, res) => {
  const { ukCitizen, ageGroup, medicallyFit } = req.body

  if (ukCitizen !== 'yes' || ageGroup !== '18-64' || medicallyFit !== 'yes') {
    return res.redirect('/moon/not-eligible')
  }

  return res.redirect('/moon/work-details')
})

router.get('/moon/not-eligible', (req, res) => {
  res.render('moon/not-eligible')
})

router.get('/moon/work-details', (req, res) => {
  res.render('moon/work-details')
})

router.post('/moon/work-details', (req, res) => {
  res.redirect('/moon/travel-details')
})

router.get('/moon/travel-details', (req, res) => {
  res.render('moon/travel-details')
})

router.post('/moon/travel-details', (req, res) => {
  res.redirect('/moon/declarations')
})

router.get('/moon/declarations', (req, res) => {
  res.render('moon/declarations')
})

router.post('/moon/declarations', (req, res) => {
  res.redirect('/moon/check-answers')
})

router.get('/moon/check-answers', (req, res) => {
  res.render('moon/check-answers')
})

router.post('/moon/check-answers', (req, res) => {
  res.redirect('/moon/confirmation')
})

router.get('/moon/confirmation', (req, res) => {
  res.render('moon/confirmation')
})

module.exports = router
