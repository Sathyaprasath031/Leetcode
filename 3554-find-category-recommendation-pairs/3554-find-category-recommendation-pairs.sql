WITH UserCategories AS (
        -- Get the distinct categories each user has purchased from
            SELECT DISTINCT pp.user_id, pi.category
                FROM ProductPurchases pp
                    JOIN ProductInfo pi ON pp.product_id = pi.product_id
                    )
                    SELECT 
                        u1.category AS category1, 
                            u2.category AS category2, 
                                COUNT(u1.user_id) AS customer_count
                                FROM UserCategories u1
                                JOIN UserCategories u2 
                                    ON u1.user_id = u2.user_id 
                                        AND u1.category < u2.category
                                        GROUP BY 
                                            u1.category, 
                                                u2.category
                                                HAVING 
                                                    COUNT(u1.user_id) >= 3
                                                    ORDER BY 
                                                        customer_count DESC, 
                                                            category1 ASC, 
                                                                category2 ASC;
