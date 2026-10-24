# Write your MySQL query statement be
select name as Employee from Employee e where salary>(select salary from Employee m where m.id=e.managerId);