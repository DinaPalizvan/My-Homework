insert into employee (name, role) values('Marilla', 'manager'), 
('Gilbert', 'Salesperson'), 
('Anne', 'Project manager'),
('Lucas', 'Marketing specialist'),
('Felix', 'IT support technician');

update employee set name ='Dina' where id= 1;

delete from employee where id=3;

select * from employee where id=2;


SELECT * FROM office.employee;