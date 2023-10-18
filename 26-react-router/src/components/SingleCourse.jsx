import { NavLink, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
import { useEffect } from 'react'

const SingleCourse = () => {
  const params = useParams()
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.slug)
  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  return (
    <>
      <h1>{course?.title}</h1>
      <h3>{course?.slug}</h3>
      <h3>{course?.id}</h3>
      <br />
      <NavLink to=".." relative="path" className="courseLink">
        Back to Courses
      </NavLink>
    </>
  )
}

export default SingleCourse
