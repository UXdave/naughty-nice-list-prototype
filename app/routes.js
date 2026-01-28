const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Eligibility: UK citizen check
router.post('/eligibility/uk-citizen-answer', function (req, res) {
  const ukCitizen = req.session.data['uk-citizen']

  if (ukCitizen === 'yes') {
    res.redirect('/eligibility/age')
  } else {
    res.redirect('/eligibility/not-eligible')
  }
})

// Eligibility: Age check
router.post('/eligibility/age-answer', function (req, res) {
  const over18 = req.session.data['over-18']

  if (over18 === 'yes') {
    res.redirect('/eligibility/employment-contract')
  } else {
    res.redirect('/eligibility/not-eligible')
  }
})

// Eligibility: Employment contract check
router.post('/eligibility/employment-contract-answer', function (req, res) {
  const hasContract = req.session.data['has-employment-contract']

  if (hasContract === 'yes') {
    res.redirect('/eligibility/health-assessment')
  } else {
    res.redirect('/eligibility/not-eligible')
  }
})

// Eligibility: Health assessment check
router.post('/eligibility/health-assessment-answer', function (req, res) {
  const hasHealthAssessment = req.session.data['has-health-assessment']

  if (hasHealthAssessment === 'yes') {
    res.redirect('/personal-details')
  } else {
    res.redirect('/eligibility/not-eligible')
  }
})

module.exports = router
