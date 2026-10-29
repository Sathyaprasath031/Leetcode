# Write your MySQL query statement below
WITH FilteredStadium AS (
        SELECT 
                id, 
                        visit_date, 
                                people,
                                        (id - ROW_NUMBER() OVER(ORDER BY id)) as grp
                                            FROM Stadium
                                                WHERE people >= 100
                                                )

                                                SELECT 
                                                    id, 
                                                        visit_date, 
                                                            people
                                                            FROM FilteredStadium
                                                            WHERE grp IN (
                                                                SELECT grp 
                                                                    FROM FilteredStadium 
                                                                        GROUP BY grp 
                                                                            HAVING COUNT(*) >= 3
                                                                            )
                                                                            ORDER BY visit_date;
