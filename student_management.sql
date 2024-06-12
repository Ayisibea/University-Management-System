-- CREATE DATABASE student_management;

-- CREATE TABLE students (
--     student_id VARCHAR(8) PRIMARY KEY,
--     first_name TEXT,
--     last_name TEXT,
--     birthdate DATE,
--     email VARCHAR(100),
--     phone VARCHAR(20)
-- );

-- CREATE TABLE fees_payments (
--     payment_id SERIAL PRIMARY KEY,
--     student_id VARCHAR(8) REFERENCES students(student_id),
--     amount DECIMAL(10, 2),
--     total_fees NUMERIC(10,2),
--     payment_date DATE
-- );

-- CREATE TABLE courses (
--     course_id VARCHAR(8) PRIMARY KEY,
--     course_name TEXT,
--     course_code TEXT
-- );

-- CREATE TABLE course_enrollment (
--     enrollment_id INT PRIMARY KEY,
--     student_id VARCHAR(8) REFERENCES students(student_id),
--     course_id INT REFERENCES courses(course_id),
--     enrollment_date DATE
-- );

-- CREATE TABLE lecturers (
--     lecture_id VARCHAR(8) PRIMARY KEY,
--     first_name TEXT,
--     last_name TEXT,
--     email VARCHAR(100)
-- );

-- CREATE TABLE teaching_assistants(
--     ta_id INT PRIMARY KEY,
-- 	   ta_name TEXT
-- );

-- CREATE TABLE lectures_courses (
--     assignment_id SERIAL PRIMARY KEY,
--     lecture_id VARCHAR(8) REFERENCES lectures(lecture_id),
--     course_id SERIAL REFERENCES courses(course_id)
-- );

-- CREATE TABLE lectures_ta (
--     assignment_id SERIAL PRIMARY KEY,
--     lecture_id VARCHAR(8) REFERENCES lectures(lecture_id),
--     ta_id INT REFERENCES teaching_assistants(ta_id)
-- );


-- -- Insert Students
-- INSERT INTO students (student_id, first_name, last_name, birthdate, email, phone)
-- VALUES
-- ('11347946','Derrick Ampongsah', 'Amomah' ,'2004-06-17','daamomah@st.ug.edu.gh','0208860777'),
-- ('11004272','Ishaan', 'Bhardwaj','2003-02-18','ibhardwaj@st.ug.edu.gh','0553862551'),	
-- ('11025159','David Ntow' ,'Anno','2004-05-28','dnanno@st.ug.edu.gh','0255478957'),
-- ('11023595',  'Cyril Etornam','Nyava','2004-08-14','cenyava@st.ug.edu.gh','0531122529'),	
-- ('11296662','Kwaku Mawuli','Amevenku','2004-09-17','mkamevenku@st.ug.edu.gh','0245258862');	


-- -- Insert Courses
-- INSERT INTO courses (course_name, course_code)
-- VALUES 
-- ('Software Engineering', 'CPEN208'),
-- ('Academic Writing 2','CBAS 210'),
-- ('Data Structures and Algorithms','CPEN204'),
-- ('Linear Circuits','CPEN206'),
-- ('Data Communication','CPEN212'),
-- ('Differential Equations','SENG202'),
-- ('Computer Systems Design','CPEN202');

-- -- Insert Enrollments
-- INSERT INTO course_enrollment (student_id, course_id, enrollment_date)
-- VALUES 
-- ('11347946', 15, '2024-05-06'),
-- ('11023595', 16, '2024-06-01'),
-- ('11004272', 20, '2024-05-03');

-- -- Insert Lecturers
-- INSERT INTO lecturers (lecture_id,first_name, last_name, email)
-- VALUES 
-- ('11123256','John', 'Assiamah', 'jassiamah@st.ug.edu.gh'),
-- ('11134566','Margaret', 'Richardson', 'mrichardson@st.ug.edu.gh'),
-- ('11178907','Godfrey Augustus','Mills','gamills@st.ug.edu.gh'),
-- ('11225364','Percy','Okae','pokae@st.ug.edu.gh'),
-- ('11458622','John','Kutor','jkutor@st.ug.edu.gh'),
-- ('11123335','Agyare','Debrah','adebrah@st.ug.edu.gh'),
-- ('21121223','Isaac Adjaye','Aboagye','iaaboagye@st.ug.edu.gh');

-- -- Assign Lectures to Courses
-- INSERT INTO lectures_courses (lecture_id, course_id)
-- VALUES 
-- ('11123256', 15),
-- ('11225364',16),
-- ('11134566',17),
-- ('11178907',18),
-- ('21121223',19),
-- ('11458622',20),
-- ('11123335',21);

-- INSERT INTO teaching_assistants(ta_id,ta_name)
-- VALUES
-- (1,'Hakeem Nasser'),
-- (2,'Foster Anopansuo'),
-- (3,'Samed'),
-- (4,'Thaddeus'),
-- (5,'Bamzy');

-- -- Assign Lecturers to TAs
-- INSERT INTO lectures_ta (lecture_id, ta_id)
-- VALUES 
-- ('11178907',1),
-- ('11134566',2),
-- ('21121223',3),
-- ('11458622',4),
-- ('11123335',5),
-- ('11123256',2);

-- -- Insert Fees Payments
-- INSERT INTO fees_payments (student_id, amount, payment_date)
-- VALUES 
-- ('11347946', 500.00, '2024-05-05'),
-- ('11023595', 300.00, '2024-03-15'),
-- ('11004272', 600.00, '2024-01-20');

--Creating function
CREATE OR REPLACE FUNCTION calculate_outstanding_fees()
RETURNS SETOF JSON AS $$
BEGIN
    RETURN QUERY
    SELECT 
        json_build_object(
            'student_id', s.student_id,
            'first_name', s.first_name,
            'last_name', s.last_name,
            'outstanding_fees', 2500 - COALESCE(SUM(fp.amount), 0)
        )
    FROM 
        students s
    LEFT JOIN 
        fees_payments fp ON s.student_id = fp.student_id
    GROUP BY 
        s.student_id, s.first_name, s.last_name;
END;
$$ LANGUAGE plpgsql;
