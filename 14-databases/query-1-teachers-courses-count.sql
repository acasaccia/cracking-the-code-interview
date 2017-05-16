SELECT 
  "Teachers"."TeacherName", COALESCE("TeacherCoursesCount"."count", 0)
FROM
  "Teachers" LEFT JOIN
  (
  SELECT
    "Courses"."TeacherID", COUNT("StudentCourses"."StudentID")
  FROM
    "Courses" INNER JOIN "StudentCourses"
  ON
    "Courses"."CourseID" = "StudentCourses"."CourseID"
  GROUP BY
    "Courses"."TeacherID"
  ) "TeacherCoursesCount"
ON
  "Teachers"."TeacherID" = "TeacherCoursesCount"."TeacherID";