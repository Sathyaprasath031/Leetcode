WITH RECURSIVE 
Levels AS (
    -- Base case: The CEO (level 1)
        SELECT employee_id, employee_name, 1 AS level
            FROM Employees
                WHERE manager_id IS NULL
                    
                        UNION ALL
                            
                                -- Recursive step: Employees reporting to the current level
                                    SELECT e.employee_id, e.employee_name, l.level + 1
                                        FROM Employees e
                                            JOIN Levels l ON e.manager_id = l.employee_id
                                            ),
                                            Paths AS (
                                                -- Base case: Every employee is the root of their own team
                                                    SELECT employee_id AS root_id, employee_id AS node_id
                                                        FROM Employees
                                                            
                                                                UNION ALL
                                                                    
                                                                        -- Recursive step: Traverse down the hierarchy to find all subordinates
                                                                            SELECT p.root_id, e.employee_id
                                                                                FROM Paths p
                                                                                    JOIN Employees e ON p.node_id = e.manager_id
                                                                                    ),
                                                                                    Aggregated AS (
                                                                                        -- Calculate team size and budget for each employee
                                                                                            SELECT 
                                                                                                    p.root_id AS employee_id,
                                                                                                            COUNT(p.node_id) - 1 AS team_size,
                                                                                                                    SUM(e.salary) AS budget
                                                                                                                        FROM Paths p
                                                                                                                            JOIN Employees e ON p.node_id = e.employee_id
                                                                                                                                GROUP BY p.root_id
                                                                                                                                )
                                                                                                                                -- Combine the results and order as requested
                                                                                                                                SELECT 
                                                                                                                                    l.employee_id,
                                                                                                                                        l.employee_name,
                                                                                                                                            l.level,
                                                                                                                                                a.team_size,
                                                                                                                                                    a.budget
                                                                                                                                                    FROM Levels l
                                                                                                                                                    JOIN Aggregated a ON l.employee_id = a.employee_id
                                                                                                                                                    ORDER BY 
                                                                                                                                                        l.level ASC, 
                                                                                                                                                            a.budget DESC, 
                                                                                                                                                                l.employee_name ASC;
                                                                                                                                                                
