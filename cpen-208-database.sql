-- Create the database
CREATE DATABASE computer_engineering_db;

-- Connect to the database
\c computer_engineering_db;

-- Create schema
CREATE SCHEMA comp_eng_dept;

-- Create tables
CREATE TABLE comp_eng_dept.students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    email VARCHAR(100)
);

CREATE TABLE comp_eng_dept.fees (
    fee_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES comp_eng_dept.students(student_id),
    amount DECIMAL(10, 2),
    date_paid DATE
);

CREATE TABLE comp_eng_dept.courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(100),
    course_code VARCHAR(10)
);

CREATE TABLE comp_eng_dept.enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES comp_eng_dept.students(student_id),
    course_id INT REFERENCES comp_eng_dept.courses(course_id),
    enrollment_date DATE
);

CREATE TABLE comp_eng_dept.lecturers (
    lecturer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE comp_eng_dept.lecturer_course_assignments (
    assignment_id SERIAL PRIMARY KEY,
    lecturer_id INT REFERENCES comp_eng_dept.lecturers(lecturer_id),
    course_id INT REFERENCES comp_eng_dept.courses(course_id),
    assignment_date DATE
);

CREATE TABLE comp_eng_dept.teaching_assistants (
    ta_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE comp_eng_dept.lecturer_ta_assignments (
    assignment_id SERIAL PRIMARY KEY,
    lecturer_id INT REFERENCES comp_eng_dept.lecturers(lecturer_id),
    ta_id INT REFERENCES comp_eng_dept.teaching_assistants(ta_id),
    assignment_date DATE
);

-- Insert sample data
INSERT INTO comp_eng_dept.students (first_name, last_name, date_of_birth, email) VALUES
('Haqq', 'Bassit', '2005-04-07', 'haqq@gmail.com'),
('Vanessa', 'Ayertey', '2004-11-03', 'vanessa@gmail.com')
('Bernardine', 'Adusei', '2004-04-21', 'bernardine@gmail.com');

INSERT INTO comp_eng_dept.fees (student_id, amount, date_paid) VALUES
(1, 1000.00, '2024-01-15'),
(1, 500.00, '2024-03-10'),
(2, 1500.00, '2024-02-05');

INSERT INTO comp_eng_dept.courses (course_name, course_code) VALUES
('Computer Networks', 'CPEN301'),
('Database Systems', 'CPEN302');

INSERT INTO comp_eng_dept.enrollments (student_id, course_id, enrollment_date) VALUES
(1, 1, '2024-01-10'),
(2, 2, '2024-01-12');

INSERT INTO comp_eng_dept.lecturers (first_name, last_name, email) VALUES
('John', 'Asiamah', 'john.assiamah@gmail.com'),
('Percy', 'Okae', 'percy.okae@gmail.com');

INSERT INTO comp_eng_dept.lecturer_course_assignments (lecturer_id, course_id, assignment_date) VALUES
(1, 1, '2024-01-05'),
(2, 2, '2024-01-06');

INSERT INTO comp_eng_dept.teaching_assistants (first_name, last_name, email) VALUES
('Efo', 'Forster', 'forster.efo@gmail.com'),
('John', 'Kwame', 'kwame.j@gmail.com');

INSERT INTO comp_eng_dept.lecturer_ta_assignments (lecturer_id, ta_id, assignment_date) VALUES
(1, 1, '2024-01-07'),
(2, 2, '2024-01-08');

-- Create function to calculate outstanding fees
CREATE OR REPLACE FUNCTION comp_eng_dept.calculate_outstanding_fees()
RETURNS JSON AS $$
DECLARE
    result JSON;
BEGIN
    result := json_agg(
        json_build_object(
            'student_id', s.student_id,
            'first_name', s.first_name,
            'last_name', s.last_name,
            'outstanding_fees', coalesce((SELECT sum(f.amount) FROM comp_eng_dept.fees f WHERE f.student_id = s.student_id), 0)
        )
    )
    FROM comp_eng_dept.students s;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql;

-- To get the outstanding fees, you can call the function like this:
SELECT comp_eng_dept.calculate_outstanding_fees();
