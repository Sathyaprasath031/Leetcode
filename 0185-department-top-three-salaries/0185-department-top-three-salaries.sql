WITH SalaryRankings AS (
SELECT 
        d.name AS Department,
                e.name AS Employee,
                        e.salary AS Salary,
                                DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS ranking
                                    FROM Employee e
                                        JOIN Department d ON e.departmentId = d.id
        ) 
        SELECT 
            Department, 
                Employee, 
                    Salary
                    FROM SalaryRankings
                    WHERE ranking <= 3; 
                    -- Nothing should come after this semicolon
