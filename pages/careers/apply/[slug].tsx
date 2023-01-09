import React from 'react'
import JobApplicationForm from '../../../components/jobApplicationForm'
import {useRouter} from 'next/router'

function Apply() {
  const router = useRouter()
  const {job} = router.query
  return (
    <JobApplicationForm link={job} />
  )
}

export default Apply